import React from 'react';
import { SearchBar } from './components/SearchBar';
import { JobList } from './components/JobList';
import { SearchCode } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SearchCode size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AI Job Search</h1>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Aryan Acharya
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 flex-1">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search through millions of job listings powered by AI to find the perfect match for your skills and experience.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <SearchBar />
        </div>

        <JobList />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} AI Job Search. Created by <a href="https://github.com/aryan1112003" className="text-blue-600 hover:underline">Aryan Acharya</a></p>
            <p className="mt-1">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;