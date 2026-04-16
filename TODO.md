# TODO – Alfabet Game

Task list for the Claude Code agent. Work through phases in order.
Mark tasks as done by changing `[ ]` to `[x]`.

---

## Phase 1 – Project Scaffolding

- [ ] Create `.github/workflows/deploy.yml` – GitHub Actions auto-deploy to GitHub Pages (copy workflow from CLAUDE.md)
- [ ] Create `index.html` – minimal HTML5 boilerplate, link `style.css` and `script.js`
- [ ] Create `style.css` – empty file with section comments as placeholders
- [ ] Create `script.js` – empty file with section comments as placeholders
- [ ] Create `assets/images/` – empty directory with `.gitkeep`
- [ ] Create `assets/sounds/` – empty directory with `.gitkeep`
- [ ] Verify: opening `index.html` in a browser shows a blank page with no console errors

---

## Phase 2 – Questions Dataset

- [ ] Add `questions` array in `script.js` covering letters A–Z (26 entries)
- [ ] Each question: `letter`, `options` (3–4 items), each option: `img` (emoji), `label: { en, pl }`, `correct: boolean`
- [ ] Exactly one option per question has `correct: true`
- [ ] All labels provided in both EN and PL
- [ ] Verify: `questions.length === 26` and every item passes a manual spot-check

---

## Phase 3 – Core Game Logic

- [ ] Add state variables: `currentQuestionIndex`, `score`, `currentLang` (default `"pl"`)
- [ ] Implement `loadQuestion()` – render letter + options grid to DOM
- [ ] Implement `checkAnswer(option)` – correct: show feedback + call `nextQuestion()` after 800ms; wrong: show retry message, do not advance
- [ ] Implement `nextQuestion()` – increment index, call `loadQuestion()` or `endGame()` at 10 correct answers
- [ ] Implement `endGame()` – show reward modal
- [ ] Implement `restartGame()` – reset `currentQuestionIndex` and `score`, hide modal, call `loadQuestion()`
- [ ] Verify: full game flow works end-to-end (start → 10 questions → end screen → restart)

---

## Phase 4 – Bilingual Support

- [ ] Add `translations` object in `script.js` with keys for `en` and `pl` (strings: `correct`, `wrong`, `end`, `restart`, `counter`)
- [ ] Apply translations in `loadQuestion()`, `checkAnswer()`, `endGame()`
- [ ] Add language toggle button (`EN / PL`) to `index.html`
- [ ] Implement `setLanguage(lang)` – update `currentLang`, re-render current question and all translated strings
- [ ] Verify: switching language mid-game updates all visible text without resetting progress

---

## Phase 5 – UI Layout (Mobile-First, Penguin Theme)

- [ ] `index.html`: add header with question counter, penguin mascot icon (🐧), and language toggle
- [ ] `index.html`: add main area – large letter display + options grid + feedback message
- [ ] `index.html`: add end-screen modal – hidden by default, contains large penguin (🐧 or `assets/images/penguin.gif`), reward message, restart button
- [ ] `style.css`: base reset (`box-sizing`, `margin`, `padding`, font)
- [ ] `style.css`: penguin color palette – background `#87CEEB` (sky blue) or `#E8F4FD`, accent `#4A90D9`, white cards, dark navy text
- [ ] `style.css`: friendly rounded font – `ui-rounded` system font stack or Nunito (inline Google Fonts link)
- [ ] `style.css`: layout – full-viewport, no scroll, flex/grid columns
- [ ] `style.css`: letter display – centered, ≥ 5rem font size, prominent color
- [ ] `style.css`: options grid – 2×2 layout, each cell ≥ 64×64px tap target
- [ ] `style.css`: feedback message – distinct colors for correct (green) and wrong (orange/red)
- [ ] `style.css`: end-screen modal – full-screen overlay with ice-blue gradient, centered content, z-index above game
- [ ] `style.css`: language toggle button – top-right corner, always visible
- [ ] Verify: layout fits 375px viewport width with no horizontal scroll

---

## Phase 6 – Feedback & Animations

- [ ] Correct answer: briefly highlight the chosen option (e.g. green border flash)
- [ ] Wrong answer: briefly shake or highlight the chosen option (e.g. red border flash)
- [ ] Add CSS transition/animation for question change (e.g. fade-in)
- [ ] End-screen modal: CSS fade-in or scale-in animation on appear
- [ ] Verify: animations do not block tap interaction or cause layout shift

---

## Phase 7 – Sound

- [ ] Implement `speak(text, lang)` using `SpeechSynthesis API` – speak feedback messages in the active language
- [ ] Call `speak()` on correct answer (e.g. "Brawo!" or "Well done!")
- [ ] Call `speak()` on end screen (e.g. "Hurra!" or "Hooray!")
- [ ] Wrap all `SpeechSynthesis` calls in try/catch – failure must not break the game
- [ ] Verify: speech works in Safari on iOS (note: requires user gesture to unlock audio context)

---

## Phase 8 – End Screen Polish

- [ ] Display large penguin as hero element: 🐧 emoji (≥ 5rem) or `assets/images/penguin.gif` if the file exists
- [ ] End-screen message includes penguin emoji (e.g. "Hurra! 🐧" / "Hooray! 🐧") and uses active language translation
- [ ] End-screen background uses ice-blue gradient matching the penguin theme
- [ ] Restart button resets and starts a new game without page reload
- [ ] Verify: end screen displays correctly on iPhone screen (no overflow, no scroll needed)

---

## Phase 9 – QA & Cross-Check

- [ ] Open `index.html` locally – no console errors or warnings
- [ ] Play through a full game in EN – all 10 questions, end screen, restart
- [ ] Play through a full game in PL – all 10 questions, end screen, restart
- [ ] Switch language mid-game – verify no state reset and correct text update
- [ ] Test wrong answers – verify question does not advance
- [ ] Test on 375px viewport (iPhone SE) – no scroll, no overflow
- [ ] Test on 390px viewport (iPhone 14) – no scroll, no overflow
- [ ] Verify: no `var` usage, no external dependencies in source files
- [ ] Verify: `deploy.yml` syntax is valid YAML

---

## Phase 10 – Deployment

- [ ] Commit all files to `main` branch with a clear commit message
- [ ] Push to `origin/main`
- [ ] Confirm GitHub Actions workflow runs successfully (green check)
- [ ] Open the live GitHub Pages URL and verify the game loads
- [ ] Verify: "Add to Home Screen" on iOS shows the app without browser chrome (optional: add `<meta name="apple-mobile-web-app-capable" content="yes">`)

---

## Backlog (Future – Do Not Implement Now)

- [ ] Randomize question order each session
- [ ] Expand question dataset beyond A–Z (multiple words per letter)
- [ ] Replace emoji with real photographs
- [ ] Star/reward system after each correct answer
- [ ] Save progress to `localStorage`
- [ ] PWA support: `manifest.json` + Service Worker for offline play
- [ ] Letter pronunciation via `SpeechSynthesis` on question load
