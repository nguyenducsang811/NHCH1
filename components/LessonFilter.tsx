import React, { useState, useMemo, useRef, useEffect } from 'react';
import { parseLatex, validateQuestionWithFilters, getCurriculumChapters, getAvailableSubjects, isGradeTHCS } from '../utils';
import { Question, SubjectCode, LevelCode } from '../types';
import { 
  FileCode, Copy, Download, Trash2, Scissors, 
  BookOpen, Layers, ChevronDown, ChevronUp, RotateCcw,
  Database, FileText, CheckCircle2, AlertTriangle, ExternalLink, Upload,
  Columns, Rows, Check, Filter, SlidersHorizontal, FolderGit2, Tag
} from 'lucide-react';
import { GRADE_MAP, SUBJECT_MAP, LEVEL_MAP, CURRICULUM_DATA, CODE_TO_GRADE, GRADE_TO_CODE, CURRICULUM_BRANCH_TITLES } from '../constants';

interface LessonFilterProps {
  bankQuestions: Question[];
  onTransferToVerifier: (qs: Question[]) => void;
}

interface FormGroup {
  formCode: string;
  formTitle: string;
  formShortCode: string;
  questions: Question[];
  levelCounts: Record<string, number>;
}

interface GroupedLesson {
  groupKey: string;
  fileNoteCode: string;      // e.g. "0D1-B1", "0D10-B1", "0H4-B1", "6-C1-B1"
  idPrefixNote: string;      // e.g. "0D1?1-*", "6-C1-1-*"
  gradeRawCode: string;      // "0", "1", "2", "6", "7", "8", "9"
  gradeCode: string;         // "10", "11", "12", "6", "7", "8", "9"
  gradeName: string;         // "Lớp 10"
  subjectCode: string;       // "D", "H", "C" or ""
  subjectName: string;       // "Đại số & Một số yếu tố Giải tích"
  chapterCode: string;       // "1", "C1", "0"
  chapterTitle: string;      // "Chương 1. Mệnh đề. Tập hợp"
  lessonCode: string;        // "1"
  lessonTitle: string;       // "Bài 1. Mệnh đề"
  questions: Question[];
  formsMap: Record<string, FormGroup>;
}

