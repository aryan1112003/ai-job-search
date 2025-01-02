export const generateJobSearchPrompt = (query: string) => `
Search for real job listings related to: ${query}
Return a JSON array of exactly 10 job listings. Format:
{
  "id": "unique-string",
  "title": "exact job title",
  "company": "company name",
  "location": "city, country",
  "description": "first 200 chars of job description",
  "salary": "exact salary range if available, otherwise 'Not specified'",
  "url": "direct application URL",
  "posted_at": "current date"
}

Requirements:
1. Use ONLY real job listings from major job sites
2. Include ONLY working URLs from: linkedin.com, indeed.com, glassdoor.com
3. Keep descriptions under 200 characters
4. Use current date for posted_at
5. Return valid JSON array only, no other text

Example URL formats:
- https://www.linkedin.com/jobs/view/123456
- https://www.indeed.com/viewjob?jk=abcdef
- https://www.glassdoor.com/job-listing/123456`;