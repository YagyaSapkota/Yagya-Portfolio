import type { EducationEntry, GpaRecord } from '../types';

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    period: 'Class 1 – 7',
    school: 'Kids Home Academy English School',
    level: 'Primary Education',
  },
  {
    period: 'Class 8 – 12',
    school: 'Shree Ratna Rajya Laxmi Secondary School',
    level: 'Secondary Education (+2 NEB)',
    achievement: 'Completed +2 (NEB)',
  },
];

export const GPA_RECORDS: GpaRecord[] = [
  { exam: 'BLE', gpa: '3.86' },
  { exam: 'SEE', gpa: '3.79' },
  { exam: 'Grade 11', gpa: '3.79' },
  { exam: 'Grade 12', gpa: '3.88' },
];
