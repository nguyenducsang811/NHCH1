
import { Question, QuestionMeta, EnvType, QuestionType, SubjectCode, LevelCode } from './types';
import { GRADE_TO_CODE, CURRICULUM_DATA, CODE_TO_GRADE, CURRICULUM_BRANCH_TITLES } from './constants';

export const hashContent = (text: string): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
};

/**
 * Regex chuẩn theo quy định:
 * THCS (Lớp 6, 7, 8, 9): %[Lớp-Chương-Bài-Dạng-(Mức)] => %[6-C1-1-1-(N)]
 * THPT (Lớp 10, 11, 12): %[LớpNhánhChươngMứcBài-Dạng] => %[0D1N1-1] (10->0, 11->1, 12->2)
 */
export const THCS_ID_REGEX = /^\[([6789])-(C\d+)-(\d+)-(\d+)-\(([NHVC])\)\]$/;
export const THPT_ID_REGEX = /^\[([012])([DHC])(\d+)([NHVC])(\d+)-(\d+)\]$/;
export const ID_REGEX = /%\[(([6789]-(?:C\d+)-\d+-\d+-\([NHVC]\))|([012][DHC]\d+[NHVC]\d+-\d+))\]/;

export const isGradeTHCS = (grade: string): boolean => {
  const code = GRADE_TO_CODE[grade] || grade;
  return ['6', '7', '8', '9'].includes(code);
};

export const getAvailableSubjects = (grade: string): { code: SubjectCode; name: string; title: string }[] => {
  const code = GRADE_TO_CODE[grade] || grade;
  if (['6', '7', '8', '9'].includes(code)) {
    return [];
  }
  const gradeData = CURRICULUM_DATA[code];
  if (!gradeData) return [];
  const list: { code: SubjectCode; name: string; title: string }[] = [];
  if (gradeData.D) {
    const title = CURRICULUM_BRANCH_TITLES[code]?.['D'] || 'Đại số';
    list.push({ code: 'D', name: title, title });
  }
  if (gradeData.H) {
    const title = CURRICULUM_BRANCH_TITLES[code]?.['H'] || 'Hình học & đo lường';
    list.push({ code: 'H', name: title, title });
  }
  if (gradeData.C) {
    const title = CURRICULUM_BRANCH_TITLES[code]?.['C'] || 'Chuyên đề';
    list.push({ code: 'C', name: title, title });
  }
  return list;
};

export const getCurriculumChapters = (grade: string, subject?: string): any[] => {
  const code = GRADE_TO_CODE[grade] || grade;
  const gradeData = CURRICULUM_DATA[code];
  if (!gradeData) return [];
  if (['6', '7', '8', '9'].includes(code)) {
    return gradeData.chapters || [];
  }
  const sub = (subject && subject !== 'ALL' ? subject : 'D') as SubjectCode;
  return (gradeData as any)[sub] || [];
};

