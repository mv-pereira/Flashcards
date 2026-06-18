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
let writeComparisonDone = false;
let stats = {};

let isNewWordsMode = false;
let newWordsPool = [];
let newWordsActiveCount = 1;
let newWordsRoundResults = {};
let allNewWordsIntroduced = false;

let sessionStartTime = null;
let elapsedBeforePause = 0;
let timerIntervalId = null;

const STORAGE_KEY = "flashcardsSuecoStats";
const THEME_STORAGE_KEY = "flashcardsSuecoTheme";

const PRONUNCIATION_RULES = [
  {
    title: "1. A vogal depois de SK, G e K muda o som",
    text: "Quando SK, G ou K vêm antes de A, O, U ou Å, o som tende a ser mais “duro”. Antes de E, I, Y, Ä ou Ö, o som costuma ficar mais “suave”.",
    examples: ["gott", "gift", "gör", "göra", "kul", "komma", "kort", "att känna", "att köpa", "skild"]
  },
  {
    title: "2. Combinações que não soam como seriam lidas em português",
    text: "Algumas combinações têm som especial: TJ soa como um chiado suave; SJ, SKJ, STJ e SK antes de vogal suave têm um som de “ch” mais forte; CH varia conforme a palavra.",
    examples: ["Tjena!", "sju", "att sjunga", "skild"]
  },
  {
    title: "3. RS, RT, RD e RN se juntam na fala",
    text: "Depois de R, as letras S, T, D e N costumam ser pronunciadas com a língua mais para trás. Na prática, não se fala como duas letras totalmente separadas.",
    examples: ["torsdag", "Ursäkta?", "ett barn", "snart", "kort", "ett hjärta"]
  },
  {
    title: "4. Algumas letras somem ou enfraquecem na fala rápida",
    text: "O G final em palavras terminadas em -dag muitas vezes quase desaparece. Em várias palavras frequentes, letras como R, G ou H podem ficar bem fracas dependendo da frase e da região.",
    examples: ["måndag", "tisdag", "onsdag", "fredag", "lördag", "söndag"]
  },
  {
    title: "5. A sílaba tônica normalmente fica na parte mais importante da palavra",
    text: "Palavras suecas comuns muitas vezes têm a primeira sílaba forte. Palavras com be- ou för- podem puxar a força para a segunda sílaba. Em frases, substantivos, verbos, adjetivos e advérbios costumam receber mais ênfase.",
    examples: ["en bok", "att äta", "förstå", "forska", "komma"]
  },
  {
    title: "6. Vogal longa x consoante longa",
    text: "Uma vogal seguida de uma só consoante costuma soar mais longa. Quando há duas ou mais consoantes depois, a vogal costuma ficar mais curta e a consoante seguinte pesa mais.",
    examples: ["en bok", "noll", "åtta", "komma", "kort"]
  },
  {
    title: "7. Melodia da frase",
    text: "O sueco não é falado “reto”: a voz sobe e desce, especialmente em vogais longas. Em afirmações, a melodia geralmente cai no final; em perguntas, pode subir ou variar conforme a região.",
    examples: ["Hej!", "Tjena!", "Ursäkta?", "Jag förstår inte."]
  }
];

const firstRoundOrderSelect = document.querySelector("#firstRoundOrderSelect");

const newWordsToggleButton = document.querySelector("#newWordsToggleButton");
const newWordsModeInfo = document.querySelector("#newWordsModeInfo");

const summaryScreen = document.querySelector("#summaryScreen");

const themeToggleButton = document.querySelector("#themeToggleButton");

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
const sourceFilter = document.querySelector("#sourceFilter");
const chapterFilterLabel = document.querySelector("#chapterFilterLabel");
const chapterFilter = document.querySelector("#chapterFilter");
const sourceTitleFilterLabel = document.querySelector("#sourceTitleFilterLabel");
const sourceTitleFilter = document.querySelector("#sourceTitleFilter");

const startSessionButton = document.querySelector("#startSessionButton");
const backToSetupButton = document.querySelector("#backToSetupButton");
const setupMessage = document.querySelector("#setupMessage");

const pronunciationRulesButton = document.querySelector("#pronunciationRulesButton");
const pronunciationScreen = document.querySelector("#pronunciationScreen");
const backFromPronunciationButton = document.querySelector("#backFromPronunciationButton");
const pronunciationRulesList = document.querySelector("#pronunciationRulesList");