const LessonFilter: React.FC<LessonFilterProps> = ({ bankQuestions, onTransferToVerifier }) => {
  const [input, setInput] = useState('');
  const [sourceType, setSourceType] = useState<'bank' | 'latex'>('latex');
  const [viewMode, setViewMode] = useState<'vertical' | 'horizontal'>('vertical');
  const [groupByFormInLesson, setGroupByFormInLesson] = useState<boolean>(true);
  
  const [fGrade, setFGrade] = useState<string>('ALL');
  const [fSub, setFSub] = useState<SubjectCode | 'ALL'>('ALL');
  const [fChap, setFChap] = useState<string>('ALL');
  const [fLes, setFLes] = useState<string>('ALL');
  const [fForm, setFForm] = useState<string>('ALL');
  const [fLevel, setFLevel] = useState<LevelCode | 'ALL'>('ALL');
  const [fType, setFType] = useState<string>('ALL');

  const [isDragging, setIsDragging] = useState(false);
  const [showSourceEditor, setShowSourceEditor] = useState(false);
  const [isFilterPanelCollapsed, setIsFilterPanelCollapsed] = useState(false);

  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedUid, setCopiedUid] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isTHCS = isGradeTHCS(fGrade);
  const availableFilterSubjects = useMemo(() => getAvailableSubjects(fGrade), [fGrade]);

  const chapters = useMemo(() => {
    if (fGrade === 'ALL') return [];
    if (isTHCS) return getCurriculumChapters(fGrade);
    if (fSub === 'ALL') return [];
    return getCurriculumChapters(fGrade, fSub);
  }, [fGrade, fSub, isTHCS]);

  const lessons = useMemo(() => fChap !== 'ALL' ? (chapters.find(c => c.code === fChap)?.lessons || []) : [], [fChap, chapters]);

  // Reset downstream filters on parent changes
  useEffect(() => {
    if (isTHCS) {
      setFSub('ALL');
    }
    setFChap('ALL');
    setFLes('ALL');
    setFForm('ALL');
  }, [fGrade, fSub, isTHCS]);

  useEffect(() => {
    setFLes('ALL');
    setFForm('ALL');
  }, [fChap]);

  useEffect(() => {
    setFForm('ALL');
  }, [fLes]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setInput(event.target?.result as string || '');
      showToast('Đã nạp file LaTeX thành công!');
    };
    reader.readAsText(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setInput(event.target?.result as string || '');
      showToast('Đã nạp file LaTeX thành công!');
    };
    reader.readAsText(file);
  };

  const handleClear = () => {
    setInput('');
    setShowSourceEditor(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const rawQuestions = useMemo(() => sourceType === 'bank' ? bankQuestions : (input.trim() ? parseLatex(input) : []), [sourceType, bankQuestions, input]);

  const filteredGroupedData = useMemo<Record<string, GroupedLesson> | null>(() => {
    if (rawQuestions.length === 0) return null;
    const filtered = rawQuestions.filter(q => {
      const qGradeDisplay = CODE_TO_GRADE[q.meta.grade] || q.meta.grade;
      const isQuestionTHCS = isGradeTHCS(q.meta.grade);
      if (fGrade !== 'ALL' && qGradeDisplay !== fGrade) return false;
      if (fSub !== 'ALL' && !isQuestionTHCS && q.meta.subject !== fSub) return false;
      if (fChap !== 'ALL' && q.meta.chapter !== fChap) return false;
      if (fLes !== 'ALL' && q.meta.lesson !== fLes) return false;
      if (fForm !== 'ALL' && q.meta.form !== fForm) return false;
      if (fLevel !== 'ALL' && q.level !== fLevel) return false;
      if (fType !== 'ALL' && q.type !== fType) return false;
      return true;
    });

    if (filtered.length === 0) return null;

    const groups: Record<string, GroupedLesson> = {};

    filtered.forEach(q => {
      const rawGradeCode = q.meta.grade || '';
      const qGradeDisplay = CODE_TO_GRADE[rawGradeCode] || rawGradeCode;
      const qSub = q.meta.subject || '';
      const qChap = q.meta.chapter || '';
      const qLes = q.meta.lesson || '';
      const qForm = q.meta.form || '';
      const isQTHCS = isGradeTHCS(rawGradeCode);

      // Lookup curriculum objects using rawGradeCode ("0", "1", "2", "6", "7", "8", "9")
      let chapterObj: any = undefined;
      let lessonObj: any = undefined;
      let formObj: any = undefined;

      if (rawGradeCode && CURRICULUM_DATA[rawGradeCode]) {
        if (isQTHCS) {
          chapterObj = CURRICULUM_DATA[rawGradeCode]?.chapters?.find(c => c.code === qChap);
        } else if (qSub) {
          chapterObj = (CURRICULUM_DATA[rawGradeCode] as any)?.[qSub as SubjectCode]?.find((c: any) => c.code === qChap);
        }
        lessonObj = chapterObj?.lessons?.find((l: any) => l.code === qLes);
        formObj = lessonObj?.types?.find((t: any) => t.code === qForm);
      }

      const chapterTitle = chapterObj?.title || q.meta.chapterTitle || (qChap ? `Chương ${qChap}` : 'Chưa rõ chương');
      const lessonTitle = lessonObj?.title || q.meta.lessonTitle || (qLes ? `Bài ${qLes}` : 'Chưa phân loại bài');
      const formTitle = formObj?.title || q.meta.formTitle || (qForm ? `Dạng ${qForm}` : 'Chưa rõ dạng');

      const gradeName = GRADE_MAP[rawGradeCode as keyof typeof GRADE_MAP] || (qGradeDisplay ? `Lớp ${qGradeDisplay}` : 'Chưa rõ lớp');
      const subjectName = isQTHCS 
        ? 'Toán THCS' 
        : (CURRICULUM_BRANCH_TITLES[rawGradeCode]?.[qSub] || SUBJECT_MAP[qSub as SubjectCode] || qSub || '');

      // Build File Note Code matching user's NHCH folder structure (e.g. 0D1-B1, 0D10-B1, 0H4-B1, 0C1-B1, 6-C1-B1)
      let fileNoteCode = 'CHƯA RÕ MÃ';
      let idPrefixNote = '';
      if (rawGradeCode && qChap && qLes) {
        if (isQTHCS) {
          fileNoteCode = `${rawGradeCode}-${qChap}-B${qLes}`;
          idPrefixNote = `${rawGradeCode}-${qChap}-${qLes}-*`;
        } else {
          // In Grade 10 Branch D, chapter code "0" is Chương 10 -> File name in user's folder is 0D10-B1
          const displayChapForFile = (rawGradeCode === '0' && qSub === 'D' && qChap === '0') ? '10' : qChap;
          fileNoteCode = `${rawGradeCode}${qSub}${displayChapForFile}-B${qLes}`;
          idPrefixNote = `${rawGradeCode}${qSub}${qChap}?${qLes}-*`;
        }
      }

      // Group strictly by Grade + Subject + Chapter + Lesson (never merge Bài 1 of different chapters!)
      const groupKey = (rawGradeCode && qChap && qLes)
        ? `${rawGradeCode}_${qSub || 'THCS'}_${qChap}_${qLes}`
        : `UNCLASSIFIED_${q.idString || 'NO_ID'}`;

      if (!groups[groupKey]) {
        groups[groupKey] = {
          groupKey,
          fileNoteCode,
          idPrefixNote,
          gradeRawCode: rawGradeCode,
          gradeCode: qGradeDisplay,
          gradeName,
          subjectCode: qSub,
          subjectName,
          chapterCode: qChap,
          chapterTitle,
          lessonCode: qLes,
          lessonTitle,
          questions: [],
          formsMap: {}
        };
      }

      groups[groupKey].questions.push(q);

      // Group by Dạng bài inside each Lesson
      const fKey = qForm || 'OTHER';
      const formShortCode = isQTHCS
        ? `${rawGradeCode}-${qChap}-${qLes}-${fKey}`
        : `${rawGradeCode}${qSub}${qChap}•${qLes}-${fKey}`;

      if (!groups[groupKey].formsMap[fKey]) {
        groups[groupKey].formsMap[fKey] = {
          formCode: fKey,
          formTitle: formObj ? `Dạng ${fKey}: ${formObj.title}` : (q.meta.formTitle ? `Dạng ${fKey}: ${q.meta.formTitle}` : `Dạng ${fKey}`),
          formShortCode,
          questions: [],
          levelCounts: { N: 0, H: 0, V: 0, C: 0 }
        };
      }
      groups[groupKey].formsMap[fKey].questions.push(q);
      if (q.level && groups[groupKey].formsMap[fKey].levelCounts[q.level] !== undefined) {
        groups[groupKey].formsMap[fKey].levelCounts[q.level]++;
      }
    });

    // Sort groups logically by Grade -> Subject (D, H, C) -> Chapter -> Lesson
    const subjectOrder: Record<string, number> = { D: 1, H: 2, C: 3, THCS: 0, '': 4 };
    const sortedEntries = Object.entries(groups).sort(([, a], [, b]) => {
      const gA = parseInt(a.gradeCode) || 99;
      const gB = parseInt(b.gradeCode) || 99;
      if (gA !== gB) return gA - gB;

      const sA = subjectOrder[a.subjectCode || 'THCS'] ?? 9;
      const sB = subjectOrder[b.subjectCode || 'THCS'] ?? 9;
      if (sA !== sB) return sA - sB;

      const cA = a.chapterCode === '0' ? 10 : (parseInt(a.chapterCode.replace(/\D/g, '')) || 99);
      const cB = b.chapterCode === '0' ? 10 : (parseInt(b.chapterCode.replace(/\D/g, '')) || 99);
      if (cA !== cB) return cA - cB;

      const lA = parseInt(a.lessonCode) || 99;
      const lB = parseInt(b.lessonCode) || 99;
      return lA - lB;
    });

    const sortedGroups: Record<string, GroupedLesson> = {};
    sortedEntries.forEach(([k, v]) => {
      sortedGroups[k] = v;
    });

    return sortedGroups;
  }, [rawQuestions, fGrade, fSub, fChap, fLes, fForm, fLevel, fType]);

  const allFilteredQuestions = useMemo(() => {
    if (!filteredGroupedData) return [];
    return (Object.values(filteredGroupedData) as GroupedLesson[]).flatMap(g => g.questions);
  }, [filteredGroupedData]);

  const mismatchedQuestions = useMemo(() => {
    return allFilteredQuestions.filter(q => {
      const v = validateQuestionWithFilters(q, { grade: fGrade, subject: fSub, chapter: fChap, lesson: fLes, level: fLevel });
      return v.isMismatch;
    });
  }, [allFilteredQuestions, fGrade, fSub, fChap, fLes, fLevel]);

  const toggleExpandLesson = (groupKey: string) => {
    setExpandedLessons(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }));
  };

  const expandAllLessons = () => {
    if (!filteredGroupedData) return;
    const next: Record<string, boolean> = {};
    Object.keys(filteredGroupedData).forEach(k => { next[k] = true; });
    setExpandedLessons(next);
    showToast('Đã mở rộng tất cả các bài!');
  };

  const collapseAllLessons = () => {
    setExpandedLessons({});
    showToast('Đã thu gọn tất cả các bài!');
  };

  const copyTextToClipboard = (text: string, successMessage: string) => {
    navigator.clipboard.writeText(text);
    showToast(successMessage);
  };

  const copySingleQuestion = (q: Question) => {
    navigator.clipboard.writeText(q.fullCode);
    setCopiedUid(q.uid);
    setTimeout(() => setCopiedUid(null), 1500);
    showToast(`Đã copy mã LaTeX câu hỏi: ${q.idString}`);
  };

  const buildLessonLaTeXContent = (group: GroupedLesson) => {
    return group.questions.map(q => q.fullCode).join('\n\n');
  };

  const copyLessonLaTeX = (group: GroupedLesson) => {
    const text = buildLessonLaTeXContent(group);
    copyTextToClipboard(
      text,
      `Đã copy ${group.questions.length} câu LaTeX của [${group.fileNoteCode}]!`
    );
  };

  const downloadLessonTexFile = (group: GroupedLesson) => {
    const text = buildLessonLaTeXContent(group);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${group.fileNoteCode}.tex`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Đã tải xuống tệp ${group.fileNoteCode}.tex!`);
  };

  const copyFormLaTeX = (group: GroupedLesson, fg: FormGroup) => {
    const text = fg.questions.map(q => q.fullCode).join('\n\n');
    copyTextToClipboard(text, `Đã copy ${fg.questions.length} câu của "${fg.formTitle}" (${group.fileNoteCode})!`);
  };

  const copyLessonIDs = (group: GroupedLesson) => {
    const text = group.questions.map(q => q.idString).join('\n');
    copyTextToClipboard(text, `Đã copy ${group.questions.length} mã ID của [${group.fileNoteCode}] ${group.lessonTitle}!`);
  };

  const copyAllFilteredLaTeX = () => {
    if (allFilteredQuestions.length === 0) return;
    const text = allFilteredQuestions.map(q => q.fullCode).join('\n\n');
    copyTextToClipboard(text, `Đã copy tất cả ${allFilteredQuestions.length} câu hỏi!`);
  };

  return (
    <div className="flex flex-col h-full gap-3 animate-in fade-in duration-500 relative overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-600 text-white font-bold text-xs px-5 py-3 rounded-2xl shadow-2xl border border-emerald-400 flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-300">
          <CheckCircle2 size={18} className="text-emerald-200 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* COMPACT TOP HEADER */}
      <header className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/40 px-4 py-3 rounded-2xl border border-slate-700/80 shadow-md backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-500/20 rounded-xl text-amber-400"><Scissors size={20} /></div>
          <div>
            <h2 className="text-base font-black text-white tracking-tight uppercase">Lọc bài học & Phân tách Kho NHCH</h2>
            <p className="text-slate-400 text-[10px] font-medium opacity-80 uppercase tracking-widest">
              Tự động nhận diện Mã tệp (VD: 0D1-B1, 0H4-B1, 6-C1-B1) • Lớp • Phân môn • Chương • Bài • Dạng bài
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-900/80 p-1 rounded-xl border border-slate-700">
            <button onClick={() => setSourceType('latex')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${sourceType === 'latex' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}><FileText size={13} /> FILE LATEX</button>
            <button onClick={() => setSourceType('bank')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all ${sourceType === 'bank' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}><Database size={13} /> NGÂN HÀNG</button>
          </div>
          <button 
            onClick={() => setIsFilterPanelCollapsed(!isFilterPanelCollapsed)}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700/80 transition-all text-xs font-bold flex items-center gap-1.5 px-3"
            title={isFilterPanelCollapsed ? "Mở rộng bộ lọc" : "Thu gọn bộ lọc để tăng diện tích xem kết quả"}
          >
            <SlidersHorizontal size={14} />
            <span>{isFilterPanelCollapsed ? 'Mở bộ lọc' : 'Ẩn bộ lọc'}</span>
            {isFilterPanelCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>
        </div>
      </header>

      {/* INPUT / SOURCE PANEL */}
      {!isFilterPanelCollapsed && sourceType === 'latex' && (
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 shadow-xl shrink-0 transition-all">
          {!input.trim() ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
              <div 
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                className={`border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all ${
                  isDragging ? 'border-blue-500 bg-blue-500/5' : 'border-slate-800 hover:border-slate-700/80 bg-slate-950/20'
                }`}
              >
                <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center mb-2 shadow-inner">
                  <Upload size={20} className="text-blue-400" />
                </div>
                <h4 className="text-xs font-black text-white mb-0.5">Chọn hoặc Kéo thả file LaTeX</h4>
                <p className="text-slate-500 text-[10px] mb-3 max-w-xs leading-relaxed">Chọn file .tex để phân tách từng Chương - Bài - Dạng bài nhanh nhất</p>
                <input type="file" accept="*" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
                <button 
                  onClick={() => fileInputRef.current?.click()} 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-all text-[11px] uppercase tracking-wider active:scale-95 shadow-md"
                >
                  Chọn file từ máy
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-wider">Hoặc dán mã LaTeX trực tiếp</h4>
                </div>
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 min-h-[100px] bg-slate-950/40 border border-slate-800 rounded-xl p-3 font-mono text-xs text-blue-200 outline-none focus:border-blue-500/30 transition-all resize-none custom-scrollbar shadow-inner"
                  placeholder="Dán mã LaTeX tại đây (\begin{ex}%[0D1N1-1] ... \end{ex})"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 animate-in zoom-in-95 duration-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 bg-slate-950/30 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">Đã nạp file LaTeX bên ngoài</h4>
                    <p className="text-slate-400 text-[10px] font-medium">
                      Đã quét <span className="text-emerald-400 font-bold">{rawQuestions.length} câu hỏi</span> • Phân tách thành <span className="text-cyan-400 font-bold">{filteredGroupedData ? Object.keys(filteredGroupedData).length : 0} tệp bài học</span>.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setShowSourceEditor(!showSourceEditor)} 
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition-all border border-slate-700/50"
                  >
                    {showSourceEditor ? 'Ẩn mã nguồn' : 'Xem/Sửa mã nguồn'}
                  </button>
                  <button 
                    onClick={handleClear} 
                    className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white rounded-lg text-xs font-bold transition-all border border-rose-500/20"
                  >
                    Xóa dữ liệu
                  </button>
                </div>
              </div>
              
              {showSourceEditor && (
                <div className="space-y-2 animate-in slide-in-from-top-2 duration-250">
                  <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full h-40 bg-slate-950/50 border border-slate-800 rounded-xl p-3 font-mono text-xs text-blue-200 outline-none focus:border-blue-500/30 transition-all resize-none custom-scrollbar shadow-inner"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* FILTER OPTIONS BAR */}
      {!isFilterPanelCollapsed && (
        <div className="bg-slate-800/30 p-3.5 rounded-2xl border border-slate-700/40 backdrop-blur-md shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 items-end">
            {/* Lớp */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Lớp</label>
              <select value={fGrade} onChange={(e) => setFGrade(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold">
                <option value="ALL">Tất cả Lớp</option>
                {Object.entries(GRADE_MAP).map(([k, v]) => {
                  const realKey = k === '0' ? '10' : k === '1' ? '11' : k === '2' ? '12' : k;
                  return <option key={realKey} value={realKey}>{v}</option>;
                })}
              </select>
            </div>

            {/* Phân môn */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Phân môn</label>
              {isTHCS ? (
                <div className="w-full bg-slate-900/60 border border-slate-700/40 rounded-xl px-2.5 h-[34px] flex items-center text-slate-400 text-[11px] font-bold">
                  Không phân môn
                </div>
              ) : (
                <select value={fSub} onChange={(e) => setFSub(e.target.value as any)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold">
                  <option value="ALL">Tất cả Phân môn</option>
                  {availableFilterSubjects.map(s => (
                    <option key={s.code} value={s.code}>{s.title}</option>
                  ))}
                </select>
              )}
            </div>

            {/* Chương */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Chương</label>
              <select value={fChap} onChange={(e) => setFChap(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold truncate">
                <option value="ALL">Tất cả Chương</option>
                {chapters.map(c => (
                  <option key={c.code} value={c.code}>{c.title}</option>
                ))}
              </select>
            </div>

            {/* Bài học */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Bài học</label>
              <select value={fLes} onChange={(e) => setFLes(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold truncate">
                <option value="ALL">Tất cả Bài</option>
                {lessons.map(l => (
                  <option key={l.code} value={l.code}>{l.title}</option>
                ))}
              </select>
            </div>

            {/* Dạng bài */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Dạng bài</label>
              <select value={fForm} onChange={(e) => setFForm(e.target.value)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold truncate">
                <option value="ALL">Tất cả Dạng</option>
                {lessons.find(l => l.code === fLes)?.types?.map((t: any) => (
                  <option key={t.code} value={t.code}>Dạng {t.code}: {t.title}</option>
                ))}
              </select>
            </div>

            {/* Mức độ */}
            <div className="space-y-1">
              <label className="text-[9px] font-black text-slate-400 uppercase ml-1 tracking-wider">Mức độ</label>
              <select value={fLevel} onChange={(e) => setFLevel(e.target.value as any)} className="w-full bg-slate-900 border border-slate-700/40 rounded-xl px-2.5 h-[34px] outline-none text-slate-200 text-[11px] font-bold">
                <option value="ALL">Tất cả Mức</option>
                {Object.entries(LEVEL_MAP).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-2.5">
            <button 
              onClick={() => { 
                setFGrade('ALL'); 
                setFSub('ALL'); 
                setFChap('ALL'); 
                setFLes('ALL');
                setFForm('ALL');
                setFLevel('ALL'); 
                setFType('ALL'); 
              }} 
              className="h-[30px] px-3.5 bg-slate-700/80 hover:bg-slate-600 text-white rounded-lg transition-all text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 border border-slate-600 active:scale-95 shadow-md"
            >
              <RotateCcw size={12} /> Đặt lại bộ lọc
            </button>
          </div>
        </div>
      )}

      {mismatchedQuestions.length > 0 && (
        <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between shrink-0">
           <div className="flex items-center gap-2 text-amber-500 text-[11px] font-bold uppercase"><AlertTriangle size={15} /> Phát hiện {mismatchedQuestions.length} câu có ID sai lệch hoặc không khớp cây mục lục</div>
           <button onClick={() => onTransferToVerifier(mismatchedQuestions)} className="px-3 py-1 bg-amber-500 text-black text-[10px] font-black rounded-lg hover:bg-amber-400 transition-all flex items-center gap-1.5 uppercase tracking-tight"><ExternalLink size={12} /> Chuyển sang Sửa ID</button>
        </div>
      )}

      {/* RESULTS CONTROL BAR & MAIN EXPANDED RESULTS AREA */}
      <div className="flex-1 flex flex-col gap-2.5 min-h-0 bg-slate-900/30 p-3 rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden">
        {filteredGroupedData && (
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-800 backdrop-blur-md shrink-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-black flex items-center gap-1.5">
                <Layers size={14} />
                <span>{allFilteredQuestions.length} câu / {Object.keys(filteredGroupedData).length} bài học</span>
              </div>
              <button
                onClick={copyAllFilteredLaTeX}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95"
              >
                <Copy size={13} /> Copy tất cả kết quả (LaTeX)
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {viewMode === 'vertical' && (
                <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={expandAllLessons}
                    className="px-2.5 py-1 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                  >
                    Mở tất cả
                  </button>
                  <span className="text-slate-700">|</span>
                  <button
                    onClick={collapseAllLessons}
                    className="px-2.5 py-1 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                  >
                    Thu gọn tất cả
                  </button>
                </div>
              )}

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-500 uppercase px-1.5">Cách xem:</span>
                <button 
                  onClick={() => setViewMode('vertical')} 
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'vertical' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Rows size={13} />
                  <span>Xếp Dọc</span>
                </button>
                <button 
                  onClick={() => setViewMode('horizontal')} 
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'horizontal' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Columns size={13} />
                  <span>Cột Ngang</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MAIN RESULTS CONTAINER */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
          {filteredGroupedData ? (
            viewMode === 'vertical' ? (
              /* VERTICAL COMPACT SINGLE-LINE VIEW MODE */
              <div className="flex flex-col gap-2.5 w-full pb-6">
                {(Object.values(filteredGroupedData) as GroupedLesson[]).map((group) => {
                  const isExpanded = !!expandedLessons[group.groupKey];
                  const formGroups = (Object.values(group.formsMap) as FormGroup[]).sort(
                    (a, b) => (parseInt(a.formCode) || 0) - (parseInt(b.formCode) || 0)
                  );

                  return (
                    <div
                      id={`lesson-group-${group.groupKey}`}
                      key={group.groupKey}
                      className="bg-slate-900/75 rounded-xl border border-slate-800/90 shadow-lg overflow-hidden transition-all hover:border-slate-700"
                    >
                      {/* Compact 1-Line Lesson Header */}
                      <div 
                        onClick={() => toggleExpandLesson(group.groupKey)}
                        className="px-3.5 py-2.5 bg-slate-800/60 hover:bg-slate-800/90 flex items-center justify-between gap-3 cursor-pointer transition-colors select-none"
                      >
                        <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                          {/* Mã tệp chuẩn NHCH (VD: 0D6-B1) */}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyTextToClipboard(group.fileNoteCode, `Đã copy mã tệp: ${group.fileNoteCode}`);
                            }}
                            className="px-2.5 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 rounded-lg font-mono text-xs font-black tracking-wide flex items-center gap-1.5 shrink-0 active:scale-95 transition-all"
                            title={`Mã tệp chuẩn: ${group.fileNoteCode}.tex (Click để copy tên tệp)`}
                          >
                            <FolderGit2 size={14} className="text-cyan-400 shrink-0" />
                            <span>{group.fileNoteCode}</span>
                          </button>

                          {/* Lớp */}
                          <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md text-[11px] font-black shrink-0">
                            {group.gradeName}
                          </span>

                          {/* Chương (gọn, hover hiện đầy đủ Phân môn + Chương) */}
                          <span
                            className="px-2.5 py-0.5 bg-slate-900/90 text-slate-300 border border-slate-700/80 rounded-md text-[11px] font-bold truncate max-w-[220px] shrink-0"
                            title={`${group.subjectName ? group.subjectName + ' • ' : ''}${group.chapterTitle}`}
                          >
                            {group.chapterTitle}
                          </span>

                          <span className="text-slate-600 font-bold shrink-0">›</span>

                          {/* Tên bài học */}
                          <h3 className="text-white font-black text-xs md:text-sm truncate" title={group.lessonTitle}>
                            {group.lessonTitle}
                          </h3>

                          {/* Tổng số câu */}
                          <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-[11px] font-bold border border-blue-500/30 shrink-0">
                            {group.questions.length} câu
                          </span>
                        </div>

                        {/* Nút thao tác gọn trên 1 hàng */}
                        <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => copyLessonLaTeX(group)}
                            className="px-2.5 py-1 bg-blue-600/25 hover:bg-blue-600 text-blue-200 hover:text-white border border-blue-500/40 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 active:scale-95"
                            title={`Copy toàn bộ LaTeX bài này (${group.fileNoteCode})`}
                          >
                            <Copy size={12} /> Copy LaTeX
                          </button>
                          <button
                            onClick={() => downloadLessonTexFile(group)}
                            className="px-2.5 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 active:scale-95"
                            title={`Tải file ${group.fileNoteCode}.tex`}
                          >
                            <Download size={12} /> {group.fileNoteCode}.tex
                          </button>
                          <button
                            onClick={() => copyLessonIDs(group)}
                            className="px-2 py-1 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 active:scale-95"
                            title="Sao chép danh sách mã ID"
                          >
                            <FileCode size={12} /> Copy ID
                          </button>
                          <button
                            onClick={() => toggleExpandLesson(group.groupKey)}
                            className={`p-1 rounded-lg transition-all border ${
                              isExpanded 
                                ? 'bg-blue-600 text-white border-blue-500 shadow-md' 
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                            }`}
                            title={isExpanded ? "Thu gọn" : "Mở xem chi tiết các dạng & câu hỏi"}
                          >
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Chỉ khi bấm Mở rộng mới hiện các Dạng bài và danh sách câu hỏi */}
                      {isExpanded && (
                        <div className="p-3.5 bg-slate-950/40 border-t border-slate-800 space-y-3 animate-in slide-in-from-top-2 duration-200">
                          {/* Thanh tóm tắt Dạng bài bên trong khi mở ra */}
                          <div className="flex items-center justify-between gap-2 flex-wrap bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800/80">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1 mr-1">
                                <Tag size={12} className="text-emerald-400" /> Các dạng ({formGroups.length}):
                              </span>
                              {formGroups.map(fg => (
                                <button
                                  key={fg.formCode}
                                  onClick={() => copyFormLaTeX(group, fg)}
                                  className="px-2 py-0.5 bg-slate-950 hover:bg-emerald-600/20 text-slate-300 hover:text-emerald-200 border border-slate-800 hover:border-emerald-500/40 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 active:scale-95"
                                  title={`Click để copy riêng ${fg.questions.length} câu của ${fg.formTitle}`}
                                >
                                  <span className="font-mono text-[10px] font-black text-emerald-400">Dạng {fg.formCode}:</span>
                                  <span className="truncate max-w-[220px]">{fg.formTitle.replace(/^Dạng\s+[^:]+:\s*/i, '')}</span>
                                  <span className="px-1.5 bg-emerald-500/20 text-emerald-300 rounded text-[10px] font-black">
                                    {fg.questions.length}
                                  </span>
                                </button>
                              ))}
                            </div>
                            <button
                              onClick={() => setGroupByFormInLesson(!groupByFormInLesson)}
                              className="text-[10px] font-bold text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800 border border-slate-700 shrink-0"
                            >
                              {groupByFormInLesson ? 'Xem danh sách phẳng' : 'Gom theo Dạng bài'}
                            </button>
                          </div>
                          {groupByFormInLesson ? (
                            formGroups.map((fg) => (
                              <div key={fg.formCode} className="bg-slate-900/50 rounded-2xl border border-slate-800/90 overflow-hidden">
                                {/* Sub-header cho từng Dạng bài */}
                                <div className="px-4 py-2.5 bg-slate-800/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                                  <div className="flex items-center gap-2.5 flex-wrap">
                                    <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg font-mono text-xs font-black">
                                      {group.fileNoteCode} • Dạng {fg.formCode}
                                    </span>
                                    <h4 className="text-xs md:text-sm font-black text-white">
                                      {fg.formTitle}
                                    </h4>
                                    <span className="text-[11px] font-bold text-slate-400">
                                      ({fg.questions.length} câu — N:{fg.levelCounts.N} • H:{fg.levelCounts.H} • V:{fg.levelCounts.V} • C:{fg.levelCounts.C})
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => copyFormLaTeX(group, fg)}
                                    className="px-3 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5"
                                  >
                                    <Copy size={12} /> Copy riêng Dạng {fg.formCode} ({fg.questions.length} câu)
                                  </button>
                                </div>

                                <div className="p-3.5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                                  {fg.questions.map((q) => {
                                    const v = validateQuestionWithFilters(q, { grade: fGrade, subject: fSub, chapter: fChap, lesson: fLes, level: fLevel });
                                    const isCopied = copiedUid === q.uid;
                                    return (
                                      <div 
                                        key={q.uid} 
                                        onClick={() => copySingleQuestion(q)}
                                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2.5 group ${
                                          v.isMismatch 
                                            ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40' 
                                            : 'bg-slate-950/50 border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-800/40'
                                        }`}
                                        title="Click để copy mã LaTeX của câu hỏi này"
                                      >
                                        <div className="flex items-center justify-between gap-2 flex-wrap">
                                          <div className="flex items-center gap-1.5">
                                            <span className={`font-mono text-xs font-black px-2.5 py-1 rounded-lg ${
                                              v.isMismatch ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'
                                            }`}>
                                              {q.idString}
                                            </span>
                                            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                              {group.fileNoteCode}
                                            </span>
                                          </div>
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                                              {LEVEL_MAP[q.level as LevelCode] || q.level}
                                            </span>
                                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                                              {q.type === 'C' ? 'TN' : q.type === 'F' ? 'Đ/S' : 'TL'}
                                            </span>
                                            <button 
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                copySingleQuestion(q);
                                              }}
                                              className="p-1.5 text-slate-400 hover:text-white hover:bg-blue-600 rounded-lg transition-all"
                                            >
                                              {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                            </button>
                                          </div>
                                        </div>
                                        <p className="text-slate-300 text-xs line-clamp-3 font-mono opacity-85 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 group-hover:border-slate-700/80 transition-colors">
                                          "{q.content}"
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                              {group.questions.map((q) => {
                                const v = validateQuestionWithFilters(q, { grade: fGrade, subject: fSub, chapter: fChap, lesson: fLes, level: fLevel });
                                const isCopied = copiedUid === q.uid;
                                return (
                                  <div 
                                    key={q.uid} 
                                    onClick={() => copySingleQuestion(q)}
                                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2.5 group ${
                                      v.isMismatch 
                                        ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40' 
                                        : 'bg-slate-950/40 border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-800/40'
                                    }`}
                                    title="Click để copy mã LaTeX của câu hỏi này"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-1.5">
                                        <span className={`font-mono text-xs font-black px-2.5 py-1 rounded-lg ${
                                          v.isMismatch ? 'bg-amber-500/10 text-amber-400' : 'bg-blue-500/10 text-blue-400'
                                        }`}>
                                          {q.idString}
                                        </span>
                                        <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                                          Dạng {q.meta.form || '?'}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                                          {q.type === 'C' ? 'Trắc nghiệm' : q.type === 'F' ? 'Đúng/Sai' : 'Tự luận'}
                                        </span>
                                        <button 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            copySingleQuestion(q);
                                          }}
                                          className="p-1.5 text-slate-400 hover:text-white hover:bg-blue-600 rounded-lg transition-all"
                                        >
                                          {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                        </button>
                                      </div>
                                    </div>
                                    <div className="text-[11px] font-semibold text-emerald-400/90 truncate">
                                      Dạng {q.meta.form}: {q.meta.formTitle || 'Chưa rõ tên dạng'}
                                    </div>
                                    <p className="text-slate-300 text-xs line-clamp-3 font-mono opacity-80 leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 group-hover:border-slate-700/80 transition-colors">
                                      "{q.content}"
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* HORIZONTAL LEFT-TO-RIGHT SCROLL VIEW MODE */
              <div className="flex h-full gap-5 min-w-max p-1 overflow-x-auto pb-4 custom-scrollbar">
                {(Object.values(filteredGroupedData) as GroupedLesson[]).map((group) => (
                  <div key={group.groupKey} className="w-[430px] flex flex-col bg-slate-900/60 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden group">
                    <div className="p-3.5 bg-slate-800/60 border-b border-slate-700/50 flex flex-col gap-2">
                       <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="px-2.5 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-md font-mono text-xs font-black">
                              {group.fileNoteCode}
                            </span>
                            <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md text-[11px] font-black">
                              {group.gradeName}
                            </span>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <button 
                              onClick={() => copyLessonLaTeX(group)} 
                              title={`Copy tất cả câu hỏi bài ${group.fileNoteCode}`}
                              className="p-1.5 bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white rounded-lg transition-colors active:scale-90"
                            >
                              <Copy size={13} />
                            </button>
                            <button 
                              onClick={() => downloadLessonTexFile(group)} 
                              title={`Tải file ${group.fileNoteCode}.tex`}
                              className="p-1.5 bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white rounded-lg transition-colors active:scale-90"
                            >
                              <Download size={13} />
                            </button>
                            <button 
                              onClick={() => copyLessonIDs(group)} 
                              title="Copy danh sách mã ID"
                              className="p-1.5 bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-lg transition-colors active:scale-90"
                            >
                              <FileCode size={13} />
                            </button>
                          </div>
                       </div>
                       <div className="text-[11px] font-bold text-slate-400 truncate" title={group.chapterTitle}>
                         {group.chapterTitle}
                       </div>
                       <h4 className="text-white font-black text-xs truncate" title={group.lessonTitle}>
                         {group.lessonTitle} ({group.questions.length} câu)
                       </h4>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                      <table className="w-full text-left border-collapse table-fixed">
                        <tbody>
                          {group.questions.map((q) => {
                            const v = validateQuestionWithFilters(q, { grade: fGrade, subject: fSub, chapter: fChap, lesson: fLes, level: fLevel });
                            return (
                              <tr 
                                key={q.uid} 
                                onClick={() => copySingleQuestion(q)}
                                title={`Dạng ${q.meta.form}: ${q.meta.formTitle || ''} — Click để copy LaTeX`}
                                className={`hover:bg-blue-600/10 border-b border-white/5 cursor-pointer transition-colors ${v.isMismatch ? 'bg-amber-500/5' : ''}`}
                              >
                                <td className={`p-2.5 w-[135px] font-mono text-[10px] font-bold truncate ${v.isMismatch ? 'text-amber-400' : 'text-blue-400/90'}`}>
                                  <div>{q.idString}</div>
                                  <div className="text-[9px] text-emerald-400 font-sans truncate">Dạng {q.meta.form}: {q.meta.formTitle || ''}</div>
                                </td>
                                <td className="p-2.5 truncate text-[11px] opacity-75 text-slate-300">"{q.content}"</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-800 border-4 border-dashed border-slate-800/30 rounded-[40px] min-w-full py-16">
              <Layers size={70} className="opacity-5" />
              <p className="mt-2 italic text-slate-500 text-xs font-medium">Chưa có dữ liệu phù hợp bộ lọc</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonFilter;
