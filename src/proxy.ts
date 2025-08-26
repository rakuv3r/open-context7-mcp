if (!process.env.CONTEXT7_API_BASE_URL) {
  throw new Error('CONTEXT7_API_BASE_URL environment variable is required');
}

const API_BASE_URL = process.env.CONTEXT7_API_BASE_URL.replace(/\/$/, '');
const OFFICIAL_API_BASE_URL = 'https://context7.com/api';

const originalFetch = globalThis.fetch;

globalThis.fetch = ((input: RequestInfo | URL, init?: RequestInit) => {
  if (typeof input === 'string' && input.startsWith(OFFICIAL_API_BASE_URL)) {
    const newUrl = input.replace(OFFICIAL_API_BASE_URL, API_BASE_URL);
    return originalFetch(newUrl, init);
  }
  
  if (input instanceof URL && input.href.startsWith(OFFICIAL_API_BASE_URL)) {
    const newUrl = input.href.replace(OFFICIAL_API_BASE_URL, API_BASE_URL);
    return originalFetch(newUrl, init);
  }
  
  return originalFetch(input, init);
}) as typeof fetch;