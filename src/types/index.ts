export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary?: string;
  url: string;
  posted_at: string;
}

export interface User {
  id: string;
  email: string;
  savedJobs: string[];
  searchHistory: string[];
}