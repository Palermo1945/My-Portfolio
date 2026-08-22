# Portfolio — Christian

A single-page IT/software developer portfolio built with React + Vite.

## Run it

```
npm install
npm run dev
```

Build for production:

```
npm run build
```

## Editing content

Almost everything on the site comes from **one file**:

```
src/data/portfolio.js
```

Edit your name, bio, skills, projects, experience, education, certifications,
services, achievements, and testimonials there. Anything marked
`PLACEHOLDER` is safe to find-and-replace with your real information.

The chatbot's knowledge base (`src/data/chatbotEngine.js`) reads from the
same file automatically — update your data once and the chatbot's answers
update with it.

## Sections included

Home · About · Skills · Projects (filterable + detail modal) · Featured
Project · Experience (timeline) · Education & Certifications · Services ·
Resume · Achievements (hidden until you add entries) · Testimonials (hidden
until you add entries, per your request to never show fake ones) · Contact ·
Footer · Floating AI chatbot

## Important — what's real vs. stubbed

- **Chatbot**: fully client-side and rule-based against your portfolio data.
  No API key, no backend, and nothing to leak — it can't call OpenAI/Gemini
  as-is. If you want it to use a real LLM later, you'll need a backend route
  (e.g. a small Express or serverless function) that holds the API key and
  the chatbot calls that endpoint instead of `getBotResponse()`.
- **Contact form**: validates on the client, then opens the visitor's email
  client via a `mailto:` link pre-filled with their message. There's no
  server to receive submissions yet — this was a deliberate placeholder
  since standing up a backend/API route wasn't in scope here. To collect
  submissions properly, add a small API route (Express, or a form service
  like Formspree) and POST to it in `src/components/Contact.jsx`.
- **Resume download**: `personal.resumeUrl` in `portfolio.js` points to `#`
  — replace with a real link to your resume PDF (e.g. drop the file in
  `public/` and point to `/your-resume.pdf`).
- **Profile photo**: `About.jsx` shows a placeholder box — swap in a real
  image from `src/assets/`.
- **Project images**: each project's `image` field is `null` by default,
  showing a placeholder. Add screenshots to `src/assets/` and reference them.
- **og-image.png**: referenced in `index.html` for social previews but not
  included — add a real 1200x630 image at `public/og-image.png`.
- **Sitemap**: `public/sitemap.xml` has a placeholder domain — update once
  deployed.

## Design system

Tokens live at the top of `src/index.css` (`:root` and `[data-theme='light']`).
Dark mode is default; the toggle in the navbar persists choice to
localStorage and respects the visitor's OS preference on first visit.

## Structure

```
src/
  components/   UI components (Navbar, Hero, Projects, Chatbot, etc.)
  data/         portfolio.js (all content) + chatbotEngine.js (chatbot logic)
  hooks/        useTheme.js (dark/light mode)
  index.css     design tokens + all styles
  App.jsx       assembles all sections
```
