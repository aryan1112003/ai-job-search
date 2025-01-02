const VALID_JOB_DOMAINS = [
  'linkedin.com',
  'indeed.com',
  'glassdoor.com',
  'monster.com',
  'careers.google.com',
  'jobs.microsoft.com',
  'amazon.jobs',
  'lever.co',
  'greenhouse.io',
  'workday.com'
];

export const isValidJobUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return VALID_JOB_DOMAINS.some(domain => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
};