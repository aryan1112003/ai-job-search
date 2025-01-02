export const JOB_SEARCH_PROMPT = `
Find current job listings for: {{QUERY}}

Return exactly {{LIMIT}} jobs in this JSON format:
{
  "jobs": [
    {
      "title": "exact job title",
      "company": "company name",
      "location": "city, state/country",
      "description": "brief job description (max 200 chars)",
      "salary": "salary range if available",
      "url": "job listing URL",
      "source": {
        "name": "LinkedIn",
        "url": "https://linkedin.com",
        "icon": "linkedin"
      }
    }
  ]
}

Requirements:
- Use realistic job titles and companies
- Include remote jobs when relevant
- Descriptions should be clear and concise
- URLs must be from: linkedin.com, indeed.com, glassdoor.com
- Sources must be: LinkedIn, Indeed, or Glassdoor only
`;

export const createSearchPrompt = (query: string, limit: number = 10): string => {
  return JOB_SEARCH_PROMPT
    .replace('{{QUERY}}', query)
    .replace('{{LIMIT}}', String(limit));
};