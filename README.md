# Alfabet – Educational Alphabet Game

An interactive browser-based quiz game that helps children (around 5 years old) learn the alphabet. Designed for mobile use on iPhone/Safari, deployable via GitHub Pages.

The application is bilingual: **English (EN)** and **Polish (PL)**.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Game Mechanics](#game-mechanics)
- [Data Structure](#data-structure)
- [Application Logic](#application-logic)
- [File Structure](#file-structure)
- [UI/UX Design Principles](#uiux-design-principles)
- [Feedback System](#feedback-system)
- [End Screen](#end-screen)
- [Sound](#sound)
- [Deployment](#deployment)
- [Future Extensions](#future-extensions)

---

## Demo

Hosted on GitHub Pages:
`https://<your-username>.github.io/alfabet/`

Optionally installable on iOS via "Add to Home Screen" for a PWA-like experience.

---

## Features

- 10-question quiz session per game
- Each question displays a letter and 3–4 image/emoji options
- Positive feedback for correct answers, retry prompt for wrong ones
- Animated reward screen on game completion
- Bilingual support: English and Polish
- No dependencies, no build tools required
- Mobile-first layout optimized for iPhone/Safari

---

## Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling, animations, mobile layout |
| Vanilla JavaScript | Game logic, DOM manipulation |

**Why Vanilla JS?**

- Small, self-contained application
- No complex state management needed
- No backend required
- Simple deployment to GitHub Pages
- No build tools (Webpack, Vite) needed

**Not recommended for this project:**
- React, Vue, Angular – too heavy for the current scope

**Optional future additions:**
- Alpine.js (lightweight reactivity)
- Web Components (browser standard)

---

## Game Mechanics

- **Session length:** 10 questions
- **Each question:**
  - Displays a letter (e.g. `A`)
  - Shows 3–4 answer options (images or emojis)
  - One correct answer: a word starting with that letter

### Game Flow

1. Game starts
2. A question is displayed
3. The user taps an answer
4. System checks the answer:
   - **Correct** → positive feedback, advance to next question
   - **Incorrect** → retry prompt, question stays
5. After 10 correct answers → end screen with reward

---

## Data Structure

Questions are stored as a JavaScript array. Each element is an object with the following shape:

```js
{
  letter: "A",
  options: [
    { img: "🍎", label: "Apple",  correct: true  },
    { img: "🐶", label: "Dog",    correct: false },
    { img: "🚗", label: "Car",    correct: false },
    { img: "🎈", label: "Balloon",correct: false }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `letter` | `string` | The letter being tested |
| `options` | `array` | List of answer options |
| `options[].img` | `string` | Image URL or emoji |
| `options[].label` | `string` | Word label shown under the image |
| `options[].correct` | `boolean` | Whether this option is the correct answer |

---

## Application Logic

### State Variables

| Variable | Description |
|---|---|
| `currentQuestionIndex` | Index of the currently displayed question |
| `score` | Number of correct answers in the session |
| `questions` | Array of question objects |

### Core Functions

| Function | Description |
|---|---|
| `loadQuestion()` | Renders the current question to the DOM |
| `checkAnswer(option)` | Validates the selected answer and triggers feedback |
| `nextQuestion()` | Advances to the next question |
| `endGame()` | Displays the end screen and reward |
| `restartGame()` | Resets state and restarts the quiz |

---

## File Structure

### Minimal

```
alfabet/
├── index.html
├── style.css
└── script.js
```

### Extended

```
alfabet/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── images/
    └── sounds/
```

---

## UI/UX Design Principles

Designed for children around 5 years old on mobile devices.

| Principle | Implementation |
|---|---|
| Mobile-first | Layout fits iPhone screen, no scrolling |
| Large tap targets | Big buttons and images, easy to tap |
| Minimal text | Visual-first interface |
| Clear typography | Large, readable fonts |
| Fast response | Immediate feedback on every interaction |
| No frustration | No penalties for wrong answers |

### UI Elements

- Large centered letter display
- Image grid (3–4 options)
- Question counter (e.g. `3 / 10`)
- Feedback message area

---

## Feedback System

| Outcome | Feedback |
|---|---|
| Correct answer | Message: "Brawo!" / "Well done!" + optional sound |
| Wrong answer | Message: "Spróbuj jeszcze raz" / "Try again" |

- No negative penalties
- Encourages repeated attempts

---

## End Screen

Displayed after 10 correct answers:

- Modal / popup overlay
- Animated penguin (GIF or image)
- Message: "Hurra!" / "Hooray!"
- Sound via `SpeechSynthesis API` or `<audio>` element
- Restart button

---

## Sound

Two approaches are supported:

| Approach | Use Case |
|---|---|
| `HTMLAudioElement` | Play `.mp3` files for reactions |
| `SpeechSynthesis API` | Text-to-speech for letter pronunciation |

**Planned uses:**
- Correct answer reaction ("Brawo!")
- Optional letter pronunciation on question display

---

## Deployment

1. Push code to a GitHub repository
2. Enable GitHub Pages (Settings → Pages → branch: `main`, folder: `/root`)
3. Access via: `https://<your-username>.github.io/alfabet/`
4. On iOS: tap Share → "Add to Home Screen" for app-like experience

---

## Future Extensions

- [ ] Randomized question order
- [ ] Larger word/image database
- [ ] Real photographs instead of emoji
- [ ] Reward system (stars, animations)
- [ ] Progress saving with `localStorage`
- [ ] Offline mode (PWA + Service Worker)
- [ ] Additional languages
