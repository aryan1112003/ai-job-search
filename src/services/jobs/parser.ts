import { ParsedJob } from './types';

export const parseJobResults = (response: string): ParsedJob[] => {
  try {
    // Find JSON content between curly braces
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return [];

    const parsed = JSON.parse(jsonMatch[0]);
    if (!parsed.jobs || !Array.isArray(parsed.jobs)) return [];

    return parsed.jobs.filter(isValidJob);
  } catch (error) {
    console.error('Failed to parse job results:', error);
    return [];
  }
};

const isValidJob = (job: any): job is ParsedJob => {
  return (
    job &&
    typeof job.title === 'string' &&
    typeof job.company === 'string' &&
    typeof job.location === 'string' &&
    typeof job.description === 'string' &&
    typeof job.url === 'string' &&
    isValidJobSource(job.source)
  );
};

const isValidJobSource = (source: any): boolean => {
  return (
    source &&
    typeof source.name === 'string' &&
    typeof source.url === 'string' &&
    typeof source.icon === 'string' &&
    ['LinkedIn', 'Indeed', 'Glassdoor'].includes(source.name)
  );
};