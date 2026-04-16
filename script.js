'use strict';

// ─── Translations ─────────────────────────────────────────────
const translations = {
  correct: 'Brawo! 🐧',
  wrong:   'Spróbuj jeszcze raz!',
  end:     'Hurra! Jesteś wspaniała! 🐧',
  restart: 'Zagraj ponownie',
  counter: (c, t) => `${c} / ${t}`
};

// ─── Questions (A–Ż) ──────────────────────────────────────────
const allQuestions = [
  {
    letter: 'A',
    options: [
      { img: '🐊', label: 'Aligator', correct: true  },
      { img: '🐶', label: 'Pies',     correct: false },
      { img: '🌙', label: 'Księżyc',  correct: false },
      { img: '🎈', label: 'Balon',    correct: false }
    ]
  },
  {
    letter: 'B',
    options: [
      { img: '🍌', label: 'Banan',   correct: true  },
      { img: '🐱', label: 'Kot',     correct: false },
      { img: '⭐',  label: 'Gwiazda', correct: false },
      { img: '🌸', label: 'Kwiat',   correct: false }
    ]
  },
  {
    letter: 'C',
    options: [
      { img: '🍰', label: 'Ciasto', correct: true  },
      { img: '🐸', label: 'Żaba',   correct: false },
      { img: '🏠', label: 'Dom',    correct: false },
      { img: '🌈', label: 'Tęcza',  correct: false }
    ]
  },
  {
    letter: 'D',
    options: [
      { img: '🐬', label: 'Delfin',    correct: true  },
      { img: '🦁', label: 'Lew',       correct: false },
      { img: '🍇', label: 'Winogrona', correct: false },
      { img: '🚂', label: 'Pociąg',    correct: false }
    ]
  },
  {
    letter: 'E',
    options: [
      { img: '🧝', label: 'Elf',       correct: true  },
      { img: '🐧', label: 'Pingwin',   correct: false },
      { img: '🍓', label: 'Truskawka', correct: false },
      { img: '🚀', label: 'Rakieta',   correct: false }
    ]
  },
  {
    letter: 'F',
    options: [
      { img: '🚩', label: 'Flaga', correct: true  },
      { img: '🎈', label: 'Balon', correct: false },
      { img: '🐘', label: 'Słoń',  correct: false },
      { img: '🚗', label: 'Auto',  correct: false }
    ]
  },
  {
    letter: 'G',
    options: [
      { img: '🎸', label: 'Gitara',  correct: true  },
      { img: '🌙', label: 'Księżyc', correct: false },
      { img: '🐱', label: 'Kot',     correct: false },
      { img: '🍌', label: 'Banan',   correct: false }
    ]
  },
  {
    letter: 'H',
    options: [
      { img: '🦛', label: 'Hipopotam', correct: true  },
      { img: '🍎', label: 'Jabłko',    correct: false },
      { img: '🐬', label: 'Delfin',    correct: false },
      { img: '⭐',  label: 'Gwiazda',   correct: false }
    ]
  },
  {
    letter: 'I',
    options: [
      { img: '🦎', label: 'Iguana', correct: true  },
      { img: '🐸', label: 'Żaba',   correct: false },
      { img: '🌸', label: 'Kwiat',  correct: false },
      { img: '🚗', label: 'Auto',   correct: false }
    ]
  },
  {
    letter: 'J',
    options: [
      { img: '🐆', label: 'Jaguar',  correct: true  },
      { img: '🍌', label: 'Banan',   correct: false },
      { img: '🌙', label: 'Księżyc', correct: false },
      { img: '🌈', label: 'Tęcza',   correct: false }
    ]
  },
  {
    letter: 'K',
    options: [
      { img: '👑', label: 'Król',   correct: true  },
      { img: '🐸', label: 'Żaba',   correct: false },
      { img: '🍦', label: 'Lody',   correct: false },
      { img: '🚂', label: 'Pociąg', correct: false }
    ]
  },
  {
    letter: 'L',
    options: [
      { img: '🦁', label: 'Lew',    correct: true  },
      { img: '🍎', label: 'Jabłko', correct: false },
      { img: '🚗', label: 'Auto',   correct: false },
      { img: '🎃', label: 'Dynia',  correct: false }
    ]
  },
  {
    letter: 'Ł',
    options: [
      { img: '🦢', label: 'Łabędź', correct: true  },
      { img: '🐸', label: 'Żaba',   correct: false },
      { img: '🍰', label: 'Ciasto', correct: false },
      { img: '🌈', label: 'Tęcza',  correct: false }
    ]
  },
  {
    letter: 'M',
    options: [
      { img: '🐒', label: 'Małpa',  correct: true  },
      { img: '🐬', label: 'Delfin', correct: false },
      { img: '🍰', label: 'Ciasto', correct: false },
      { img: '🌸', label: 'Kwiat',  correct: false }
    ]
  },
  {
    letter: 'N',
    options: [
      { img: '🎵', label: 'Nuta',   correct: true  },
      { img: '🍎', label: 'Jabłko', correct: false },
      { img: '🐬', label: 'Delfin', correct: false },
      { img: '👑', label: 'Król',   correct: false }
    ]
  },
  {
    letter: 'O',
    options: [
      { img: '🐙', label: 'Ośmiornica', correct: true  },
      { img: '🦁', label: 'Lew',        correct: false },
      { img: '🎈', label: 'Balon',      correct: false },
      { img: '⭐',  label: 'Gwiazda',    correct: false }
    ]
  },
  {
    letter: 'P',
    options: [
      { img: '🐧', label: 'Pingwin', correct: true  },
      { img: '🍎', label: 'Jabłko',  correct: false },
      { img: '🌙', label: 'Księżyc', correct: false },
      { img: '🚗', label: 'Auto',    correct: false }
    ]
  },
  {
    letter: 'R',
    options: [
      { img: '🚀', label: 'Rakieta', correct: true  },
      { img: '🐧', label: 'Pingwin', correct: false },
      { img: '🍌', label: 'Banan',   correct: false },
      { img: '🎃', label: 'Dynia',   correct: false }
    ]
  },
  {
    letter: 'S',
    options: [
      { img: '☀️', label: 'Słońce',   correct: true  },
      { img: '🐬', label: 'Delfin',   correct: false },
      { img: '🍎', label: 'Jabłko',   correct: false },
      { img: '🎩', label: 'Kapelusz', correct: false }
    ]
  },
  {
    letter: 'T',
    options: [
      { img: '🐯', label: 'Tygrys',  correct: true  },
      { img: '🌙', label: 'Księżyc', correct: false },
      { img: '🍌', label: 'Banan',   correct: false },
      { img: '🌸', label: 'Kwiat',   correct: false }
    ]
  },
  {
    letter: 'U',
    options: [
      { img: '🛸', label: 'UFO',   correct: true  },
      { img: '🐱', label: 'Kot',   correct: false },
      { img: '🦁', label: 'Lew',   correct: false },
      { img: '🎈', label: 'Balon', correct: false }
    ]
  },
  {
    letter: 'V',
    options: [
      { img: '🎻', label: 'Viola',     correct: true  },
      { img: '🐧', label: 'Pingwin',   correct: false },
      { img: '☀️', label: 'Słońce',    correct: false },
      { img: '🍇', label: 'Winogrona', correct: false }
    ]
  },
  {
    letter: 'W',
    options: [
      { img: '🐺', label: 'Wilk',  correct: true  },
      { img: '🌈', label: 'Tęcza', correct: false },
      { img: '🍦', label: 'Lody',  correct: false },
      { img: '🎵', label: 'Nuta',  correct: false }
    ]
  },
  {
    letter: 'Y',
    options: [
      { img: '🪀', label: 'Yo-yo',  correct: true  },
      { img: '🐯', label: 'Tygrys', correct: false },
      { img: '☀️', label: 'Słońce', correct: false },
      { img: '🎃', label: 'Dynia',  correct: false }
    ]
  },
  {
    letter: 'Z',
    options: [
      { img: '🦓', label: 'Zebra',  correct: true  },
      { img: '🍎', label: 'Jabłko', correct: false },
      { img: '🐬', label: 'Delfin', correct: false },
      { img: '🌸', label: 'Kwiat',  correct: false }
    ]
  },
  {
    letter: 'Ż',
    options: [
      { img: '🦒', label: 'Żyrafa',  correct: true  },
      { img: '🐧', label: 'Pingwin', correct: false },
      { img: '🍌', label: 'Banan',   correct: false },
      { img: '🌙', label: 'Księżyc', correct: false }
    ]
  }
];

