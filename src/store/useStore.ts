import { create } from 'zustand';
import { Job } from '../types';

interface JobState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

interface JobActions {
  setJobs: (jobs: Job[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSearchTerm: (term: string) => void;
  reset: () => void;
}

const initialState: JobState = {
  jobs: [],
  loading: false,
  error: null,
  searchTerm: '',
};

export const useJobStore = create<JobState & JobActions>((set) => ({
  ...initialState,
  setJobs: (jobs) => set({ jobs: jobs.map(job => ({ ...job })) }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  reset: () => set(initialState),
}));