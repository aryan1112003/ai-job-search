import React from 'react';
import { useJobStore } from '../store/useStore';
import { JobCard } from './JobCard';
import { Loader } from 'lucide-react';

export const JobList = () => {
  const { jobs, loading, error } = useJobStore();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="animate-spin" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No jobs found. Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};