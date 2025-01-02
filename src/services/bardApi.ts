import { getAIModel } from './ai/client';
import { generateJobSearchPrompt } from './ai/prompts';
import { parseAIResponse } from './ai/parser';
import { Job } from '../types';
import { sanitizeJobData } from '../utils/dataUtils';
import { createAPIError } from './api/errorHandler';
import { APIResponse } from './api/types';

export const searchJobsWithBard = async (query: string): Promise<APIResponse<Job[]>> => {
  try {
    const model = getAIModel();
    const prompt = generateJobSearchPrompt(query);
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const jobs = parseAIResponse(text);
    return {
      data: jobs.map(sanitizeJobData),
      error: null
    };
  } catch (error) {
    return {
      data: [],
      error: createAPIError(error)
    };
  }
};