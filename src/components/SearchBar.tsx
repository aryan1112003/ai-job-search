import React, { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { useJobStore } from '../store/useStore';
import { searchJobs } from '../services/jobs/search';

export const SearchBar = () => {
  const { setJobs, setLoading, setError, setSearchTerm } = useJobStore();
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setSearchTerm(query);
    
    try {
      const results = await searchJobs({ query, limit: 10 });
      setJobs(results);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch jobs';
      setError(errorMessage);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }, [query, setJobs, setLoading, setError, setSearchTerm]);

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for jobs (e.g. React Developer, Product Manager)..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <button
          type="submit"
          disabled={!query.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
    </form>
  );
};