export const validateCurriculumPath = (meta: {
  grade: string;
  subject?: string;
  chapter: string;
  lesson: string;
  form: string;
  level: string;
  isTHCS?: boolean;
}): { valid: boolean; error?: string; chapterTitle?: string; lessonTitle?: string; formTitle?: string } => {
  const isTHCS = ['6', '7', '8', '9'].includes(meta.grade);
  const gradeData = CURRICULUM_DATA[meta.grade];

  if (!gradeData) {
    return { valid: false, error: `Mã Lớp "${meta.grade}" không tồn tại trong cây mục lục (phải là 6, 7, 8, 9, 0, 1, 2)` };
  }

  if (!['N', 'H', 'V', 'C'].includes(meta.level)) {
    return { valid: false, error: `Mã Mức độ "${meta.level}" không hợp lệ (phải là N, H, V, C)` };
  }

  if (isTHCS) {
    const chapters = gradeData.chapters || [];
    const chapterObj = chapters.find(c => c.code === meta.chapter);
    if (!chapterObj) {
      return { valid: false, error: `Chương "${meta.chapter}" không tồn tại trong Lớp ${meta.grade}` };
    }

    const lessonObj = chapterObj.lessons.find(l => l.code === meta.lesson);
    if (!lessonObj) {
      return { valid: false, error: `Bài "${meta.lesson}" không thuộc ${chapterObj.title} (Lớp ${meta.grade})` };
    }

    const formObj = lessonObj.types.find(t => t.code === meta.form);
    if (!formObj) {
      return { valid: false, error: `Dạng "${meta.form}" không tồn tại trong ${lessonObj.title}` };
    }

    return {
      valid: true,
      chapterTitle: chapterObj.title,
      lessonTitle: lessonObj.title,
      formTitle: formObj.title
    };
  } else {
    const sub = (meta.subject || 'D') as SubjectCode;
    const branchList = (gradeData as any)[sub];
    const gradeLabel = meta.grade === '0' ? '10' : meta.grade === '1' ? '11' : '12';

    if (!branchList) {
      return { valid: false, error: `Phân môn "${sub}" không tồn tại trong Lớp ${gradeLabel}` };
    }

    const chapterObj = branchList.find((c: any) => c.code === meta.chapter);
    if (!chapterObj) {
      return { valid: false, error: `Chương "${meta.chapter}" không tồn tại trong nhánh ${sub} (Lớp ${gradeLabel})` };
    }

    const lessonObj = chapterObj.lessons.find((l: any) => l.code === meta.lesson);
    if (!lessonObj) {
      return { valid: false, error: `Bài "${meta.lesson}" không thuộc ${chapterObj.title} (Lớp ${gradeLabel})` };
    }

    const formObj = lessonObj.types.find((t: any) => t.code === meta.form);
    if (!formObj) {
      return { valid: false, error: `Dạng "${meta.form}" không tồn tại trong ${lessonObj.title}` };
    }

    return {
      valid: true,
      chapterTitle: chapterObj.title,
      lessonTitle: lessonObj.title,
      formTitle: formObj.title
    };
  }
};