const questionLabel = document.querySelector("#questionLabel");

const directionSelect = document.querySelector("#directionSelect");
const answerModeSelect = document.querySelector("#answerModeSelect");
const answerModeLabel = document.querySelector("#answerModeLabel");

const answerLabel = document.querySelector("#answerLabel");
const backHint = document.querySelector("#backHint");

const writeBox = document.querySelector("#writeBox");
const answerInput = document.querySelector("#answerInput");
const checkAnswerButton = document.querySelector("#checkAnswerButton");
const nextWriteCardButton = document.querySelector("#nextWriteCardButton");
const writeResultBox = document.querySelector("#writeResultBox");
const userAnswerText = document.querySelector("#userAnswerText");
const comparisonFeedbackText = document.querySelector("#comparisonFeedbackText");

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

const resultButtons = document.querySelector("#resultButtons");
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
  fillSelect(themeFilter, getUniqueThemeValues(allCards));
  fillSelect(sourceFilter, getUniqueValues(allCards, (card) => getCardSource(card)));
  updateSourceSpecificFilters();
}

function getCardThemes(card) {
  const classification = card.classification || {};

  if (Array.isArray(classification.themes)) {
    return classification.themes.filter(Boolean);
  }

  if (Array.isArray(classification.theme)) {
    return classification.theme.filter(Boolean);
  }

  if (classification.theme) {
    return [classification.theme];
  }

  return [];
}

function getUniqueThemeValues(cardList) {
  return [...new Set(cardList.flatMap(getCardThemes))]
    .sort((a, b) => String(a).localeCompare(String(b), "pt-BR"));
}

function getCardSource(card) {
  return card.classification?.source || "livro";
}

function getCardSourceTitle(card) {
  return card.classification?.sourceTitle || null;
}

function updateSourceSpecificFilters() {
  const selectedSource = sourceFilter.value;

  chapterFilterLabel.classList.toggle("hidden", selectedSource !== "livro");
  sourceTitleFilterLabel.classList.toggle("hidden", selectedSource !== "música");

  if (selectedSource === "livro") {
    fillSelect(
      chapterFilter,
      getUniqueValues(
        allCards.filter((card) => getCardSource(card) === "livro"),
        (card) => card.classification.chapter
      )
    );
    sourceTitleFilter.value = "all";
    return;
  }

  if (selectedSource === "música") {
    fillSelect(
      sourceTitleFilter,
      getUniqueValues(
        allCards.filter((card) => getCardSource(card) === "música"),
        (card) => getCardSourceTitle(card)
      )
    );
    chapterFilter.value = "all";
    return;
  }

  chapterFilter.value = "all";
  sourceTitleFilter.value = "all";
}

function getUniqueThemeValues(cardList) {
  return [...new Set(cardList.flatMap(getCardThemes))]
    .sort((a, b) => String(a).localeCompare(String(b), "pt-BR"));
}

