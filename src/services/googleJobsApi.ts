import axios from 'axios';
import { API_CONFIG } from '../config/api.config';
import { Job } from '../types';
import { sanitizeJobData } from '../utils/dataUtils';
import { createAPIError } from './api/errorHandler';
import { APIResponse } from './api/types';

export const searchGoogleJobs = async (query: string): Promise<APIResponse<Job[]>> => {
  try {
    const response = await axios.get(
      `${API_CONFIG.GOOGLE_JOBS_API_URL}?key=${API_CONFIG.GOOGLE_JOBS_API_KEY}`,
      {
        params: {
          query,
          orderBy: 'relevance desc',
          pageSize: API_CONFIG.MAX_JOBS,
        },
      }
    );

    const jobs = response.data?.jobs || [];
    const sanitizedJobs = jobs.map((job: any) => sanitizeJobData({
      id: job.name || String(Math.random()),
      title: job.title || '',
      company: job.company?.name || '',
      location: job.locations?.[0] || 'Remote',
      description: (job.description || '').substring(0, 200) + '...',
      salary: job.compensation?.range || 'Not specified',
      url: job.applicationInfo?.externalUrl || '',
      posted_at: new Date(job.postingPublishTime || Date.now()).toLocaleDateString(),
    }));

    return {
      data: sanitizedJobs,
      error: null
    };
  } catch (error) {
    return {
      data: [],
      error: createAPIError(error)
    };
  }
};