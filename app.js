const DATA_URL = "data/words.json";

let allCards = [];
let cards = [];
let baseSessionCards = [];
let sessionAnswers = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let answerVisible = false;
let isChangingCard = false;
let stats = {};

let isNewWordsMode = false;
let newWordsPool = [];
let newWordsActiveCount = 1;
let newWordsRoundResults = {};
let allNewWordsIntroduced = false;

let sessionStartTime = null;
let elapsedBeforePause = 0;
let timerIntervalId = null;
let isTimeVisible = false;

const STORAGE_KEY = "flashcardsSuecoStats";
const THEME_STORAGE_KEY = "flashcardsSuecoTheme";

const firstRoundOrderSelect = document.querySelector("#firstRoundOrderSelect");

const newWordsToggleButton = document.querySelector("#newWordsToggleButton");
const newWordsModeInfo = document.querySelector("#newWordsModeInfo");
const newWordsOrderLabel = document.querySelector("#newWordsOrderLabel");
const newWordsOrderSelect = document.querySelector("#newWordsOrderSelect");

const summaryScreen = document.querySelector("#summaryScreen");

const themeToggleButton = document.querySelector("#themeToggleButton");

const timeButton = document.querySelector("#timeButton");
const timeBox = document.querySelector("#timeBox");
const studyTimeText = document.querySelector("#studyTimeText");
const summaryTime = document.querySelector("#summaryTime");

const finishSessionButton = document.querySelector("#finishSessionButton");
const repeatSessionButton = document.querySelector("#repeatSessionButton");
const newSessionButton = document.querySelector("#newSessionButton");

const summaryTotal = document.querySelector("#summaryTotal");
const summaryCorrect = document.querySelector("#summaryCorrect");
const summaryWrong = document.querySelector("#summaryWrong");
const summaryCorrectRate = document.querySelector("#summaryCorrectRate");
const summaryWrongList = document.querySelector("#summaryWrongList");

const setupScreen = document.querySelector("#setupScreen");
const studyScreen = document.querySelector("#studyScreen");

const typeFilter = document.querySelector("#typeFilter");
const themeFilter = document.querySelector("#themeFilter");
const chapterFilter = document.querySelector("#chapterFilter");

const startSessionButton = document.querySelector("#startSessionButton");
const backToSetupButton = document.querySelector("#backToSetupButton");
const setupMessage = document.querySelector("#setupMessage");

const questionLabel = document.querySelector("#questionLabel");
const performanceButton = document.querySelector("#performanceButton");
const performanceBox = document.querySelector("#performanceBox");
const correctPercent = document.querySelector("#correctPercent");
const wrongPercent = document.querySelector("#wrongPercent");

const directionSelect = document.querySelector("#directionSelect");
const answerModeSelect = document.querySelector("#answerModeSelect");
const answerModeLabel = document.querySelector("#answerModeLabel");

const answerLabel = document.querySelector("#answerLabel");
const backHint = document.querySelector("#backHint");

const writeBox = document.querySelector("#writeBox");
const answerInput = document.querySelector("#answerInput");
const checkAnswerButton = document.querySelector("#checkAnswerButton");
const writeResultBox = document.querySelector("#writeResultBox");
const userAnswerText = document.querySelector("#userAnswerText");

const cardImageWrap = document.querySelector("#cardImageWrap");
const cardImage = document.querySelector("#cardImage");
const imageSwedishText = document.querySelector("#imageSwedishText");

const cardAudioWrap = document.querySelector("#cardAudioWrap");
const cardAudio = document.querySelector("#cardAudio");
const playAudioButton = document.querySelector("#playAudioButton");

const showSwedishFromAudioButton = document.querySelector("#showSwedishFromAudioButton");
const audioSwedishText = document.querySelector("#audioSwedishText");

const questionText = document.querySelector("#questionText");
const flashcard = document.querySelector("#flashcard");
const answerText = document.querySelector("#answerText");

const correctButton = document.querySelector("#correctButton");
const wrongButton = document.querySelector("#wrongButton");
const message = document.querySelector("#message");

