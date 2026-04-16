'use strict';

// ─── Translations ─────────────────────────────────────────────
const translations = {
  en: {
    correct: 'Well done! 🐧',
    wrong:   'Try again!',
    end:     'Hooray! You are amazing! 🐧',
    restart: 'Play again',
    counter: (c, t) => `${c} / ${t}`
  },
  pl: {
    correct: 'Brawo! 🐧',
    wrong:   'Spróbuj jeszcze raz!',
    end:     'Hurra! Jesteś wspaniała! 🐧',
    restart: 'Zagraj ponownie',
    counter: (c, t) => `${c} / ${t}`
  }
};

// ─── Questions (A–Z) ──────────────────────────────────────────
const allQuestions = [
  {
    letter: 'A',
    options: [
      { img: '🍎', label: { en: 'Apple',    pl: 'Jabłko'    }, correct: true  },
      { img: '🐶', label: { en: 'Dog',      pl: 'Pies'      }, correct: false },
      { img: '🌙', label: { en: 'Moon',     pl: 'Księżyc'   }, correct: false },
      { img: '🎈', label: { en: 'Balloon',  pl: 'Balon'     }, correct: false }
    ]
  },
  {
    letter: 'B',
    options: [
      { img: '🍌', label: { en: 'Banana',   pl: 'Banan'     }, correct: true  },
      { img: '🐱', label: { en: 'Cat',      pl: 'Kot'       }, correct: false },
      { img: '⭐',  label: { en: 'Star',     pl: 'Gwiazda'   }, correct: false },
      { img: '🌸', label: { en: 'Flower',   pl: 'Kwiat'     }, correct: false }
    ]
  },
  {
    letter: 'C',
    options: [
      { img: '🍰', label: { en: 'Cake',     pl: 'Ciasto'    }, correct: true  },
      { img: '🐸', label: { en: 'Frog',     pl: 'Żaba'      }, correct: false },
      { img: '🏠', label: { en: 'House',    pl: 'Dom'       }, correct: false },
      { img: '🌈', label: { en: 'Rainbow',  pl: 'Tęcza'     }, correct: false }
    ]
  },
  {
    letter: 'D',
    options: [
      { img: '🐬', label: { en: 'Dolphin',  pl: 'Delfin'    }, correct: true  },
      { img: '🦁', label: { en: 'Lion',     pl: 'Lew'       }, correct: false },
      { img: '🍇', label: { en: 'Grapes',   pl: 'Winogrona' }, correct: false },
      { img: '🚂', label: { en: 'Train',    pl: 'Pociąg'    }, correct: false }
    ]
  },
  {
    letter: 'E',
    options: [
      { img: '🐘', label: { en: 'Elephant', pl: 'Słoń'      }, correct: true  },
      { img: '🐧', label: { en: 'Penguin',  pl: 'Pingwin'   }, correct: false },
      { img: '🍓', label: { en: 'Strawberry', pl: 'Truskawka' }, correct: false },
      { img: '🚀', label: { en: 'Rocket',   pl: 'Rakieta'   }, correct: false }
    ]
  },
  {
    letter: 'F',
    options: [
      { img: '🚩', label: { en: 'Flag',     pl: 'Flaga'     }, correct: true  },
      { img: '🎈', label: { en: 'Balloon',  pl: 'Balon'     }, correct: false },
      { img: '🐘', label: { en: 'Elephant', pl: 'Słoń'      }, correct: false },
      { img: '🚗', label: { en: 'Car',      pl: 'Auto'      }, correct: false }
    ]
  },
  {
    letter: 'G',
    options: [
      { img: '🍇', label: { en: 'Grapes',   pl: 'Winogrona' }, correct: true  },
      { img: '🌙', label: { en: 'Moon',     pl: 'Księżyc'   }, correct: false },
      { img: '🐱', label: { en: 'Cat',      pl: 'Kot'       }, correct: false },
      { img: '🍌', label: { en: 'Banana',   pl: 'Banan'     }, correct: false }
    ]
  },
  {
    letter: 'H',
    options: [
      { img: '🎩', label: { en: 'Hat',      pl: 'Kapelusz'  }, correct: true  },
      { img: '🍎', label: { en: 'Apple',    pl: 'Jabłko'    }, correct: false },
      { img: '🐬', label: { en: 'Dolphin',  pl: 'Delfin'    }, correct: false },
      { img: '⭐',  label: { en: 'Star',     pl: 'Gwiazda'   }, correct: false }
    ]
  },
  {
    letter: 'I',
    options: [
      { img: '🍦', label: { en: 'Ice cream', pl: 'Lody'     }, correct: true  },
      { img: '🐸', label: { en: 'Frog',     pl: 'Żaba'      }, correct: false },
      { img: '🌸', label: { en: 'Flower',   pl: 'Kwiat'     }, correct: false },
      { img: '🚗', label: { en: 'Car',      pl: 'Auto'      }, correct: false }
    ]
  },
  {
    letter: 'J',
    options: [
      { img: '🐆', label: { en: 'Jaguar',   pl: 'Jaguar'    }, correct: true  },
      { img: '🍌', label: { en: 'Banana',   pl: 'Banan'     }, correct: false },
      { img: '🌙', label: { en: 'Moon',     pl: 'Księżyc'   }, correct: false },
      { img: '🌈', label: { en: 'Rainbow',  pl: 'Tęcza'     }, correct: false }
    ]
  },
  {
    letter: 'K',
    options: [
      { img: '👑', label: { en: 'King',     pl: 'Król'      }, correct: true  },
      { img: '🐸', label: { en: 'Frog',     pl: 'Żaba'      }, correct: false },
      { img: '🍦', label: { en: 'Ice cream', pl: 'Lody'     }, correct: false },
      { img: '🚂', label: { en: 'Train',    pl: 'Pociąg'    }, correct: false }
    ]
  },
  {
    letter: 'L',
    options: [
      { img: '🦁', label: { en: 'Lion',     pl: 'Lew'       }, correct: true  },
      { img: '🍎', label: { en: 'Apple',    pl: 'Jabłko'    }, correct: false },
      { img: '🚗', label: { en: 'Car',      pl: 'Auto'      }, correct: false },
      { img: '🎃', label: { en: 'Pumpkin',  pl: 'Dynia'     }, correct: false }
    ]
  },
  {
    letter: 'M',
    options: [
      { img: '🌙', label: { en: 'Moon',     pl: 'Księżyc'   }, correct: true  },
      { img: '🐬', label: { en: 'Dolphin',  pl: 'Delfin'    }, correct: false },
      { img: '🍰', label: { en: 'Cake',     pl: 'Ciasto'    }, correct: false },
      { img: '🌸', label: { en: 'Flower',   pl: 'Kwiat'     }, correct: false }
    ]
  },
  {
    letter: 'N',
    options: [
      { img: '🎵', label: { en: 'Note',     pl: 'Nuta'      }, correct: true  },
      { img: '🍎', label: { en: 'Apple',    pl: 'Jabłko'    }, correct: false },
      { img: '🐬', label: { en: 'Dolphin',  pl: 'Delfin'    }, correct: false },
      { img: '👑', label: { en: 'King',     pl: 'Król'      }, correct: false }
    ]
  },
  {
    letter: 'O',
    options: [
      { img: '🐙', label: { en: 'Octopus',  pl: 'Ośmiornica' }, correct: true  },
      { img: '🦁', label: { en: 'Lion',     pl: 'Lew'       }, correct: false },
      { img: '🎈', label: { en: 'Balloon',  pl: 'Balon'     }, correct: false },
      { img: '⭐',  label: { en: 'Star',     pl: 'Gwiazda'   }, correct: false }
    ]
  },
  {
    letter: 'P',
    options: [
      { img: '🐧', label: { en: 'Penguin',  pl: 'Pingwin'   }, correct: true  },
      { img: '🍎', label: { en: 'Apple',    pl: 'Jabłko'    }, correct: false },
      { img: '🌙', label: { en: 'Moon',     pl: 'Księżyc'   }, correct: false },
      { img: '🚗', label: { en: 'Car',      pl: 'Auto'      }, correct: false }
    ]
  },
  {
    letter: 'Q',
    options: [
      { img: '👸', label: { en: 'Queen',    pl: 'Królowa'   }, correct: true  },
      { img: '🐸', label: { en: 'Frog',     pl: 'Żaba'      }, correct: false },
      { img: '🍰', label: { en: 'Cake',     pl: 'Ciasto'    }, correct: false },
      { img: '🌈', label: { en: 'Rainbow',  pl: 'Tęcza'     }, correct: false }
    ]
  },
  {
    letter: 'R',
    options: [
      { img: '🚀', label: { en: 'Rocket',   pl: 'Rakieta'   }, correct: true  },
      { img: '🐧', label: { en: 'Penguin',  pl: 'Pingwin'   }, correct: false },
      { img: '🍌', label: { en: 'Banana',   pl: 'Banan'     }, correct: false },
      { img: '🎃', label: { en: 'Pumpkin',  pl: 'Dynia'     }, correct: false }
    ]
  },
  {
    letter: 'S',
    options: [
      { img: '☀️', label: { en: 'Sun',      pl: 'Słońce'    }, correct: true  },
      { img: '🐬', label: { en: 'Dolphin',  pl: 'Delfin'    }, correct: false },
      { img: '🍎', label: { en: 'Apple',    pl: 'Jabłko'    }, correct: false },
      { img: '🎩', label: { en: 'Hat',      pl: 'Kapelusz'  }, correct: false }
    ]
  },
  {
    letter: 'T',
    options: [
      { img: '🐯', label: { en: 'Tiger',    pl: 'Tygrys'    }, correct: true  },
      { img: '🌙', label: { en: 'Moon',     pl: 'Księżyc'   }, correct: false },
      { img: '🍌', label: { en: 'Banana',   pl: 'Banan'     }, correct: false },
      { img: '🌸', label: { en: 'Flower',   pl: 'Kwiat'     }, correct: false }
    ]
  },
  {
    letter: 'U',
    options: [
      { img: '☂️', label: { en: 'Umbrella', pl: 'Parasol'   }, correct: true  },
      { img: '🐱', label: { en: 'Cat',      pl: 'Kot'       }, correct: false },
      { img: '🦁', label: { en: 'Lion',     pl: 'Lew'       }, correct: false },
      { img: '🎈', label: { en: 'Balloon',  pl: 'Balon'     }, correct: false }
    ]
  },
  {
    letter: 'V',
    options: [
      { img: '🎻', label: { en: 'Violin',   pl: 'Skrzypce'  }, correct: true  },
      { img: '🐧', label: { en: 'Penguin',  pl: 'Pingwin'   }, correct: false },
      { img: '☀️', label: { en: 'Sun',      pl: 'Słońce'    }, correct: false },
      { img: '🍇', label: { en: 'Grapes',   pl: 'Winogrona' }, correct: false }
    ]
  },
  {
    letter: 'W',
    options: [
      { img: '🐺', label: { en: 'Wolf',     pl: 'Wilk'      }, correct: true  },
      { img: '🌈', label: { en: 'Rainbow',  pl: 'Tęcza'     }, correct: false },
      { img: '🍦', label: { en: 'Ice cream', pl: 'Lody'     }, correct: false },
      { img: '🎵', label: { en: 'Note',     pl: 'Nuta'      }, correct: false }
    ]
  },
  {
    letter: 'X',
    options: [
      { img: '🩻', label: { en: 'X-ray',    pl: 'Rentgen'   }, correct: true  },
      { img: '🐧', label: { en: 'Penguin',  pl: 'Pingwin'   }, correct: false },
      { img: '🍌', label: { en: 'Banana',   pl: 'Banan'     }, correct: false },
      { img: '🌙', label: { en: 'Moon',     pl: 'Księżyc'   }, correct: false }
    ]
  },
  {
    letter: 'Y',
    options: [
      { img: '🧶', label: { en: 'Yarn',     pl: 'Włóczka'   }, correct: true  },
      { img: '🐯', label: { en: 'Tiger',    pl: 'Tygrys'    }, correct: false },
      { img: '☀️', label: { en: 'Sun',      pl: 'Słońce'    }, correct: false },
      { img: '🎃', label: { en: 'Pumpkin',  pl: 'Dynia'     }, correct: false }
    ]
  },
  {
    letter: 'Z',
    options: [
      { img: '🦓', label: { en: 'Zebra',    pl: 'Zebra'     }, correct: true  },
      { img: '🍎', label: { en: 'Apple',    pl: 'Jabłko'    }, correct: false },
      { img: '🐬', label: { en: 'Dolphin',  pl: 'Delfin'    }, correct: false },
      { img: '🌸', label: { en: 'Flower',   pl: 'Kwiat'     }, correct: false }
    ]
  }
];

