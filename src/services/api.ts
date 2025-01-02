import { searchJobsWithBard } from './bardApi';
import { searchGoogleJobs } from './googleJobsApi';
import { Job } from '../types';
import { APIResponse } from './api/types';

export const searchJobs = async (query: string): Promise<Job[]> => {
  try {
    // Try Google Jobs API first
    const googleResponse = await searchGoogleJobs(query);
    if (googleResponse.error === null && googleResponse.data.length > 0) {
      return googleResponse.data;
    }

    // Fallback to Bard if Google Jobs API fails or returns no results
    const bardResponse = await searchJobsWithBard(query);
    if (bardResponse.error === null) {
      return bardResponse.data;
    }

    // If both APIs fail, throw the last error
    if (bardResponse.error) {
      throw new Error(bardResponse.error.message);
    }
    
    return [];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch jobs: ${error.message}`);
    }
    throw new Error('Failed to fetch jobs');
  }
};