# API Automation Testing Framework

A REST API automation testing framework built with Playwright and TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv
- JSONPlaceholder REST API

## Project Structure

```text
api-automation-tests/
├── config/
│   └── env.ts
├── src/
│   ├── clients/
│   │   └── api-client.ts
│   ├── data/
│   │   └── user.data.ts
│   └── types/
│       └── user.types.ts
├── tests/
│   └── users/
│       ├── get-users.spec.ts
│       ├── post-users.spec.ts
│       ├── put-users.spec.ts
│       └── delete-users.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
└── tsconfig.json