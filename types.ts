
export type GradeCode = '6' | '7' | '8' | '9' | '0' | '1' | '2';
export type SubjectCode = 'D' | 'H' | 'C' | 'X';
export type LevelCode = 'N' | 'H' | 'V' | 'C';
export type EnvType = 'ex' | 'vd' | 'bt';
export type QuestionType = 'C' | 'F' | 'T'; // Trắc nghiệm, Đúng/Sai, Tự luận

export interface QuestionMeta {
  valid: boolean;
  grade: string;
  subject: string;
  chapter: string;
  level: string;
  lesson: string;
  form: string;
  rawId: string;
  cleanId?: string;
  isTHCS?: boolean;
  error?: string;
  chapterTitle?: string;
  lessonTitle?: string;
  formTitle?: string;
  qType: QuestionType;
}

export interface Question {
  uid: string;
  env: EnvType;
  type: QuestionType;
  idString: string; // The full %[ID] string
  rawId: string; // The ID string
  isValidId: boolean;
  meta: QuestionMeta;
  level: string;
  content: string;
  options: string[];
  correctAnswer: string;
  solution: string;
  fullCode: string;
  contentHash: string;
}

export interface CurriculumType {
  code: string;
  title: string;
}

export interface CurriculumLesson {
  code: string;
  title: string;
  types: CurriculumType[];
}

export interface CurriculumChapter {
  code: string;
  title: string;
  lessons: CurriculumLesson[];
}

export interface CurriculumGrade {
  code: string;
  title?: string;
  chapters?: CurriculumChapter[];
  D?: CurriculumChapter[];
  H?: CurriculumChapter[];
  C?: CurriculumChapter[];
  X?: CurriculumChapter[];
}