async function loadCards() {
  try {
    const response = await fetch(DATA_URL);

    if (!response.ok) {
      throw new Error("Não foi possível carregar o arquivo words.json.");
    }

    const data = await response.json();

    allCards = data
      .filter((card) => card.active)
      .sort((a, b) => a.order - b.order);

    stats = loadStats();

    if (allCards.length === 0) {
      setupMessage.textContent = "Nenhum card ativo encontrado no JSON.";
      return;
    }

    fillFilterOptions();
    updateModeUI();
  } catch (error) {
    console.error(error);
    setupMessage.textContent = "Erro ao carregar os cards. Verifique data/words.json.";
  }
}

function loadStats() {
  const savedStats = localStorage.getItem(STORAGE_KEY);

  if (!savedStats) {
    return {};
  }

  try {
    return JSON.parse(savedStats);
  } catch (error) {
    console.error("Erro ao ler estatísticas salvas:", error);
    return {};
  }
}

function saveStats() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function getCardStats(cardId) {
  const key = String(cardId);

  if (!stats[key]) {
    stats[key] = {
      correct: 0,
      wrong: 0,
      seen: 0,
      lastResult: null,
      lastSeen: null
    };
  }

  return stats[key];
}

function updateCardStats(card, isCorrect) {
  const cardStats = getCardStats(card.id);

  cardStats.seen++;
  cardStats.lastSeen = new Date().toISOString();

  if (isCorrect) {
    cardStats.correct++;
    cardStats.lastResult = "correct";
  } else {
    cardStats.wrong++;
    cardStats.lastResult = "wrong";
  }

  saveStats();
}

function fillFilterOptions() {
  fillSelect(typeFilter, getUniqueValues(allCards, (card) => card.grammar.type));
  fillSelect(themeFilter, getUniqueValues(allCards, (card) => card.classification.theme));
  fillSelect(chapterFilter, getUniqueValues(allCards, (card) => card.classification.chapter));
}

function getUniqueValues(list, getter) {
  return [...new Set(list.map(getter).filter((value) => value !== null && value !== undefined))]
    .sort((a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a - b;
      }

      return String(a).localeCompare(String(b), "pt-BR");
    });
}

function fillSelect(selectElement, values) {
  const firstOption = selectElement.querySelector('option[value="all"]');

  selectElement.innerHTML = "";
  selectElement.appendChild(firstOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = String(value);
    selectElement.appendChild(option);
  });
}

function getFilteredCards() {
  const selectedType = typeFilter.value;
  const selectedTheme = themeFilter.value;
  const selectedChapter = chapterFilter.value;

  return allCards.filter((card) => {
    const matchesType =
      selectedType === "all" || card.grammar.type === selectedType;

    const matchesTheme =
      selectedTheme === "all" || card.classification.theme === selectedTheme;

    const matchesChapter =
      selectedChapter === "all" || String(card.classification.chapter) === selectedChapter;

    return matchesType && matchesTheme && matchesChapter;
  });
}

function startSession() {
baseSessionCards = getCardsAvailableForDirection(getFilteredCards());

if (baseSessionCards.length === 0) {
  setupMessage.textContent = "Nenhum card encontrado com esses filtros e essa direção.";
  return;
}

if (isNewWordsMode) {
  startNewWordsSession(baseSessionCards);
} else {
  cards = buildFirstRoundDeck(baseSessionCards);
}

  setupMessage.textContent = "";

  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  sessionAnswers = [];
  answerVisible = false;
  isChangingCard = false;

  updatePerformance();
  performanceBox.classList.add("hidden");
  performanceButton.textContent = "Ver desempenho";

  setupScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  studyScreen.classList.remove("hidden");

  startStudyTimer();
  showCard();
}

function getCardsAvailableForDirection(cardList) {
  const direction = directionSelect.value;

  if (direction === "img-sv") {
    return cardList.filter((card) => card.media?.image?.src);
  }

  if (direction === "audio-pt") {
    return cardList.filter((card) => card.media?.audio?.src);
  }

  return cardList;
}

function startNewWordsSession(filteredCards) {
  newWordsPool = getNewWordsPool(filteredCards);
  newWordsActiveCount = 1;
  newWordsRoundResults = {};
  allNewWordsIntroduced = newWordsPool.length <= 1;

  cards = newWordsPool.slice(0, newWordsActiveCount);
}

