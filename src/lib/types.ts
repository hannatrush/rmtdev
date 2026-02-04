export type JobItem = {
  id: string;
  title: string;
  badgeLetters: string;
  company: string;
  relevanceScore: number;
  daysAgo: number;
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  location: string;
  salary: string;
  coverImgURL: string;
  companyURL: string;
};

export type PageDirection = 'next' | 'previous';

export type SortMethod = 'relevant' | 'recent';