function getCardThemes(card) {
  const classification = card.classification || {};

  if (Array.isArray(classification.themes)) {
    return classification.themes.filter(Boolean);
  }

  if (Array.isArray(classification.theme)) {
    return classification.theme.filter(Boolean);
  }

  if (classification.theme) {
    return [classification.theme];
  }

  return [];
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
  const selectedSource = sourceFilter.value;
  const selectedChapter = chapterFilter.value;
  const selectedSourceTitle = sourceTitleFilter.value;

  return allCards.filter((card) => {
    const matchesType =
      selectedType === "all" || card.grammar.type === selectedType;

    const cardThemes = getCardThemes(card);

    const matchesTheme =
      selectedTheme === "all" || cardThemes.includes(selectedTheme);

    const cardSource = getCardSource(card);

    const matchesSource =
      selectedSource === "all" || cardSource === selectedSource;

    const matchesChapter =
      selectedSource !== "livro" ||
      selectedChapter === "all" ||
      String(card.classification.chapter) === selectedChapter;

    const matchesSourceTitle =
      selectedSource !== "música" ||
      selectedSourceTitle === "all" ||
      getCardSourceTitle(card) === selectedSourceTitle;

    return (
      matchesType &&
      matchesTheme &&
      matchesSource &&
      matchesChapter &&
      matchesSourceTitle
    );
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

  setupScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  pronunciationScreen.classList.add("hidden");
  studyScreen.classList.remove("hidden");
  newWordsToggleButton.classList.add("hidden");

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
  if (firstRoundOrderSelect.value === "random") {
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

function shouldSkipEasyCard(cardStats) {
  const wrong = cardStats.wrong || 0;
  const correct = cardStats.correct || 0;

  if (wrong > 0) {
    return false;
  }

  if (correct >= 4) {
    return Math.random() < 0.75;
  }

  if (correct >= 2) {
    return Math.random() < 0.5;
  }

  return false;
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

function openPronunciationRules() {
  stopStudyTimer();
  setupMessage.textContent = "";

  setupScreen.classList.add("hidden");
  studyScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  pronunciationScreen.classList.remove("hidden");
  newWordsToggleButton.classList.add("hidden");

  renderPronunciationRules();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backFromPronunciationRules() {
  pronunciationScreen.classList.add("hidden");
  studyScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  newWordsToggleButton.classList.remove("hidden");
}

function renderPronunciationRules() {
  if (!pronunciationRulesList) {
    return;
  }

  pronunciationRulesList.innerHTML = "";

  PRONUNCIATION_RULES.forEach((rule) => {
    const article = document.createElement("article");
    article.className = "pronunciation-rule";

    const title = document.createElement("h3");
    title.textContent = rule.title;

    const text = document.createElement("p");
    text.textContent = rule.text;

    const examples = document.createElement("div");
    examples.className = "pronunciation-examples";

    rule.examples
      .map(findCardWithAudioBySwedishTerm)
      .filter(Boolean)
      .forEach((card) => {
        examples.appendChild(createPronunciationExampleButton(card));
      });

    if (examples.children.length === 0) {
      const empty = document.createElement("p");
      empty.className = "pronunciation-empty";
      empty.textContent = "Nenhum exemplo com áudio encontrado no words.json para esta regra.";
      examples.appendChild(empty);
    }

    article.append(title, text, examples);
    pronunciationRulesList.appendChild(article);
  });
}

function findCardWithAudioBySwedishTerm(term) {
  const normalizedTerm = normalizePronunciationTerm(term);

  return allCards.find((card) => {
    const swedish = card.term?.swedish || "";
    const audioSrc = card.media?.audio?.src;

    return audioSrc && normalizePronunciationTerm(swedish) === normalizedTerm;
  });
}

function normalizePronunciationTerm(value) {
  return String(value)
    .trim()
    .toLocaleLowerCase("sv-SE")
    .replace(/[.!?]+$/g, "");
}

function createPronunciationExampleButton(card) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "pronunciation-example";
  button.dataset.audioSrc = card.media.audio.src;

  const swedish = document.createElement("strong");
  swedish.textContent = card.term.swedish;

  const portuguese = document.createElement("span");
  portuguese.textContent = card.term.portuguese;

  const action = document.createElement("em");
  action.textContent = "Ouvir";

  button.append(swedish, portuguese, action);
  return button;
}

function playPronunciationExample(event) {
  const button = event.target.closest(".pronunciation-example");

  if (!button) {
    return;
  }

  const audioSrc = button.dataset.audioSrc;

  if (!audioSrc) {
    return;
  }

  const audio = new Audio(audioSrc);
  audio.play().catch((error) => {
    console.error("Erro ao tocar áudio do exemplo:", error);
  });
}

function backToSetup() {
  stopStudyTimer();
  studyScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  pronunciationScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  newWordsToggleButton.classList.remove("hidden");

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

  summaryScreen.classList.add("hidden");
  pronunciationScreen.classList.add("hidden");
  setupScreen.classList.add("hidden");
  studyScreen.classList.remove("hidden");
  newWordsToggleButton.classList.add("hidden");

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

  imageSwedishText.textContent = card.term.portuguese;
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

}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function registerCurrentAnswer(isCorrect) {
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

  return currentCard;
}

async function markAnswer(isCorrect) {
  if (!answerVisible || isChangingCard) {
    return;
  }

  isChangingCard = true;

  correctButton.disabled = true;
  wrongButton.disabled = true;

  registerCurrentAnswer(isCorrect);

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

    if (shouldSkipEasyCard(cardStats)) {
      return;
    }

    const weight = getCardWeight(cardStats);

    for (let i = 0; i < weight; i++) {
      weightedDeck.push(card);
    }
  });

  if (weightedDeck.length === 0) {
    return shuffleArray(filteredCards);
  }

  return shuffleArray(weightedDeck);
}

function showSummary() {
  stopStudyTimer();
  studyScreen.classList.add("hidden");
  setupScreen.classList.add("hidden");
  pronunciationScreen.classList.add("hidden");
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

function getAnswerMode() {
  return answerModeSelect.value;
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
    resultButtons.classList.add("hidden");
    flashcard.setAttribute("aria-disabled", "true");
  } else {
    writeBox.classList.add("hidden");
    resultButtons.classList.remove("hidden");
    flashcard.removeAttribute("aria-disabled");
  }
}

function resetWriteMode() {
  writeComparisonDone = false;

  answerInput.value = "";
  answerInput.disabled = false;

  checkAnswerButton.disabled = false;

  nextWriteCardButton.classList.add("hidden");
  nextWriteCardButton.disabled = true;

  writeResultBox.classList.add("hidden");
  userAnswerText.textContent = "";

  comparisonFeedbackText.textContent = "";
  comparisonFeedbackText.classList.remove("correct", "wrong");

  backHint.classList.remove("hidden");
}

function checkWrittenAnswer() {
  if (isChangingCard || writeComparisonDone) {
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

  const comparison = compareWrittenAnswer(userAnswer, expectedAnswer);

  answerVisible = true;
  writeComparisonDone = true;

  flashcard.classList.add("flipped");
  flashcard.classList.toggle("correct-preview", comparison.isCorrect);
  flashcard.classList.toggle("wrong-preview", !comparison.isCorrect);

  userAnswerText.textContent = userAnswer;
  comparisonFeedbackText.textContent = comparison.feedback;
  comparisonFeedbackText.classList.toggle("correct", comparison.isCorrect);
  comparisonFeedbackText.classList.toggle("wrong", !comparison.isCorrect);
  writeResultBox.classList.remove("hidden");

  backHint.classList.add("hidden");

  answerInput.disabled = true;
  checkAnswerButton.disabled = true;

  nextWriteCardButton.classList.remove("hidden");
  nextWriteCardButton.disabled = false;

  registerCurrentAnswer(comparison.isCorrect);

}

async function nextWrittenCard() {
  if (!writeComparisonDone || isChangingCard) {
    return;
  }

  isChangingCard = true;

  nextWriteCardButton.disabled = true;

  flashcard.classList.remove("flipped", "correct-preview", "wrong-preview");

  await wait(220);

  goToNextCard();

  isChangingCard = false;
}

function compareWrittenAnswer(userAnswer, expectedAnswer) {
  const normalizedUserAnswer = normalizeAnswer(userAnswer);
  const normalizedExpectedAnswer = normalizeAnswer(expectedAnswer);

  const comparison = getDamerauLevenshteinComparison(
    normalizedUserAnswer,
    normalizedExpectedAnswer
  );

  const isCorrect = comparison.distance === 0;

  return {
    isCorrect,
    distance: comparison.distance,
    feedback: buildComparisonFeedbackFromOperations(
      comparison.operations,
      normalizedUserAnswer,
      normalizedExpectedAnswer
    )
  };
}

function getDamerauLevenshteinComparison(source, target) {
  const sourceLength = source.length;
  const targetLength = target.length;

  const distances = Array.from({ length: sourceLength + 1 }, () =>
    Array(targetLength + 1).fill(0)
  );

  const steps = Array.from({ length: sourceLength + 1 }, () =>
    Array(targetLength + 1).fill(null)
  );

  for (let i = 0; i <= sourceLength; i++) {
    distances[i][0] = i;

    if (i > 0) {
      steps[i][0] = {
        type: "delete",
        sourceIndex: i - 1,
        targetIndex: 0
      };
    }
  }

  for (let j = 0; j <= targetLength; j++) {
    distances[0][j] = j;

    if (j > 0) {
      steps[0][j] = {
        type: "insert",
        sourceIndex: 0,
        targetIndex: j - 1
      };
    }
  }

  for (let i = 1; i <= sourceLength; i++) {
    for (let j = 1; j <= targetLength; j++) {
      const substitutionCost = source[i - 1] === target[j - 1] ? 0 : 1;

      let bestDistance = distances[i - 1][j - 1] + substitutionCost;
      let bestStep = {
        type: substitutionCost === 0 ? "match" : "substitute",
        sourceIndex: i - 1,
        targetIndex: j - 1
      };

      const deleteDistance = distances[i - 1][j] + 1;
      if (deleteDistance < bestDistance) {
        bestDistance = deleteDistance;
        bestStep = {
          type: "delete",
          sourceIndex: i - 1,
          targetIndex: j
        };
      }

      const insertDistance = distances[i][j - 1] + 1;
      if (insertDistance < bestDistance) {
        bestDistance = insertDistance;
        bestStep = {
          type: "insert",
          sourceIndex: i,
          targetIndex: j - 1
        };
      }

      if (
        i > 1 &&
        j > 1 &&
        source[i - 1] === target[j - 2] &&
        source[i - 2] === target[j - 1]
      ) {
        const transposeDistance = distances[i - 2][j - 2] + 1;

        if (transposeDistance < bestDistance) {
          bestDistance = transposeDistance;
          bestStep = {
            type: "transpose",
            sourceIndex: i - 2,
            targetIndex: j - 2
          };
        }
      }

      distances[i][j] = bestDistance;
      steps[i][j] = bestStep;
    }
  }

  const operations = [];
  let i = sourceLength;
  let j = targetLength;

  while (i > 0 || j > 0) {
    const step = steps[i][j];

    if (!step) {
      break;
    }

    if (step.type === "match") {
      i--;
      j--;
      continue;
    }

    if (step.type === "substitute") {
      operations.push({
        type: "substitute",
        userChar: source[i - 1],
        expectedChar: target[j - 1],
        position: j
      });

      i--;
      j--;
      continue;
    }

    if (step.type === "delete") {
      operations.push({
        type: "delete",
        userChar: source[i - 1],
        position: i
      });

      i--;
      continue;
    }

    if (step.type === "insert") {
      operations.push({
        type: "insert",
        expectedChar: target[j - 1],
        position: j
      });

      j--;
      continue;
    }

    if (step.type === "transpose") {
      operations.push({
        type: "transpose",
        firstChar: source[i - 2],
        secondChar: source[i - 1],
        position: j - 1
      });

      i -= 2;
      j -= 2;
      continue;
    }
  }

  operations.reverse();

  return {
    distance: distances[sourceLength][targetLength],
    operations
  };
}

function buildComparisonFeedbackFromOperations(operations, userAnswer, expectedAnswer) {
  const relevantOperations = operations.filter((operation) => {
    return operation.type !== "match";
  });

  if (relevantOperations.length === 0) {
    return "Resposta correta.";
  }

  return relevantOperations
    .map((operation) => {
      return formatComparisonOperation(operation, userAnswer, expectedAnswer);
    })
    .filter(Boolean)
    .join(" ");
}

function formatComparisonOperation(operation, userAnswer, expectedAnswer) {
  if (operation.type === "substitute") {
    const location = describeCharacterLocation(expectedAnswer, operation.position);

    return `${capitalizeFirstLetter(location)}, você escreveu "${operation.userChar}", mas o correto é "${operation.expectedChar}".`;
  }

  if (operation.type === "insert") {
    const location = describeCharacterLocation(expectedAnswer, operation.position);

    return `Faltou a letra "${operation.expectedChar}" ${location}.`;
  }

  if (operation.type === "delete") {
    const location = describeCharacterLocation(userAnswer, operation.position);

    return `Há uma letra extra "${operation.userChar}" ${location}.`;
  }

  if (operation.type === "transpose") {
    const location = describeCharacterLocation(expectedAnswer, operation.position);

    return `Algumas letras parecem estar invertidas ${location}.`;
  }

  return "";
}

function describeCharacterLocation(text, charPosition) {
  const index = clamp(charPosition - 1, 0, Math.max(text.length - 1, 0));

  if (text[index] === " ") {
    return describeSpaceLocation(text, index);
  }

  const wordRanges = getWordRanges(text);
  const wordIndex = wordRanges.findIndex((range) => {
    return index >= range.start && index <= range.end;
  });

  if (wordIndex === -1) {
    return "em uma parte da resposta";
  }

  const wordRange = wordRanges[wordIndex];
  const wordLength = wordRange.end - wordRange.start + 1;
  const relativeIndex = index - wordRange.start;

  const wordPart = getWordPart(relativeIndex, wordLength);
  const ordinalWord = getOrdinalWord(wordIndex + 1);

  return `${wordPart} da ${ordinalWord} palavra`;
}

function describeSpaceLocation(text, spaceIndex) {
  const textBeforeSpace = text.slice(0, spaceIndex).trim();
  const textAfterSpace = text.slice(spaceIndex + 1).trim();

  const wordsBefore = textBeforeSpace ? textBeforeSpace.split(/\s+/).length : 0;
  const wordsAfter = textAfterSpace ? textAfterSpace.split(/\s+/).length : 0;

  if (wordsBefore > 0 && wordsAfter > 0) {
    const previousWord = getOrdinalWord(wordsBefore);
    const nextWord = getOrdinalWord(wordsBefore + 1);

    return `entre a ${previousWord} palavra e a ${nextWord} palavra`;
  }

  if (wordsBefore === 0) {
    return "antes da primeira palavra";
  }

  return `depois da ${getOrdinalWord(wordsBefore)} palavra`;
}

function getWordRanges(text) {
  const ranges = [];
  const wordRegex = /\S+/g;
  let match;

  while ((match = wordRegex.exec(text)) !== null) {
    ranges.push({
      start: match.index,
      end: match.index + match[0].length - 1,
      word: match[0]
    });
  }

  return ranges;
}

function getWordPart(relativeIndex, wordLength) {
  if (wordLength <= 1) {
    return "na palavra";
  }

  if (wordLength === 2) {
    return relativeIndex === 0 ? "no início" : "no final";
  }

  const firstThirdLimit = Math.ceil(wordLength / 3);
  const lastThirdStart = Math.floor((wordLength * 2) / 3);

  if (relativeIndex < firstThirdLimit) {
    return "no início";
  }

  if (relativeIndex >= lastThirdStart) {
    return "no final";
  }

  return "no meio";
}

function getOrdinalWord(number) {
  const ordinals = [
    "primeira",
    "segunda",
    "terceira",
    "quarta",
    "quinta",
    "sexta",
    "sétima",
    "oitava",
    "nona",
    "décima"
  ];

  return ordinals[number - 1] || `${number}ª`;
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
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (document.body.classList.contains("dark-theme")) {
    themeToggleButton.textContent = "Tema claro";

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", "#101826");
    }
  } else {
    themeToggleButton.textContent = "Tema escuro";

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", "#f7f4ea");
    }
  }
}

function startStudyTimer() {
  sessionStartTime = Date.now();
  elapsedBeforePause = 0;

  if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

function stopStudyTimer() {
  if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
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

function toggleNewWordsMode() {
  isNewWordsMode = !isNewWordsMode;
  updateNewWordsModeUI();
}

function updateNewWordsModeUI() {
  if (isNewWordsMode) {
    newWordsToggleButton.classList.add("active");
    newWordsToggleButton.textContent = "Palavras novas: ligado";
    newWordsModeInfo.classList.remove("hidden");
  } else {
    newWordsToggleButton.classList.remove("active");
    newWordsToggleButton.textContent = "Palavras novas";
    newWordsModeInfo.classList.add("hidden");
  }
}

function capitalizeFirstLetter(text) {
  if (!text) {
    return "";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

flashcard.addEventListener("click", revealAnswer);

flashcard.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    revealAnswer();
  }
});

checkAnswerButton.addEventListener("click", checkWrittenAnswer);
nextWriteCardButton.addEventListener("click", nextWrittenCard);

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

directionSelect.addEventListener("change", updateModeUI);
answerModeSelect.addEventListener("change", updateModeUI);

startSessionButton.addEventListener("click", startSession);
backToSetupButton.addEventListener("click", backToSetup);

pronunciationRulesButton.addEventListener("click", openPronunciationRules);
backFromPronunciationButton.addEventListener("click", backFromPronunciationRules);
pronunciationRulesList.addEventListener("click", playPronunciationExample);

finishSessionButton.addEventListener("click", showSummary);
repeatSessionButton.addEventListener("click", repeatSession);
newSessionButton.addEventListener("click", backToSetup);

correctButton.addEventListener("click", () => markAnswer(true));
wrongButton.addEventListener("click", () => markAnswer(false));

newWordsToggleButton.addEventListener("click", toggleNewWordsMode);

sourceFilter.addEventListener("change", () => {
  setupMessage.textContent = "";
  updateSourceSpecificFilters();
});

applySavedTheme();
updateNewWordsModeUI();
loadCards();
