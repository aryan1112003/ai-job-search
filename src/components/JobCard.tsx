import React from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Briefcase size={16} />
          <span>{job.company}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={16} />
          <span>{job.posted_at}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>
      
      {job.salary && (
        <p className="text-green-600 font-medium mb-4">{job.salary}</p>
      )}

      <div className="flex justify-between items-center">
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Apply Now
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};