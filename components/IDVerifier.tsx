
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { CURRICULUM_DATA, GRADE_MAP, SUBJECT_MAP, LEVEL_MAP, GRADE_TO_CODE, CODE_TO_GRADE, CURRICULUM_BRANCH_TITLES } from '../constants';
import { parseLatex, ID_REGEX, parseId, validateQuestionWithFilters, formatId, getCurriculumChapters, getAvailableSubjects, isGradeTHCS } from '../utils';
import { 
  RefreshCw, CheckCircle, XCircle, 
  Save, Copy, X, ListFilter,
  Hash, ClipboardCheck, Database, FileText, Upload,
  Zap, Wand2, Check, ArrowRight, Filter
} from 'lucide-react';
import { SubjectCode, LevelCode, Question } from '../types';

interface VerificationResult {
  question: Question;
  isCorrect: boolean;
  errors: string[];
  suggestedId?: string;
}

interface IDVerifierProps {
  bankQuestions: Question[];
  setBankQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  initialQuestions?: Question[];
  onClearInitial?: () => void;
}

const guessLessonFromContent = (content: string, lessons: any[]): string | null => {
  if (!content || lessons.length === 0) return null;
  const contentLower = content.toLowerCase();
  for (const lesson of lessons) {
    const titleLower = lesson.title.toLowerCase();
    const cleanTitle = titleLower.replace(/^bài\s+\d+[\.\s:-]*/i, '').trim();
    if (cleanTitle.length > 4 && contentLower.includes(cleanTitle)) {
      return lesson.code;
    }
  }
  return null;
};

const suggestCorrectId = (idString: string, context: { grade: string, subject: string, chapter: string, lesson: string, level: string }): string => {
  const levelMap: Record<string, string> = {
    'Y': 'N', 'B': 'H', 'K': 'V', 'G': 'C', 'T': 'C',
    'N': 'N', 'H': 'H', 'V': 'V', 'C': 'C'
  };
  const parsed = parseId(idString);
  const targetGrade = context.grade !== 'ALL' ? context.grade : (parsed.grade ? (CODE_TO_GRADE[parsed.grade] || parsed.grade) : '10');
  const targetGradeCode = GRADE_TO_CODE[targetGrade] || targetGrade;
  const isTHCS = ['6', '7', '8', '9'].includes(targetGradeCode);

  const finalLevel = (context.level !== 'ALL' && context.level !== 'KEEP') 
    ? context.level 
    : (parsed.level ? (levelMap[parsed.level.toUpperCase()] || 'N') : 'N');

  if (isTHCS) {
    const gradeChaps = CURRICULUM_DATA[targetGradeCode]?.chapters || [];
    let finalChap = context.chapter !== 'ALL' ? context.chapter : (parsed.chapter || 'C1');
    if (!finalChap.startsWith('C')) finalChap = `C${finalChap}`;
    if (!gradeChaps.some(c => c.code === finalChap)) finalChap = gradeChaps[0]?.code || 'C1';
    const chapObj = gradeChaps.find(c => c.code === finalChap);

    let finalLesson = context.lesson !== 'ALL' ? context.lesson : (parsed.lesson || chapObj?.lessons[0]?.code || '1');
    if (!chapObj?.lessons.some(l => l.code === finalLesson)) finalLesson = chapObj?.lessons[0]?.code || '1';
    const lesObj = chapObj?.lessons.find(l => l.code === finalLesson);

    let finalForm = parsed.form && lesObj?.types.some(t => t.code === parsed.form) ? parsed.form : (lesObj?.types[0]?.code || '1');

    return `%[${targetGradeCode}-${finalChap}-${finalLesson}-${finalForm}-(${finalLevel})]`;
  } else {
    const availableSubs = getAvailableSubjects(targetGradeCode);
    let finalSub = context.subject !== 'ALL' ? context.subject : (parsed.subject || availableSubs[0]?.code || 'D');
    if (!availableSubs.some(s => s.code === finalSub)) finalSub = availableSubs[0]?.code || 'D';

    const branchList = (CURRICULUM_DATA[targetGradeCode] as any)?.[finalSub] || [];
    let finalChap = context.chapter !== 'ALL' ? context.chapter : (parsed.chapter ? parsed.chapter.replace(/^C/, '') : (branchList[0]?.code || '1'));
    if (!branchList.some((c: any) => c.code === finalChap)) finalChap = branchList[0]?.code || '1';
    const chapObj = branchList.find((c: any) => c.code === finalChap);

    let finalLesson = context.lesson !== 'ALL' ? context.lesson : (parsed.lesson || chapObj?.lessons[0]?.code || '1');
    if (!chapObj?.lessons.some((l: any) => l.code === finalLesson)) finalLesson = chapObj?.lessons[0]?.code || '1';
    const lesObj = chapObj?.lessons.find((l: any) => l.code === finalLesson);

    let finalForm = parsed.form && lesObj?.types.some((t: any) => t.code === parsed.form) ? parsed.form : (lesObj?.types[0]?.code || '1');

    return `%[${targetGradeCode}${finalSub}${finalChap}${finalLevel}${finalLesson}-${finalForm}]`;
  }
};

