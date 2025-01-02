import { APIError } from './types';

export const createAPIError = (error: unknown): APIError => {
  if (error instanceof Error) {
    return {
      message: error.message,
      details: error.stack
    };
  }
  
  return {
    message: 'An unexpected error occurred',
    details: String(error)
  };
};