// ─── State ────────────────────────────────────────────────────
let currentLang          = 'pl';
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
    utt.lang = currentLang === 'pl' ? 'pl-PL' : 'en-US';
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
  const t = translations[currentLang];

  // Counter
  document.getElementById('counter').textContent =
    t.counter(currentQuestionIndex + 1, 10);

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
      <span class="option-label">${option.label[currentLang]}</span>
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

  const t  = translations[currentLang];
  const fb = document.getElementById('feedback');

  // Disable all buttons to prevent double-tap
  document.querySelectorAll('.option-btn').forEach(btn => { btn.disabled = true; });

  if (option.correct) {
    el.classList.add('correct');
    fb.textContent = t.correct;
    fb.className = 'feedback feedback-correct';
    speakClean(t.correct);
    setTimeout(nextQuestion, 800);
  } else {
    el.classList.add('wrong');
    fb.textContent = t.wrong;
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
  const t = translations[currentLang];
  document.getElementById('end-message').textContent = t.end;
  document.getElementById('restart-btn').textContent = t.restart;
  document.getElementById('end-modal').classList.remove('hidden');
  speakClean(t.end);
}

function restartGame() {
  document.getElementById('end-modal').classList.add('hidden');
  startSession();
  loadQuestion();
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('lang-btn').textContent = lang === 'pl' ? 'EN' : 'PL';

  const modal = document.getElementById('end-modal');
  if (!modal.classList.contains('hidden')) {
    // Update end screen texts without restarting
    const t = translations[lang];
    document.getElementById('end-message').textContent = t.end;
    document.getElementById('restart-btn').textContent = t.restart;
  } else {
    loadQuestion();
  }
}

// ─── Event listeners ──────────────────────────────────────────
document.getElementById('lang-btn').addEventListener('click', () => {
  setLanguage(currentLang === 'pl' ? 'en' : 'pl');
});

document.getElementById('restart-btn').addEventListener('click', restartGame);

// ─── Init ─────────────────────────────────────────────────────
startSession();
loadQuestion();
