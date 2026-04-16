# CLAUDE.md – Agent Instructions for Alfabet

This file provides instructions for the Claude Code agent working on this repository.

---

## Project Overview

**Alfabet** is a bilingual (EN/PL) educational quiz game for children (~5 years old) learning the alphabet. It runs entirely in the browser with no backend and is hosted on GitHub Pages.

---

## Non-Negotiable Constraints

- **No frameworks.** Do not introduce React, Vue, Angular, Svelte, or any component library.
- **No build tools.** Do not add Webpack, Vite, Parcel, Rollup, esbuild, or any bundler.
- **No package manager dependencies.** Do not create `package.json`, `node_modules`, or install npm/yarn packages.
- **No TypeScript compilation step.** Plain `.js` files only.
- **No CDN imports** for heavy libraries. Lightweight utilities (e.g. a single emoji font link) are acceptable if truly needed.

The app must open correctly by double-clicking `index.html` in a browser with no build step required.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript (ES6+) |
| Hosting | GitHub Pages |

---

## File Structure

Keep the structure flat and minimal:

```
alfabet/
├── index.html        # Single HTML entry point
├── style.css         # All styles
├── script.js         # All game logic
├── assets/
│   ├── images/       # Optional: real images (PNG/JPG/WebP/GIF)
│   └── sounds/       # Optional: .mp3 audio files
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions – auto-deploy to GitHub Pages
├── CLAUDE.md
└── README.md
```

Do not create additional `.js` files unless there is a strong reason (e.g. separating a large questions dataset into `questions.js`). Justify any additions.

---

## Bilingual Support (EN / PL)

The app must support two languages: English (`en`) and Polish (`pl`).

- Store all UI strings in a `translations` object inside `script.js`:

```js
const translations = {
  en: {
    correct: "Well done!",
    wrong: "Try again!",
    end: "Hooray!",
    restart: "Play again",
    counter: (current, total) => `${current} / ${total}`
  },
  pl: {
    correct: "Brawo!",
    wrong: "Spróbuj jeszcze raz!",
    end: "Hurra!",
    restart: "Zagraj ponownie",
    counter: (current, total) => `${current} / ${total}`
  }
};
```

- Default language: Polish (`pl`).
- Language toggle: a simple `EN / PL` button in the UI.
- Do not use external i18n libraries.

---

## Game Logic Rules

- Session: exactly 10 questions.
- Each question: one letter + 3–4 answer options (emoji or image + label).
- One option per question has `correct: true`.
- Correct answer: show positive feedback, advance after a short delay (~800ms).
- Wrong answer: show retry message, do NOT advance.
- No score penalty for wrong answers.
- After 10 correct answers: show end screen.

### Required Functions

Implement these functions in `script.js`:

| Function | Responsibility |
|---|---|
| `loadQuestion()` | Render current question to DOM |
| `checkAnswer(option)` | Validate answer, trigger feedback |
| `nextQuestion()` | Advance `currentQuestionIndex`, call `loadQuestion` or `endGame` |
| `endGame()` | Show reward modal |
| `restartGame()` | Reset state, hide modal, call `loadQuestion` |

### State Variables

```js
let currentQuestionIndex = 0;
let score = 0;
const questions = [...]; // array of question objects
```

---

## Data Format

Each question object:

```js
{
  letter: "A",
  options: [
    { img: "🍎", label: { en: "Apple", pl: "Jabłko" }, correct: true },
    { img: "🐶", label: { en: "Dog",   pl: "Pies"   }, correct: false },
    { img: "🚗", label: { en: "Car",   pl: "Auto"   }, correct: false },
    { img: "🎈", label: { en: "Balloon", pl: "Balon" }, correct: false }
  ]
}
```

Labels must be provided in both languages.

---

## UI/UX Requirements

- **Mobile-first.** Target: iPhone, Safari. No horizontal scroll. No vertical scroll during gameplay.
- **Tap targets:** minimum 64×64px for all interactive elements.
- **Font size:** letter display ≥ 5rem; option labels ≥ 1.2rem.
- **No tiny close buttons, no hover-only interactions.**
- Question counter visible at all times (e.g. `3 / 10`).
- Feedback message visible immediately after tap.

---

## End Screen

- Full-screen modal overlay (not a new page).
- Contains: animated image (penguin GIF or emoji), reward message, restart button.
- Sound: use `SpeechSynthesis API` to speak the reward message, or play an `.mp3` via `HTMLAudioElement`.
- Do not navigate away from `index.html`.

---

## Sound Guidelines

- Use `SpeechSynthesis API` for spoken feedback (no assets needed, works offline).
- Use `HTMLAudioElement` only if `.mp3` files are present in `assets/sounds/`.
- Never block UI interaction waiting for audio.
- All audio calls must be wrapped in try/catch – audio failure must not break the game.

---

## GitHub Pages – Automatic Deployment

The repository uses GitHub Actions to deploy automatically on every push to `main`.

Workflow file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Important:** GitHub Pages must be configured in the repository settings to use the `github-actions` source (not the legacy branch source). The agent does not need to change this workflow unless there is a bug in it.

---

## Coding Style

- Use `const` and `let`, never `var`.
- Use arrow functions for callbacks.
- Use template literals for HTML generation.
- Keep functions short and single-purpose.
- Add comments only where logic is non-obvious.
- Do not add JSDoc or type annotations – this is not a TypeScript project.
- Avoid `innerHTML` on user-controlled data. Since all content is hardcoded in the questions array, `innerHTML` is acceptable for rendering question cards.

---

## What the Agent Should NOT Do

- Do not install any packages or create `package.json`.
- Do not introduce a bundler or transpiler.
- Do not split logic across more than 3 files without a clear reason.
- Do not add a backend, API calls, or server-side code.
- Do not store sensitive data – there is none in this project.
- Do not modify `.github/workflows/deploy.yml` unless it is broken.
- Do not create additional workflow files without being asked.
- Do not refactor working code unless asked.
- Do not add features beyond what is requested in the current task.

---

## Checklist Before Committing

- [ ] `index.html` opens in a browser without a build step
- [ ] Game works end-to-end: start → 10 questions → end screen → restart
- [ ] Both EN and PL languages display correctly
- [ ] Layout fits an iPhone screen (375px wide) without horizontal scroll
- [ ] No `console.error` or uncaught exceptions during normal play
- [ ] No external dependencies added
