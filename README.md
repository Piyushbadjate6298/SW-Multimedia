# SW Multimedia Premium Website

A premium, responsive React/Vite website for SW Multimedia based on the supplied development specification.

## Run locally
```bash
npm install
npm run dev
```
Open the localhost URL shown in terminal.

## Build
```bash
npm run build
```
The production files are generated in the `dist` directory.

## Project structure
- `src/main.jsx` - React/Vite bootstrap only.
- `src/App.jsx` - app shell, page state, and navigation handlers.
- `src/components` - shared layout, forms, logos, and visual components.
- `src/pages` - one file per website page/module.
- `src/data/content.js` - reusable page content and course/blog data.
- `src/services/leads.js` - frontend API service for enquiry submissions.

## Deploy on Vercel
1. Push this folder to GitHub.
2. Import the repo in Vercel.
3. Framework: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Add `VITE_API_URL` if the backend is hosted on a separate domain, for example `https://your-api.onrender.com`.

## Pages included
Home, About, Courses, Course Detail, Internships, Placements, Blog, Blog Article, Gallery, Contact, Admin Preview, Privacy Policy, Terms, Refund Policy.

## Backend (API)

The backend is an Express + Mongoose server located in the `Backend` folder. It exposes a POST `/api/leads` endpoint to save enquiry leads to MongoDB.

To run the backend locally:

```bash
cd Backend
npm install
npm start
```

The backend reads `MONGO_URI` and `PORT` from `Backend/.env`.

For local frontend-to-backend testing, create a frontend `.env` file:

```bash
VITE_API_URL=http://localhost:5000
```
