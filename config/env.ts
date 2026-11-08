import 'dotenv/config';

const apiBaseUrl = process.env.API_BASE_URL;
const apiTimeoutMs = Number(process.env.API_TIMEOUT_MS ?? 30000);

if (!apiBaseUrl) {
  throw new Error('API_BASE_URL is missing in .env');
}

if (!Number.isFinite(apiTimeoutMs) || apiTimeoutMs <= 0) {
  throw new Error('API_TIMEOUT_MS must be a positive number');
}

export const env = {
  apiBaseUrl,
  apiTimeoutMs,
};