// ─── State ────────────────────────────────────────────────────
let currentQuestionIndex = 0;
let sessionQuestions     = [];
let isAnswering          = false;

// ─── Helpers ──────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function speak(text) {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'pl-PL';
    window.speechSynthesis.speak(utt);
  } catch (_) {
    // audio failure must not break the game
  }
}

// Strip emoji before speaking
function speakClean(text) {
  speak(text.replace(/\p{Emoji}/gu, '').trim());
}

// ─── Core game functions ───────────────────────────────────────
function startSession() {
  sessionQuestions = shuffle(allQuestions)
    .slice(0, 10)
    .map(q => ({ ...q, options: shuffle(q.options) }));
  currentQuestionIndex = 0;
}

function loadQuestion() {
  isAnswering = false;
  const q = sessionQuestions[currentQuestionIndex];

  // Counter
  document.getElementById('counter').textContent =
    translations.counter(currentQuestionIndex + 1, 10);

  // Letter with fade-in animation
  const letterEl = document.getElementById('letter-display');
  letterEl.textContent = q.letter;
  letterEl.classList.remove('fade-in');
  void letterEl.offsetWidth; // trigger reflow to restart animation
  letterEl.classList.add('fade-in');

  // Options grid
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-img">${option.img}</span>
      <span class="option-label">${option.label}</span>
    `;
    btn.addEventListener('click', () => checkAnswer(option, btn));
    grid.appendChild(btn);
  });

  // Clear feedback
  const fb = document.getElementById('feedback');
  fb.textContent = '';
  fb.className = 'feedback';
}

function checkAnswer(option, el) {
  if (isAnswering) return;
  isAnswering = true;

  const fb = document.getElementById('feedback');

  // Disable all buttons to prevent double-tap
  document.querySelectorAll('.option-btn').forEach(btn => { btn.disabled = true; });

  if (option.correct) {
    el.classList.add('correct');
    fb.textContent = translations.correct;
    fb.className = 'feedback feedback-correct';
    speakClean(translations.correct);
    setTimeout(nextQuestion, 800);
  } else {
    el.classList.add('wrong');
    fb.textContent = translations.wrong;
    fb.className = 'feedback feedback-wrong';
    setTimeout(() => {
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('wrong');
      });
      fb.textContent = '';
      fb.className = 'feedback';
      isAnswering = false;
    }, 700);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= 10) {
    endGame();
  } else {
    loadQuestion();
  }
}

function endGame() {
  document.getElementById('end-message').textContent = translations.end;
  document.getElementById('restart-btn').textContent = translations.restart;
  document.getElementById('end-modal').classList.remove('hidden');
  speakClean(translations.end);
}

function restartGame() {
  document.getElementById('end-modal').classList.add('hidden');
  startSession();
  loadQuestion();
}

// ─── Event listeners ──────────────────────────────────────────
document.getElementById('restart-btn').addEventListener('click', restartGame);

// ─── Init ─────────────────────────────────────────────────────
startSession();
loadQuestion();
