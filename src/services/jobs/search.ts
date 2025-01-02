import { getAIModel } from '../ai/client';
import { createSearchPrompt } from './prompts';
import { parseJobResults } from './parser';
import { JobSearchParams, ParsedJob } from './types';
import { sanitizeJobData } from '../../utils/dataUtils';
import { Job } from '../../types';

export const searchJobs = async ({ 
  query, 
  limit = 10 
}: JobSearchParams): Promise<Job[]> => {
  try {
    const model = getAIModel();
    const prompt = createSearchPrompt(query, limit);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const parsedJobs = parseJobResults(text);
    
    return parsedJobs.map(job => sanitizeJobData({
      id: Math.random().toString(36).substring(7),
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
      salary: job.salary,
      url: job.url,
      posted_at: new Date().toLocaleDateString()
    }));
  } catch (error) {
    console.error('Job search failed:', error);
    throw new Error('Failed to search jobs. Please try again.');
  }
};