export const parseId = (idStr: string): QuestionMeta => {
  const tokenMatch = idStr.match(/%?\[(.*?)\]/);
  const inner = tokenMatch ? tokenMatch[1].trim() : idStr.trim();
  const rawId = tokenMatch ? tokenMatch[0] : idStr;
  const cleanId = `[${inner}]`;

  // 1. Kiểm tra chuẩn THCS: [6-C1-1-1-(N)]
  const thcsMatch = cleanId.match(THCS_ID_REGEX);
  if (thcsMatch) {
    const [_, grade, chapter, lesson, form, level] = thcsMatch;
    const pathCheck = validateCurriculumPath({ grade, chapter, lesson, form, level });
    return {
      valid: pathCheck.valid,
      error: pathCheck.error,
      chapterTitle: pathCheck.chapterTitle,
      lessonTitle: pathCheck.lessonTitle,
      formTitle: pathCheck.formTitle,
      grade,
      subject: '',
      chapter,
      lesson,
      form,
      level,
      rawId,
      cleanId,
      isTHCS: true,
      qType: 'C'
    };
  }

  // 2. Kiểm tra chuẩn THPT: [0D1N1-1]
  const thptMatch = cleanId.match(THPT_ID_REGEX);
  if (thptMatch) {
    const [_, grade, subject, chapter, level, lesson, form] = thptMatch;
    const pathCheck = validateCurriculumPath({ grade, subject, chapter, lesson, form, level });
    return {
      valid: pathCheck.valid,
      error: pathCheck.error,
      chapterTitle: pathCheck.chapterTitle,
      lessonTitle: pathCheck.lessonTitle,
      formTitle: pathCheck.formTitle,
      grade,
      subject,
      chapter,
      lesson,
      form,
      level,
      rawId,
      cleanId,
      isTHCS: false,
      qType: 'C'
    };
  }

  // 3. Phân tích ngữ cảnh lỗi (Diagnostic Parsing) để báo lỗi chính xác
  // Trường hợp THCS dùng khuôn THPT: [6D1N1-1]
  const thcsInThpt = cleanId.match(/^\[([6789])([A-Za-z])?(\d+)([NHVCnhvc])(\d+)-(\d+)\]$/);
  if (thcsInThpt) {
    const g = thcsInThpt[1];
    const c = `C${thcsInThpt[3]}`;
    const lvl = thcsInThpt[4].toUpperCase();
    const les = thcsInThpt[5];
    const form = thcsInThpt[6];
    return {
      valid: false,
      grade: g,
      subject: '',
      chapter: c,
      level: lvl,
      lesson: les,
      form,
      rawId,
      cleanId,
      isTHCS: true,
      qType: 'C',
      error: `Sai quy chuẩn khuôn ID: Lớp ${g} thuộc THCS bắt buộc dùng khuôn [${g}-${c}-${les}-${form}-(${lvl})], tuyệt đối không dùng khuôn THPT.`
    };
  }

  // Trường hợp THCS viết sai dấu ngoặc hoặc thiếu C: [6-1-1-1-N] hoặc [6-C1-1-1-N]
  const looseThcs = cleanId.match(/^\[([6789])-(?:C)?(\d+)-(\d+)-(\d+)-?\(?([A-Za-z])\)?\]$/i);
  if (looseThcs) {
    const g = looseThcs[1];
    const c = `C${looseThcs[2]}`;
    const les = looseThcs[3];
    const form = looseThcs[4];
    const lvl = looseThcs[5].toUpperCase();
    return {
      valid: false,
      grade: g,
      subject: '',
      chapter: c,
      level: lvl,
      lesson: les,
      form,
      rawId,
      cleanId,
      isTHCS: true,
      qType: 'C',
      error: `Sai cú pháp khuôn THCS: Mức độ phải nằm trong ngoặc đơn ở cuối: [${g}-${c}-${les}-${form}-(${lvl})]`
    };
  }

  // Trường hợp THPT viết sai khuôn hoặc mã lớp 10,11,12 chưa chuyển sang 0,1,2
  const looseThpt = cleanId.match(/^\[(10|11|12|[012])[-_]?([A-Za-z])[-_]?(\d+)[-_]?([A-Za-z])[-_]?(\d+)[-_](\d+)\]/);
  if (looseThpt) {
    const rawG = looseThpt[1];
    const g = rawG === '10' ? '0' : rawG === '11' ? '1' : rawG === '12' ? '2' : rawG;
    const sub = looseThpt[2].toUpperCase();
    const c = looseThpt[3];
    const lvl = looseThpt[4].toUpperCase();
    const les = looseThpt[5];
    const form = looseThpt[6];
    return {
      valid: false,
      grade: g,
      subject: sub,
      chapter: c,
      level: lvl,
      lesson: les,
      form,
      rawId,
      cleanId,
      isTHCS: false,
      qType: 'C',
      error: `Sai cú pháp khuôn THPT: Chuẩn phải viết liền [${g}${sub}${c}${lvl}${les}-${form}] (mã lớp 10→0, 11→1, 12→2, chỉ có 1 dấu gạch nối trước dạng)`
    };
  }

  return {
    valid: false,
    grade: '',
    subject: '',
    chapter: '',
    level: '',
    lesson: '',
    form: '',
    rawId,
    cleanId,
    isTHCS: false,
    qType: 'T',
    error: 'Mã ID không đúng định dạng chuẩn THCS %[6-C1-1-1-(N)] hoặc THPT %[0D1N1-1]'
  };
};

export const formatId = (meta: {
  grade: string;
  subject?: string;
  chapter: string;
  lesson: string;
  form: string;
  level: string;
}): string => {
  const isTHCS = ['6', '7', '8', '9'].includes(meta.grade);
  if (isTHCS) {
    const chap = meta.chapter.startsWith('C') ? meta.chapter : `C${meta.chapter}`;
    return `%[${meta.grade}-${chap}-${meta.lesson}-${meta.form}-(${meta.level})]`;
  } else {
    const g = meta.grade === '10' ? '0' : meta.grade === '11' ? '1' : meta.grade === '12' ? '2' : meta.grade;
    const sub = meta.subject || 'D';
    return `%[${g}${sub}${meta.chapter}${meta.level}${meta.lesson}-${meta.form}]`;
  }
};

