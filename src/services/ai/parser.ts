import { Job } from '../../types';
import { isValidJobUrl } from '../../utils/urlValidator';

const validateJob = (job: any): job is Job => {
  return (
    typeof job.id === 'string' &&
    typeof job.title === 'string' &&
    typeof job.company === 'string' &&
    typeof job.location === 'string' &&
    typeof job.description === 'string' &&
    typeof job.salary === 'string' &&
    typeof job.url === 'string' &&
    isValidJobUrl(job.url) && // Validate URL
    typeof job.posted_at === 'string'
  );
};

export const parseAIResponse = (text: string): Job[] => {
  try {
    const jsonMatch = text.match(/\[.*\]/s);
    if (!jsonMatch) {
      console.error('No JSON array found in response');
      return [];
    }

    const parsed = JSON.parse(jsonMatch[0]);
    if (!Array.isArray(parsed)) {
      console.error('AI response is not an array');
      return [];
    }

    const validJobs = parsed.filter(job => {
      try {
        return validateJob(job);
      } catch (e) {
        console.error('Invalid job object:', job);
        return false;
      }
    });

    return validJobs.slice(0, 10);
  } catch (e) {
    console.error('Failed to parse AI response:', e);
    return [];
  }
};