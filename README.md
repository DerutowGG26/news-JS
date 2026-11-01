# News Portal

A responsive news application built with TypeScript, Webpack and the RS School News API proxy

## Features

- Browse available news sources
- Load news articles by selected source
- Display article titles, descriptions, authors and publication dates
- Responsive layout for screen widths from 320px to 1920px

## Technologies

- TypeScript
- JavaScript
- HTML5 and CSS3
- Webpack 5
- ESLint
- News API proxy provided by rs school

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DerutowGG26/news-JS.git
   ```

2. Navigate to the project directory:

   ```bash
   cd news-JS
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file from the example:

   PowerShell:

   ```powershell
   Copy-Item .env.example .env
  

5. Make sure `.env` contains the RS School mock API URL:

   ```env
   API_URL=https://rss-news-api.onrender.com/mocks/
   ```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run lint` | Runs ESLint |

## API

The application uses the RS School proxy with static mock data:

- Sources: `https://rss-news-api.onrender.com/mocks/sources`
- News: `https://rss-news-api.onrender.com/mocks/everything`

No personal News API key is required for the mock endpoints.

## TypeScript Configuration

The project uses strict TypeScript checking, including:

- `strict: true`
- `noImplicitAny: true`
- No explicit `any` types

## Project Structure

```text
src/
├── components/
│   ├── app/
│   ├── controller/
│   └── view/
├── global.css
├── index.html
├── index.ts
├── types.ts
└── types.d.ts
```