export interface FilterState {
  grade?: string;
  subject?: string;
  chapter?: string;
  lesson?: string;
  level?: string;
}

export const validateQuestionWithFilters = (q: Question, filters: FilterState): { isMismatch: boolean; reasons: string[]; fieldStatus: any } => {
  const m = q.meta;
  const reasons: string[] = [];
  const status = { grade: true, subject: true, chapter: true, level: true, lesson: true, form: true };

  // 1. Kiểm tra tính hợp lệ trong cây mục lục
  if (!m.valid) {
    reasons.push(m.error || "Mã ID không hợp lệ trong cây mục lục");
    status.grade = false;
  }

  // 2. Kiểm tra bộ lọc
  if (filters.grade && filters.grade !== 'ALL') {
    const targetCode = GRADE_TO_CODE[filters.grade] || filters.grade;
    if (m.grade !== targetCode) {
      reasons.push(`Không khớp Lớp đang lọc (${filters.grade})`);
      status.grade = false;
    }
  }

  const isTHCS = ['6', '7', '8', '9'].includes(m.grade);
  if (!isTHCS && filters.subject && filters.subject !== 'ALL' && m.subject !== filters.subject) {
    reasons.push(`Không khớp Phân môn đang lọc (${filters.subject})`);
    status.subject = false;
  }

  if (filters.chapter && filters.chapter !== 'ALL' && m.chapter !== filters.chapter) {
    reasons.push(`Không khớp Chương đang lọc (${filters.chapter})`);
    status.chapter = false;
  }

  if (filters.lesson && filters.lesson !== 'ALL' && m.lesson !== filters.lesson) {
    reasons.push(`Không khớp Bài đang lọc (${filters.lesson})`);
    status.lesson = false;
  }

  if (filters.level && filters.level !== 'ALL' && filters.level !== 'KEEP' && m.level !== filters.level) {
    reasons.push(`Không khớp Mức độ đang lọc (${filters.level})`);
    status.level = false;
  }

  return {
    isMismatch: reasons.length > 0,
    reasons,
    fieldStatus: status
  };
};

export const parseLatex = (text: string): Question[] => {
  const questions: Question[] = [];
  const pattern = /\\begin\{(ex|vd|bt)\}(?:\[.*?\])?(.*?)\\end\{\1\}/gs;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    const env = match[1] as EnvType;
    const fullBlock = match[2].trim();

    // Tìm mã %[...] ngay sau \begin
    const idMatch = fullBlock.match(/%\[.*?\]/);
    let idString = '';
    let body = fullBlock;

    if (idMatch) {
      idString = idMatch[0];
      body = fullBlock.replace(idString, '').trim();
    } else {
      idString = '[?][Chưa_Gán_ID]';
    }

    const meta = parseId(idString);
    const cHash = hashContent(body.replace(/\s+/g, ''));

    let qType: QuestionType = 'T';
    if (body.includes('\\choiceTF')) qType = 'F';
    else if (body.includes('\\choice')) qType = 'C';

    questions.push({
      uid: Math.random().toString(36).substr(2, 9) + Date.now(),
      env,
      type: qType,
      idString,
      rawId: idString,
      isValidId: meta.valid,
      meta: { ...meta, qType },
      level: meta.level || 'N',
      content: body.split('\\loigiai')[0].trim(),
      options: [],
      correctAnswer: '',
      solution: body.includes('\\loigiai') ? body.split('\\loigiai')[1].trim() : '',
      fullCode: `\\begin{${env}}${idString}\n${body}\n\\end{${env}}`,
      contentHash: cHash
    });
  }
  return questions;
};

