export interface JobSearchParams {
  query: string;
  limit?: number;
}

export interface JobSource {
  name: string;
  url: string;
  icon: string;
}

export interface ParsedJob {
  title: string;
  company: string;
  location: string;
  description: string;
  salary: string;
  url: string;
  source: JobSource;
}