const IDEditModal = ({ 
  question, onClose, onSave, targetContext 
}: { 
  question: Question; onClose: () => void; onSave: (newId: string) => void;
  targetContext: { grade: string, subject: string, chapter: string, lesson: string, level: string }
}) => {
  const [grade, setGrade] = useState<string>('10');
  const [subject, setSubject] = useState<SubjectCode>('D');
  const [chapter, setChapter] = useState('1');
  const [lesson, setLesson] = useState('1');
  const [level, setLevel] = useState<string>('N');
  const [form, setForm] = useState('1');

  const gradeCode = GRADE_TO_CODE[grade] || grade;
  const isTHCS = isGradeTHCS(grade);

  useEffect(() => {
    const meta = parseId(question.idString);
    const targetGrade = targetContext.grade !== 'ALL' ? targetContext.grade : '10';
    const initialGrade = meta.grade ? (CODE_TO_GRADE[meta.grade] || meta.grade) : targetGrade;
    const initialGradeCode = GRADE_TO_CODE[initialGrade] || initialGrade;
    const initialIsTHCS = ['6', '7', '8', '9'].includes(initialGradeCode);

    setGrade(initialGrade);
    
    if (initialIsTHCS) {
      setSubject('D');
      const chaps = CURRICULUM_DATA[initialGradeCode]?.chapters || [];
      const initChap = (meta.chapter && meta.chapter.startsWith('C')) ? meta.chapter : (targetContext.chapter !== 'ALL' ? targetContext.chapter : (chaps[0]?.code || 'C1'));
      setChapter(initChap);
      const chapObj = chaps.find(c => c.code === initChap) || chaps[0];
      const initLes = meta.lesson || (targetContext.lesson !== 'ALL' ? targetContext.lesson : (chapObj?.lessons[0]?.code || '1'));
      setLesson(initLes);
      setForm(meta.form || '1');
    } else {
      const availSubs = getAvailableSubjects(initialGradeCode);
      const initSub = (['D', 'H', 'C'].includes(meta.subject) ? meta.subject : (targetContext.subject !== 'ALL' ? targetContext.subject : (availSubs[0]?.code || 'D'))) as SubjectCode;
      setSubject(initSub);
      const chaps = (CURRICULUM_DATA[initialGradeCode] as any)?.[initSub] || [];
      const initChap = meta.chapter ? meta.chapter.replace(/^C/, '') : (targetContext.chapter !== 'ALL' ? targetContext.chapter : (chaps[0]?.code || '1'));
      setChapter(initChap);
      const chapObj = chaps.find((c: any) => c.code === initChap) || chaps[0];
      const initLes = meta.lesson || (targetContext.lesson !== 'ALL' ? targetContext.lesson : (chapObj?.lessons[0]?.code || '1'));
      setLesson(initLes);
      setForm(meta.form || '1');
    }

    setLevel(meta.level || (targetContext.level !== 'ALL' && targetContext.level !== 'KEEP' ? targetContext.level : 'N'));
  }, [question.uid]);

  const availableSubjects = useMemo(() => getAvailableSubjects(grade), [grade]);
  const chapters = useMemo(() => getCurriculumChapters(grade, subject), [grade, subject]);
  const currentChapter = useMemo(() => chapters.find(c => c.code === chapter) || chapters[0], [chapters, chapter]);
  const lessons = useMemo(() => currentChapter?.lessons || [], [currentChapter]);
  const currentLesson = useMemo(() => lessons.find(l => l.code === lesson) || lessons[0], [lessons, lesson]);
  const forms = useMemo(() => currentLesson?.types || [], [currentLesson]);

  // Khi đổi grade, cập nhật chapter và lesson hợp lệ
  const handleGradeChange = (newGrade: string) => {
    setGrade(newGrade);
    const newGradeCode = GRADE_TO_CODE[newGrade] || newGrade;
    const isNewTHCS = ['6', '7', '8', '9'].includes(newGradeCode);
    if (isNewTHCS) {
      const newChaps = CURRICULUM_DATA[newGradeCode]?.chapters || [];
      const firstChap = newChaps[0]?.code || 'C1';
      setChapter(firstChap);
      setLesson(newChaps[0]?.lessons[0]?.code || '1');
      setForm(newChaps[0]?.lessons[0]?.types[0]?.code || '1');
    } else {
      const subs = getAvailableSubjects(newGradeCode);
      const newSub = subs[0]?.code || 'D';
      setSubject(newSub);
      const newChaps = (CURRICULUM_DATA[newGradeCode] as any)?.[newSub] || [];
      const firstChap = newChaps[0]?.code || '1';
      setChapter(firstChap);
      setLesson(newChaps[0]?.lessons[0]?.code || '1');
      setForm(newChaps[0]?.lessons[0]?.types[0]?.code || '1');
    }
  };

  const handleSubjectChange = (newSub: SubjectCode) => {
    setSubject(newSub);
    const newChaps = (CURRICULUM_DATA[gradeCode] as any)?.[newSub] || [];
    const firstChap = newChaps[0]?.code || '1';
    setChapter(firstChap);
    setLesson(newChaps[0]?.lessons[0]?.code || '1');
    setForm(newChaps[0]?.lessons[0]?.types[0]?.code || '1');
  };

  const handleChapterChange = (newChap: string) => {
    setChapter(newChap);
    const chapObj = chapters.find(c => c.code === newChap);
    const firstLesson = chapObj?.lessons[0]?.code || '1';
    setLesson(firstLesson);
    setForm(chapObj?.lessons[0]?.types[0]?.code || '1');
  };

  const handleLessonChange = (newLes: string) => {
    setLesson(newLes);
    const lesObj = lessons.find(l => l.code === newLes);
    setForm(lesObj?.types[0]?.code || '1');
  };

  const handleUpdate = () => {
    const newId = formatId({ grade, subject, chapter, lesson, form, level });
    onSave(newId);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-[#1e293b] border border-slate-700 w-full max-w-3xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
        <div className="p-6 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <Hash size={24} className="text-blue-400" />
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight">Cấu trúc & Đồng bộ ID</h2>
              <p className="text-xs text-slate-400 font-mono">
                {isTHCS ? 'Quy chuẩn THCS: %[Lớp-Chương-Bài-Dạng-(Mức)]' : 'Quy chuẩn THPT: %[LớpNhánhChươngMứcBài-Dạng]'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-full transition-colors"><X size={24}/></button>
        </div>
        <div className="p-8 grid grid-cols-2 gap-x-10 gap-y-6 bg-slate-900/40 text-white">
          <div className="space-y-6">
             <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Khối lớp</label>
               <select value={grade} onChange={e => handleGradeChange(e.target.value)} className="w-full h-11 bg-slate-800 border border-slate-700 rounded-xl px-4 text-sm font-bold outline-none text-white">
                 {Object.entries(GRADE_MAP).map(([k, v]) => <option key={k} value={CODE_TO_GRADE[k] || k}>{v}</option>)}
               </select>
             </div>
             <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Phân môn</label>
               {isTHCS ? (
                 <div className="w-full h-11 bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 text-sm font-medium text-slate-400 flex items-center italic">
                   Toán THCS (Không phân môn)
                 </div>
               ) : (
                 <select value={subject} onChange={e => handleSubjectChange(e.target.value as SubjectCode)} className="w-full h-11 bg-slate-800 border border-slate-700 rounded-xl px-4 text-sm font-bold outline-none text-white">
                   {availableSubjects.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
                 </select>
               )}
             </div>
             <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Chương học</label>
               <select value={chapter} onChange={e => handleChapterChange(e.target.value)} className="w-full h-11 bg-slate-800 border border-slate-700 rounded-xl px-4 text-sm font-bold outline-none text-white truncate">
                 {chapters.map(c => <option key={c.code} value={c.code}>{c.title}</option>)}
               </select>
             </div>
          </div>
          <div className="space-y-6">
             <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Bài học</label>
               <select value={lesson} onChange={e => handleLessonChange(e.target.value)} className="w-full h-11 bg-slate-800 border border-slate-700 rounded-xl px-4 text-sm font-bold outline-none text-white truncate">
                 {lessons.map(l => <option key={l.code} value={l.code}>{l.title}</option>)}
               </select>
             </div>
             <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Dạng bài tập</label>
               <select value={form} onChange={e => setForm(e.target.value)} className="w-full h-11 bg-slate-800 border border-slate-700 rounded-xl px-4 text-sm font-bold outline-none text-white truncate">
                 {forms.map(f => <option key={f.code} value={f.code}>Dạng {f.code}: {f.title}</option>)}
               </select>
             </div>
             <div className="space-y-1.5"><label className="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Mức độ nhận thức</label>
               <select value={level} onChange={e => setLevel(e.target.value)} className="w-full h-11 bg-slate-800 border border-slate-700 rounded-xl px-4 text-sm font-bold outline-none text-white">
                 {Object.entries(LEVEL_MAP).map(([k, v]) => <option key={k} value={k}>{v} ({k})</option>)}
               </select>
             </div>
             <div className="px-4 py-3 bg-blue-500/10 border border-blue-500/30 rounded-2xl mt-4 text-center">
                <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">XEM TRƯỚC MÃ ID CHUẨN</p>
                <div className="text-xl font-mono font-black text-white flex items-center justify-center">
                  {formatId({ grade, subject, chapter, lesson, form, level })}
                </div>
             </div>
          </div>
        </div>
        <div className="p-6 bg-slate-800/30 border-t border-slate-700 flex justify-end gap-4">
          <button onClick={onClose} className="px-8 py-3 text-xs font-black text-slate-500 hover:text-white uppercase tracking-widest">Hủy bỏ</button>
          <button onClick={handleUpdate} className="px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-[20px] text-xs font-black uppercase tracking-widest shadow-2xl flex items-center gap-3 transition-all active:scale-95"><Save size={20}/> Lưu & Đồng bộ</button>
        </div>
      </div>
    </div>
  );
};


const IDVerifier: React.FC<IDVerifierProps> = ({ bankQuestions, setBankQuestions, initialQuestions = [], onClearInitial }) => {
  const [sourceType, setSourceType] = useState<'LATEX' | 'BANK'>('LATEX');
  const [latexInput, setLatexInput] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string>('10');
  const [selectedSub, setSelectedSub] = useState<SubjectCode | 'ALL'>('ALL'); // Hỗ trợ 'ALL' cho Môn
  const [selectedChap, setSelectedChap] = useState<string>('ALL'); // Hỗ trợ 'ALL' cho Chương
  const [selectedLesson, setSelectedLesson] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<LevelCode | 'ALL'>('ALL');

  const [results, setResults] = useState<{ correct: VerificationResult[]; wrong: VerificationResult[]; fixed: VerificationResult[]; }>({ correct: [], wrong: [], fixed: [] });
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isSelectedTHCS = isGradeTHCS(selectedGrade);
  const availableFilterSubjects = useMemo(() => getAvailableSubjects(selectedGrade), [selectedGrade]);

  const chapters = useMemo(() => {
    if (selectedGrade === 'ALL') return [];
    if (isSelectedTHCS) {
      return getCurriculumChapters(selectedGrade);
    }
    if (selectedSub === 'ALL') return [];
    return getCurriculumChapters(selectedGrade, selectedSub);
  }, [selectedGrade, selectedSub, isSelectedTHCS]);

  const lessons = useMemo(() => {
    if (selectedChap === 'ALL') return [];
    return chapters.find(c => c.code === selectedChap)?.lessons || [];
  }, [chapters, selectedChap]);

  // Logic reset bộ lọc con khi bộ lọc cha thay đổi
  useEffect(() => {
    if (isSelectedTHCS) {
      setSelectedSub('ALL');
    } else {
      if (selectedSub === 'ALL') {
        setSelectedChap('ALL');
        setSelectedLesson('ALL');
      } else {
        if (selectedChap !== 'ALL') {
          const isCurrentChapValid = chapters.some(c => c.code === selectedChap);
          if (!isCurrentChapValid) {
            setSelectedChap('ALL');
            setSelectedLesson('ALL');
          }
        }
      }
    }
  }, [selectedSub, selectedGrade, isSelectedTHCS, chapters]);

  useEffect(() => {
    if (selectedChap === 'ALL') {
      setSelectedLesson('ALL');
    }
  }, [selectedChap]);

  useEffect(() => {
    if (initialQuestions.length > 0) {
      setSourceType('LATEX');
      setLatexInput(initialQuestions.map(q => q.fullCode).join('\n\n'));
      if (onClearInitial) onClearInitial();
    }
  }, [initialQuestions]);


  const handleVerify = () => {
    let source = sourceType === 'LATEX' ? parseLatex(latexInput) : bankQuestions;
    if (source.length === 0) return;

    const filterGradeCode = GRADE_TO_CODE[selectedGrade];
    
    source = source.filter(q => {
      if (sourceType === 'LATEX') return true;
      
      const matchGrade = selectedGrade === 'ALL' || q.meta.grade === filterGradeCode;
      const matchSub = selectedSub === 'ALL' || q.meta.subject === selectedSub;
      const matchChap = selectedChap === 'ALL' || q.meta.chapter === selectedChap;
      const matchLesson = selectedLesson === 'ALL' || q.meta.lesson === selectedLesson;
      const matchLevel = selectedLevel === 'ALL' || q.level === selectedLevel;
      
      return matchGrade && matchSub && matchChap && matchLesson && matchLevel;
    });

    if (source.length === 0 && sourceType === 'BANK') {
      alert(`Không tìm thấy dữ liệu nào phù hợp với bộ lọc hiện tại.`);
      setResults({ correct: [], wrong: [], fixed: [] });
      return;
    }

    const correct: VerificationResult[] = [];
    const wrong: VerificationResult[] = [];
    
    // Ngữ cảnh gợi ý sửa lỗi (nếu filter là ALL thì dùng giá trị mặc định hoặc giữ nguyên mã cũ)
    const context = { 
      grade: selectedGrade, 
      subject: selectedSub === 'ALL' ? 'D' : selectedSub, 
      chapter: selectedChap === 'ALL' ? '1' : selectedChap, 
      lesson: selectedLesson === 'ALL' ? '1' : selectedLesson, 
      level: selectedLevel === 'ALL' ? 'N' : selectedLevel 
    };
    
    source.forEach(q => {
      const validation = validateQuestionWithFilters(q, { 
        grade: selectedGrade, 
        subject: selectedSub, 
        chapter: selectedChap, 
        lesson: selectedLesson, 
        level: selectedLevel 
      });

      if (validation.isMismatch) {
        wrong.push({ 
          question: q, 
          isCorrect: false, 
          errors: validation.reasons, 
          suggestedId: suggestCorrectId(q.idString, context) 
        });
      } else {
        correct.push({ question: q, isCorrect: true, errors: [] });
      }
    });
    setResults({ correct, wrong, fixed: [] });
  };

  const copyColumn = (list: VerificationResult[]) => {
    const text = list.map(r => r.question.fullCode).join('\n\n');
    navigator.clipboard.writeText(text);
    alert('Đã copy toàn bộ mã nguồn trong cột!');
  };

  const copySingle = (question: Question) => {
    navigator.clipboard.writeText(question.fullCode);
    alert('Đã copy câu hỏi!');
  };

  const applyFix = (res: VerificationResult) => {
    if (!res.suggestedId) return;
    const newId = res.suggestedId;
    let newFullCode = res.question.fullCode.replace(/%\[.*?\]/, newId);
    const newMeta = parseId(newId);
    const updatedQ: Question = { ...res.question, fullCode: newFullCode, idString: newId, isValidId: true, meta: { ...newMeta, qType: res.question.type }, level: newMeta.level || 'N' };
    setResults(prev => ({ ...prev, fixed: [...prev.fixed, { question: updatedQ, isCorrect: true, errors: [] }], wrong: prev.wrong.filter(r => r.question.uid !== updatedQ.uid) }));
    setBankQuestions(prev => prev.map(q => q.uid === updatedQ.uid ? updatedQ : q));
    if (sourceType === 'LATEX') setLatexInput(prev => prev.replace(res.question.idString, newId));
  };

  const handleAutoFixAll = () => {
    const wrongList = results.wrong.filter(res => !!res.suggestedId);
    if (wrongList.length === 0) return;
    const confirmed = window.confirm(`Hệ thống sẽ tự động sửa nhanh ${wrongList.length} câu hỏi theo mã bộ lọc đang chọn. Tiếp tục?`);
    if (!confirmed) return;
    const fixedResults: VerificationResult[] = [];
    const updatedMap = new Map<string, Question>();
    let currentLatex = latexInput;
    wrongList.forEach(res => {
      const newId = res.suggestedId!;
      const newFullCode = res.question.fullCode.replace(/%\[.*?\]/, newId);
      const newMeta = parseId(newId);
      const updatedQ: Question = { ...res.question, fullCode: newFullCode, idString: newId, isValidId: true, meta: { ...newMeta, qType: res.question.type }, level: newMeta.level || 'N' };
      fixedResults.push({ question: updatedQ, isCorrect: true, errors: [] });
      updatedMap.set(updatedQ.uid, updatedQ);
      if (sourceType === 'LATEX') currentLatex = currentLatex.replace(res.question.idString, newId);
    });
    setResults(prev => ({ ...prev, fixed: [...prev.fixed, ...fixedResults], wrong: prev.wrong.filter(r => !updatedMap.has(r.question.uid)) }));
    setBankQuestions(prev => prev.map(q => updatedMap.has(q.uid) ? updatedMap.get(q.uid)! : q));
    if (sourceType === 'LATEX') setLatexInput(currentLatex);
    alert(`✅ Đã sửa nhanh thành công ${fixedResults.length} câu hỏi!`);
  };

  const handleSaveIdFromModal = (newId: string) => {
    if (!editingQuestion) return;
    const newFullCode = editingQuestion.fullCode.replace(/%\[.*?\]/, newId);
    const newMeta = parseId(newId);
    const updatedQ: Question = { ...editingQuestion, fullCode: newFullCode, idString: newId, isValidId: true, meta: { ...newMeta, qType: editingQuestion.type }, level: newMeta.level || 'N' };
    setResults(prev => ({ ...prev, fixed: [...prev.fixed, { question: updatedQ, isCorrect: true, errors: [] }], wrong: prev.wrong.filter(r => r.question.uid !== updatedQ.uid) }));
    setBankQuestions(prev => prev.map(q => q.uid === updatedQ.uid ? updatedQ : q));
    if (sourceType === 'LATEX') setLatexInput(prev => prev.replace(editingQuestion.idString, newId));
    setEditingQuestion(null);
  };

  return (
    <div className="flex flex-col h-full w-full gap-6 animate-in fade-in duration-500">
      {editingQuestion && <IDEditModal question={editingQuestion} onClose={() => setEditingQuestion(null)} onSave={handleSaveIdFromModal} targetContext={{ grade: selectedGrade, subject: selectedSub === 'ALL' ? 'D' : selectedSub, chapter: selectedChap === 'ALL' ? '1' : selectedChap, lesson: selectedLesson === 'ALL' ? '1' : selectedLesson, level: selectedLevel === 'ALL' ? 'N' : selectedLevel }} />}
      <header className="flex items-center justify-between bg-slate-800/40 p-5 rounded-3xl border border-slate-700 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-4"><div className="p-3 bg-blue-500/20 rounded-2xl"><Hash className="text-blue-400" size={24} /></div>
          <div><h2 className="text-xl font-black text-white tracking-tight uppercase">XÁC MINH & CHUẨN HÓA ID</h2><p className="text-slate-400 text-xs font-medium uppercase tracking-widest opacity-70 italic">Phạm vi linh hoạt: Có thể chọn tất cả Môn hoặc Chương để đối soát diện rộng</p></div>
        </div>
        <div className="flex gap-3 bg-slate-900/50 p-1 rounded-2xl border border-slate-700">
          <button onClick={() => setSourceType('LATEX')} className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${sourceType === 'LATEX' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}><FileText size={16} /> Tệp tin</button>
          <button onClick={() => setSourceType('BANK')} className={`flex items-center gap-2 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${sourceType === 'BANK' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}><Database size={16} /> Ngân hàng</button>
        </div>
      </header>
      <div className="grid grid-cols-12 gap-6 min-h-0 flex-1 pb-6">
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="bg-slate-800/60 p-5 rounded-3xl border border-slate-700 shadow-lg space-y-4">
            <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-widest border-b border-slate-700 pb-3 flex items-center gap-2"><ListFilter size={14}/> THIẾT LẬP PHẠM VI</h3>
            <div className="space-y-3">
              <div className="space-y-1"><label className="text-[9px] font-bold text-slate-500 uppercase ml-1">Lớp</label>
                <select value={selectedGrade} onChange={e => setSelectedGrade(e.target.value)} className="w-full h-10 bg-slate-900 border border-slate-700 rounded-xl px-3 text-xs font-semibold text-white outline-none">{Object.entries(GRADE_MAP).map(([k, v]) => <option key={k} value={k === '0' ? '10' : k === '1' ? '11' : k === '2' ? '12' : k}>{v}</option>)}</select>
              </div>
              <div className="space-y-1"><label className="text-[9px] font-bold text-slate-500 uppercase ml-1">Môn / Phân môn</label>
                {isSelectedTHCS ? (
                  <div className="w-full h-10 bg-slate-900/60 border border-slate-700/60 rounded-xl px-3 flex items-center text-xs font-semibold text-slate-400">
                    Toán THCS (Không phân môn)
                  </div>
                ) : (
                  <select value={selectedSub} onChange={e => setSelectedSub(e.target.value as any)} className="w-full h-10 bg-slate-900 border border-slate-700 rounded-xl px-3 text-xs font-semibold text-white outline-none">
                    <option value="ALL">Tất cả Phân môn</option>
                    {availableFilterSubjects.map(s => <option key={s.code} value={s.code}>{s.title}</option>)}
                  </select>
                )}
              </div>
              <div className="space-y-1"><label className="text-[9px] font-bold text-slate-500 uppercase ml-1">Chương</label>
                <select 
                  disabled={!isSelectedTHCS && selectedSub === 'ALL'}
                  value={selectedChap} 
                  onChange={e => setSelectedChap(e.target.value)} 
                  className={`w-full h-10 bg-slate-900 border border-slate-700 rounded-xl px-3 text-xs font-semibold text-white outline-none truncate ${!isSelectedTHCS && selectedSub === 'ALL' ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                  <option value="ALL">Tất cả Chương</option>
                  {chapters.map(c => <option key={c.code} value={c.code}>{c.title}</option>)}
                </select>
              </div>
              <div className="space-y-1"><label className="text-[9px] font-bold text-slate-500 uppercase ml-1">Bài học (Dùng để sửa lỗi)</label>
                <select 
                  disabled={selectedChap === 'ALL' || (!isSelectedTHCS && selectedSub === 'ALL')}
                  value={selectedLesson} 
                  onChange={e => setSelectedLesson(e.target.value)} 
                  className={`w-full h-10 bg-slate-900 border border-slate-700 rounded-xl px-3 text-xs font-semibold text-white outline-none truncate ${selectedChap === 'ALL' || (!isSelectedTHCS && selectedSub === 'ALL') ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                  <option value="ALL">Tất cả Bài học</option>
                  {lessons.map(l => <option key={l.code} value={l.code}>{l.title}</option>)}
                </select>
              </div>
              <div className="space-y-1"><label className="text-[9px] font-bold text-slate-500 uppercase ml-1">Mức độ</label>
                <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value as any)} className="w-full h-10 bg-slate-900 border border-slate-700 rounded-xl px-3 text-xs font-semibold text-white outline-none">
                  <option value="ALL">Tất cả Mức độ</option>
                  {Object.entries(LEVEL_MAP).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
            </div>
            <button onClick={handleVerify} className="w-full h-12 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-white shadow-xl flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-widest mt-4"><RefreshCw size={18} /> BẮT ĐẦU ĐỐI SOÁT</button>
          </div>
          {sourceType === 'LATEX' && (
            <div className="flex-1 bg-slate-900/60 rounded-3xl border border-slate-700/50 flex flex-col overflow-hidden">
               <div className="p-3 bg-slate-800/40 border-b border-slate-700 text-[10px] font-black text-slate-500 uppercase flex justify-between items-center"><span>Dữ liệu nguồn</span><button onClick={() => fileInputRef.current?.click()} className="p-1.5 hover:bg-slate-700 rounded-lg text-blue-400"><Upload size={14}/></button></div>
               <textarea value={latexInput} onChange={e => setLatexInput(e.target.value)} className="flex-1 w-full bg-transparent p-4 text-[12px] font-mono text-blue-200 outline-none resize-none custom-scrollbar" placeholder="Dán mã LaTeX..." />
               <input type="file" ref={fileInputRef} className="hidden" accept="*" multiple onChange={e => { const files = e.target.files; if (files && files.length > 0) { Array.from(files).forEach((file: File) => { const r = new FileReader(); r.onload = ev => setLatexInput(prev => prev + (prev ? '\n\n' : '') + (ev.target?.result as string)); r.readAsText(file); }); } }} />
            </div>
          )}
        </div>
        <div className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CỘT HỢP LỆ */}
          <div className="bg-slate-900/40 rounded-[32px] border border-slate-800 flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 bg-emerald-500/5 border-b border-emerald-500/10 flex items-center justify-between">
              <h3 className="font-black text-emerald-500 text-[11px] uppercase tracking-widest flex items-center gap-2"><CheckCircle size={14}/> HỢP LỆ ({results.correct.length})</h3>
              <button onClick={() => copyColumn(results.correct)} className="p-2 hover:bg-emerald-500/20 text-emerald-500 rounded-lg transition-colors"><Copy size={16}/></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {results.correct.map(res => (
                <div key={res.question.uid} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-3 relative group transition-all hover:border-emerald-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono font-black text-emerald-400 px-2 py-0.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20">{res.question.idString}</span>
                    <button onClick={() => copySingle(res.question)} className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-emerald-600/20 text-emerald-400 rounded-lg transition-all"><Copy size={12}/></button>
                  </div>
                  <p className="text-slate-400 text-[11px] line-clamp-2 italic">"{res.question.content}"</p>
                </div>
              ))}
              {results.correct.length === 0 && <div className="text-center py-10 text-slate-600 italic text-xs">Chưa có dữ liệu...</div>}
            </div>
          </div>
          {/* CỘT SAI LỆCH */}
          <div className="bg-slate-900/40 rounded-[32px] border border-slate-800 flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 bg-rose-500/5 border-b border-rose-500/10 flex items-center justify-between sticky top-0 z-20">
              <h3 className="font-black text-rose-500 text-[11px] uppercase tracking-widest flex items-center gap-2"><XCircle size={14}/> SAI LỆCH ({results.wrong.length})</h3>
              <div className="flex gap-2">
                <button onClick={handleAutoFixAll} disabled={results.wrong.length === 0} className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl transition-all flex items-center gap-1 shadow-lg disabled:opacity-30 group"><Wand2 size={12}/><span className="text-[9px] font-bold">SỬA HẾT</span></button>
                <button onClick={() => copyColumn(results.wrong)} className="p-2 hover:bg-rose-500/20 text-rose-500 rounded-lg transition-colors"><Copy size={16}/></button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {results.wrong.map(res => (
                <div key={res.question.uid} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-3 hover:border-blue-500/20 transition-all group shadow-sm">
                   <div className="flex items-center justify-between mb-2">
                     <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[9px] font-mono font-black text-rose-400/60 px-2 py-0.5 bg-rose-500/10 rounded-lg border border-rose-500/10 line-through truncate max-w-[100px]">{res.question.idString}</span>
                        {res.suggestedId && <><ArrowRight size={10} className="text-slate-600"/><div className="flex items-center gap-1 group/item"><span className="text-[10px] font-mono font-black text-emerald-400 px-2 py-0.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20 flex items-center gap-1 animate-pulse">{res.suggestedId}</span><button onClick={() => applyFix(res)} className="p-1 bg-emerald-600 text-white rounded-md hover:bg-emerald-500 transition-colors"><Check size={10}/></button></div></>}
                     </div>
                     <div className="flex gap-1">
                        <button onClick={() => copySingle(res.question)} className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-rose-600/20 text-rose-400 rounded-lg transition-all"><Copy size={12}/></button>
                        <button onClick={() => setEditingQuestion(res.question)} className="p-1 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600 transition-all"><Zap size={10}/></button>
                     </div>
                   </div>
                   <div className="space-y-1 mb-2">{res.errors.map((e, i) => <span key={i} className="text-[8px] bg-rose-500/10 text-rose-300 font-black px-1.5 py-0.5 rounded border border-rose-500/10 block w-fit uppercase">{e}</span>)}</div>
                   <p className="text-slate-500 text-[10px] italic line-clamp-1">"{res.question.content}"</p>
                </div>
              ))}
              {results.wrong.length === 0 && <div className="text-center py-10 text-slate-600 italic text-xs">Phạm vi nạp hợp lệ...</div>}
            </div>
          </div>
          {/* CỘT ĐÃ CHỈNH SỬA */}
          <div className="bg-slate-900/40 rounded-[32px] border border-slate-800 flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 bg-blue-500/5 border-b border-blue-500/10 flex items-center justify-between">
              <h3 className="font-black text-blue-500 text-[11px] uppercase tracking-widest flex items-center gap-2"><ClipboardCheck size={14}/> ĐÃ CHỈNH SỬA ({results.fixed.length})</h3>
              <button onClick={() => copyColumn(results.fixed)} className="p-2 hover:bg-blue-500/20 text-blue-500 rounded-lg transition-colors"><Copy size={16}/></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {results.fixed.map(res => (
                <div key={res.question.uid} className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-3 group relative shadow-inner transition-all hover:bg-blue-500/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono font-black text-blue-400 px-2 py-0.5 bg-blue-500/10 rounded-lg border border-blue-500/20">{res.question.idString}</span>
                    <button onClick={() => copySingle(res.question)} className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-blue-600/20 text-blue-400 rounded-lg transition-all"><Copy size={12}/></button>
                  </div>
                  <p className="text-slate-400 text-[11px] line-clamp-2 italic">"{res.question.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDVerifier;
