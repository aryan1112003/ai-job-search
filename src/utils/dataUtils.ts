import { Job } from '../types';

export const sanitizeJobData = (job: Partial<Job>): Job => ({
  id: String(job.id || Math.random()),
  title: String(job.title || ''),
  company: String(job.company || ''),
  location: String(job.location || 'Remote'),
  description: String(job.description || '').substring(0, 200),
  salary: String(job.salary || 'Not specified'),
  url: String(job.url || ''),
  posted_at: String(job.posted_at || new Date().toLocaleDateString()),
});