export interface APIError {
  message: string;
  code?: string;
  details?: string;
}

export interface APIResponse<T> {
  data: T;
  error: APIError | null;
}