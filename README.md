# express-ts-starter

A minimal, production-ready starter template for building **Express.js APIs** using **TypeScript**. Includes linting, formatting, and environment configurations out of the box to help you scaffold quickly, stay consistent, and ship with confidence.

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/express-ts-starter?referralCode=WTgsfh&utm_medium=integration&utm_source=template&utm_campaign=generic)

---

## Features

- ⚡️ Express.js server with TypeScript for type safety  
- 🛠 Project structure ready for routing, middleware, and scaling  
- 📏 ESLint and Prettier for linting and formatting  
- 🔑 `.env.template` for environment variable setup  
- 📦 TypeScript configuration tuned for Node/Express  
- 🔒 `.nvmrc` to ensure consistent Node.js version  

---

## Getting Started

### Prerequisites

- **Node.js** (version specified in `.nvmrc`)  
- **npm**, **Yarn**, or **pnpm**  
- Optional: A code editor with TypeScript & linting support  

### Setup

```bash
# Clone the repo
git clone https://github.com/jtmozley/express-ts-starter.git
cd express-ts-starter

# Install dependencies
npm install
```

### Environment Variables

Rename the .env.template file and fill in required values:
```bash
mv .env.template .env
```

### Development
```bash
npm run dev
```

### Run (Production)
```bash
npm start
```

### Project Structure
```text
express-ts-starter/
├── .env.template         # Environment variable template
├── .eslintrc.json        # ESLint configuration
├── .prettierrc.json      # Prettier formatting rules
├── .gitignore
├── .nvmrc                # Node version setting
├── package.json
├── tsconfig.json
└── src/
    ├── express.config.ts   # Middleware and route configurations 
    ├── server.ts           # Entry point of the application
    ├── routes/             # API route handlers
    └── (other folders as needed for controllers, middleware, etc.)
```