function getNewWordsPool(filteredCards) {
  if (newWordsOrderSelect.value === "random") {
    return shuffleArray(filteredCards);
  }

  return [...filteredCards];
}

function getCardWeight(cardStats) {
  const wrong = cardStats.wrong || 0;
  const correct = cardStats.correct || 0;

  if (wrong === 0) {
    return 1;
  }

  const rawWeight = 1 + wrong - Math.floor(correct / 3);

  return clamp(rawWeight, 1, 5);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}

function buildFirstRoundDeck(cardList) {
  if (firstRoundOrderSelect.value === "random") {
    return shuffleArray(cardList);
  }

  return [...cardList];
}

function backToSetup() {
  stopStudyTimer();
  studyScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");

  flashcard.classList.remove("flipped", "correct-preview", "wrong-preview");
  answerVisible = false;
  isChangingCard = false;
}

function repeatSession() {
  if (baseSessionCards.length === 0) {
    backToSetup();
    return;
  }

if (isNewWordsMode) {
  startNewWordsSession(baseSessionCards);
} else {
  cards = buildFirstRoundDeck(baseSessionCards);
}

  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  sessionAnswers = [];
  answerVisible = false;
  isChangingCard = false;

  updatePerformance();
  performanceBox.classList.add("hidden");
  performanceButton.textContent = "Ver desempenho";

  summaryScreen.classList.add("hidden");
  setupScreen.classList.add("hidden");
  studyScreen.classList.remove("hidden");

  startStudyTimer();
  showCard();
}

function showCard() {
  const card = cards[currentIndex];
  const content = getCardContent(card);

  answerVisible = false;

  flashcard.classList.remove("flipped", "correct-preview", "wrong-preview");

updateQuestionLabel(content);
updateQuestionText(content.question);
answerText.textContent = content.answer;
answerLabel.textContent = content.answerLabel;

showQuestionMedia(card, content.questionType);
resetAudioSwedishHint(card, content);
resetWriteMode();
updateModeUI();

  correctButton.disabled = true;
  wrongButton.disabled = true;

  message.textContent = getInitialMessage();
}

function resetAudioSwedishHint(card, content) {
  audioSwedishText.textContent = "";
  audioSwedishText.classList.add("hidden");

  showSwedishFromAudioButton.textContent = "Mostrar sueco";
  showSwedishFromAudioButton.classList.add("hidden");
  showSwedishFromAudioButton.disabled = true;

  if (content.questionType !== "audio") {
    return;
  }

  showSwedishFromAudioButton.classList.remove("hidden");
  showSwedishFromAudioButton.disabled = false;
}

function showSwedishFromAudio() {
  const card = cards[currentIndex];

  if (!card) {
    return;
  }

  audioSwedishText.textContent = card.term.swedish;
  audioSwedishText.classList.remove("hidden");

  showSwedishFromAudioButton.disabled = true;
  showSwedishFromAudioButton.textContent = "Sueco mostrado";
}

function updateQuestionText(text) {
  if (!text) {
    questionText.textContent = "";
    questionText.classList.add("hidden");
    return;
  }

  questionText.textContent = text;
  questionText.classList.remove("hidden");
}

function updateQuestionLabel(content) {
  if (content.questionType === "image" || content.questionType === "audio") {
    questionLabel.textContent = "";
    questionLabel.classList.add("hidden");
    return;
  }

  questionLabel.textContent = content.questionLabel;
  questionLabel.classList.remove("hidden");
}

function getCardContent(card) {
  const direction = directionSelect.value;

  if (direction === "pt-sv") {
    return {
      questionType: "text",
      question: card.term.portuguese,
      questionLabel: "Português",
      answer: card.term.swedish,
      answerLabel: "Sueco"
    };
  }

  if (direction === "img-sv") {
    return {
      questionType: "image",
      question: "",
      questionLabel: "Imagem",
      answer: card.term.swedish,
      answerLabel: "Sueco"
    };
  }

  if (direction === "audio-pt") {
    return {
      questionType: "audio",
      question: "",
      questionLabel: "Áudio em sueco",
      answer: card.term.portuguese,
      answerLabel: "Português"
    };
  }

  return {
    questionType: "text",
    question: card.term.swedish,
    questionLabel: "Sueco",
    answer: card.term.portuguese,
    answerLabel: "Português"
  };
}

function showQuestionMedia(card, questionType) {
  hideQuestionImage();
  hideQuestionAudio();

  if (questionType === "image") {
    showImageIfAvailable(card);
  }

  if (questionType === "audio") {
    showAudioIfAvailable(card);
  }
}

function showImageIfAvailable(card) {
  const image = card.media?.image;

  if (!image || !image.src) {
    hideQuestionImage();
    return;
  }

  cardImage.src = image.src;
  cardImage.alt = image.alt || "Imagem do flashcard";

  imageSwedishText.textContent = card.term.swedish;
  imageSwedishText.classList.remove("hidden");

  cardImageWrap.classList.remove("hidden");

  cardImage.onerror = () => {
    hideQuestionImage();
  };
}

function hideQuestionImage() {
  cardImageWrap.classList.add("hidden");
  cardImage.removeAttribute("src");
  cardImage.alt = "";

  imageSwedishText.textContent = "";
  imageSwedishText.classList.add("hidden");
}

function showAudioIfAvailable(card) {
  const audio = card.media?.audio;

  if (!audio || !audio.src) {
    hideQuestionAudio();
    return;
  }

  cardAudio.src = audio.src;
  cardAudioWrap.classList.remove("hidden");
}

function hideQuestionAudio() {
  cardAudioWrap.classList.add("hidden");
  cardAudio.pause();
  cardAudio.removeAttribute("src");
  cardAudio.load();
}

function revealAnswer() {
  if (answerVisible || isChangingCard) {
    return;
  }

  if (getAnswerMode() === "write") {
    return;
  }

  answerVisible = true;

  flashcard.classList.add("flipped");
  correctButton.disabled = false;
  wrongButton.disabled = false;

  message.textContent = "Agora marque seu resultado.";
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function markAnswer(isCorrect) {
  if (!answerVisible || isChangingCard) {
    return;
  }

  isChangingCard = true;

  correctButton.disabled = true;
  wrongButton.disabled = true;

  const currentCard = cards[currentIndex];

  if (isCorrect) {
    correctCount++;
  } else {
    wrongCount++;
  }

if (isNewWordsMode) {
  newWordsRoundResults[String(currentCard.id)] = isCorrect;
}

  sessionAnswers.push({
    cardId: currentCard.id,
    swedish: currentCard.term.swedish,
    portuguese: currentCard.term.portuguese,
    isCorrect
  });

  updateCardStats(currentCard, isCorrect);
  updatePerformance();

  flashcard.classList.remove("flipped", "correct-preview", "wrong-preview");

  await wait(220);

  goToNextCard();

  isChangingCard = false;
}

function goToNextCard() {
  currentIndex++;

  if (currentIndex >= cards.length) {
    currentIndex = 0;

    if (isNewWordsMode) {
      updateNewWordsDeckAfterRound();
    } else {
      cards = buildWeightedDeck(baseSessionCards);
    }
  }

  showCard();
}

function updateNewWordsDeckAfterRound() {
  const activeCards = newWordsPool.slice(0, newWordsActiveCount);
  const allActiveCardsWereCorrect = activeCards.every((card) => {
    return newWordsRoundResults[String(card.id)] === true;
  });

  if (allActiveCardsWereCorrect && newWordsActiveCount < newWordsPool.length) {
    newWordsActiveCount++;
  }

  allNewWordsIntroduced = newWordsActiveCount >= newWordsPool.length;

  newWordsRoundResults = {};

  if (allNewWordsIntroduced) {
    cards = buildWeightedDeck(newWordsPool);
  } else {
    cards = newWordsPool.slice(0, newWordsActiveCount);
  }
}

function buildWeightedDeck(filteredCards) {
  const weightedDeck = [];

  filteredCards.forEach((card) => {
    const cardStats = getCardStats(card.id);
    const weight = getCardWeight(cardStats);

    for (let i = 0; i < weight; i++) {
      weightedDeck.push(card);
    }
  });

  return shuffleArray(weightedDeck);
}

function showSummary() {
  stopStudyTimer();
  studyScreen.classList.add("hidden");
  setupScreen.classList.add("hidden");
  summaryScreen.classList.remove("hidden");

  const total = correctCount + wrongCount;
  const correctRate = total === 0 ? 0 : Math.round((correctCount / total) * 100);

  summaryTotal.textContent = total;
  summaryCorrect.textContent = correctCount;
  summaryWrong.textContent = wrongCount;
  summaryCorrectRate.textContent = `${correctRate}%`;
  summaryTime.textContent = formatTime(getElapsedStudySeconds());

  renderWrongList();
}

function renderWrongList() {
  summaryWrongList.innerHTML = "";

  const wrongMap = new Map();

  sessionAnswers
    .filter((answer) => !answer.isCorrect)
    .forEach((answer) => {
      const current = wrongMap.get(answer.cardId) || {
        swedish: answer.swedish,
        portuguese: answer.portuguese,
        count: 0
      };

      current.count++;
      wrongMap.set(answer.cardId, current);
    });

  const wrongItems = [...wrongMap.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  if (wrongItems.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Nenhum erro nesta sessão.";
    summaryWrongList.appendChild(item);
    return;
  }

  wrongItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.swedish} — ${item.portuguese} (${item.count} erro${item.count > 1 ? "s" : ""})`;
    summaryWrongList.appendChild(listItem);
  });
}

function showError(errorMessage) {
  questionText.textContent = "Erro";
  answerText.textContent = "";
  flashcard.classList.remove("flipped");
  message.textContent = errorMessage;

  correctButton.disabled = true;
  wrongButton.disabled = true;
}

function updatePerformance() {
  const total = correctCount + wrongCount;

  if (total === 0) {
    correctPercent.textContent = "0%";
    wrongPercent.textContent = "0%";
    return;
  }

  const correctRate = Math.round((correctCount / total) * 100);
  const wrongRate = Math.round((wrongCount / total) * 100);

  correctPercent.textContent = `${correctRate}%`;
  wrongPercent.textContent = `${wrongRate}%`;
}

function togglePerformance() {
  updatePerformance();
  performanceBox.classList.toggle("hidden");

  if (performanceBox.classList.contains("hidden")) {
    performanceButton.textContent = "Ver desempenho";
  } else {
    performanceButton.textContent = "Ocultar desempenho";
  }
}

function getAnswerMode() {
  return answerModeSelect.value;
}

function getInitialMessage() {
  if (getAnswerMode() === "write") {
    return "Digite sua resposta e toque em comparar.";
  }

  return "Toque no card para revelar a resposta.";
}

function updateModeUI() {
  const canWriteInSwedish = isSwedishAnswerModeAvailable();

  if (!canWriteInSwedish) {
    answerModeSelect.value = "think";
    answerModeLabel.classList.add("hidden");
  } else {
    answerModeLabel.classList.remove("hidden");
  }

  const shouldShowWriteBox =
    canWriteInSwedish && getAnswerMode() === "write";

  if (shouldShowWriteBox) {
    writeBox.classList.remove("hidden");
    flashcard.setAttribute("aria-disabled", "true");
  } else {
    writeBox.classList.add("hidden");
    flashcard.removeAttribute("aria-disabled");
  }
}

function resetWriteMode() {
  answerInput.value = "";
  writeResultBox.classList.add("hidden");
  userAnswerText.textContent = "";
}

function checkWrittenAnswer() {
  if (isChangingCard) {
    return;
  }

  if (!isSwedishAnswerModeAvailable()) {
    message.textContent = "Modo escrita só está disponível quando a resposta é em sueco.";
    return;
  }

  const card = cards[currentIndex];
  const content = getCardContent(card);

  const userAnswer = answerInput.value;
  const expectedAnswer = content.answer;

  if (!userAnswer.trim()) {
    message.textContent = "Digite uma resposta antes de comparar.";
    answerInput.focus();
    return;
  }

  const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(expectedAnswer);

  answerVisible = true;

  flashcard.classList.add("flipped");
  flashcard.classList.toggle("correct-preview", isCorrect);
  flashcard.classList.toggle("wrong-preview", !isCorrect);

  userAnswerText.textContent = userAnswer;
  writeResultBox.classList.remove("hidden");

  correctButton.disabled = false;
  wrongButton.disabled = false;

  if (isCorrect) {
    message.textContent = "Comparação: parece correto. Confirme em Acertei.";
  } else {
    message.textContent = "Comparação: diferente da resposta. Confirme em Errei ou Acertei.";
  }
}

function isSwedishAnswerModeAvailable() {
  return directionSelect.value === "pt-sv" || directionSelect.value === "img-sv";
}

function normalizeAnswer(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[.,!?;:()"]/g, "")
    .replace(/\s+/g, " ");
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  updateThemeButtonText();
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-theme");

  localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  updateThemeButtonText();
}

function updateThemeButtonText() {
  if (document.body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Tema claro";
  } else {
    themeToggleButton.textContent = "Tema escuro";
  }
}

function startStudyTimer() {
  sessionStartTime = Date.now();
  elapsedBeforePause = 0;
  isTimeVisible = false;

  timeBox.classList.add("hidden");
  timeButton.textContent = "Ver tempo";
  studyTimeText.textContent = "00:00";

  if (timerIntervalId) {
    clearInterval(timerIntervalId);
  }

  timerIntervalId = setInterval(() => {
    if (isTimeVisible) {
      updateStudyTimeText();
    }
  }, 1000);
}

function stopStudyTimer() {
  if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }

  updateStudyTimeText();
}

function getElapsedStudySeconds() {
  if (!sessionStartTime) {
    return 0;
  }

  return Math.floor((Date.now() - sessionStartTime) / 1000) + elapsedBeforePause;
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateStudyTimeText() {
  studyTimeText.textContent = formatTime(getElapsedStudySeconds());
}

function toggleStudyTime() {
  isTimeVisible = !isTimeVisible;

  if (isTimeVisible) {
    updateStudyTimeText();
    timeBox.classList.remove("hidden");
    timeButton.textContent = "Ocultar tempo";
  } else {
    timeBox.classList.add("hidden");
    timeButton.textContent = "Ver tempo";
  }
}

function toggleNewWordsMode() {
  isNewWordsMode = !isNewWordsMode;
  updateNewWordsModeUI();
}

function updateNewWordsModeUI() {
  if (isNewWordsMode) {
    newWordsToggleButton.classList.add("active");
    newWordsToggleButton.textContent = "Palavras novas: ligado";
    newWordsModeInfo.classList.remove("hidden");
    newWordsOrderLabel.classList.remove("hidden");
  } else {
    newWordsToggleButton.classList.remove("active");
    newWordsToggleButton.textContent = "Palavras novas";
    newWordsModeInfo.classList.add("hidden");
    newWordsOrderLabel.classList.add("hidden");
  }
}

flashcard.addEventListener("click", revealAnswer);

flashcard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealAnswer();
  }
});

checkAnswerButton.addEventListener("click", checkWrittenAnswer);

answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWrittenAnswer();
  }
});

playAudioButton.addEventListener("click", (event) => {
  event.stopPropagation();
  cardAudio.currentTime = 0;
  cardAudio.play();
});

showSwedishFromAudioButton.addEventListener("click", (event) => {
  event.stopPropagation();
  showSwedishFromAudio();
});

themeToggleButton.addEventListener("click", toggleTheme);
timeButton.addEventListener("click", toggleStudyTime);

directionSelect.addEventListener("change", updateModeUI);
answerModeSelect.addEventListener("change", updateModeUI);

startSessionButton.addEventListener("click", startSession);
backToSetupButton.addEventListener("click", backToSetup);

finishSessionButton.addEventListener("click", showSummary);
repeatSessionButton.addEventListener("click", repeatSession);
newSessionButton.addEventListener("click", backToSetup);

correctButton.addEventListener("click", () => markAnswer(true));
wrongButton.addEventListener("click", () => markAnswer(false));
performanceButton.addEventListener("click", togglePerformance);

newWordsToggleButton.addEventListener("click", toggleNewWordsMode);

applySavedTheme();
updateNewWordsModeUI();
loadCards();
