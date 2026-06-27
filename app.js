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

let wordsDirection = "sv-pt";
let expandedWordCardId = null;

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

const typeFilterGroup = document.querySelector("#typeFilterGroup");
const themeFilterGroup = document.querySelector("#themeFilterGroup");
const sourceFilterGroup = document.querySelector("#sourceFilterGroup");
const chapterFilterLabel = document.querySelector("#chapterFilterLabel");
const chapterFilterGroup = document.querySelector("#chapterFilterGroup");
const sourceTitleFilterLabel = document.querySelector("#sourceTitleFilterLabel");
const sourceTitleFilterGroup = document.querySelector("#sourceTitleFilterGroup");

const startSessionButton = document.querySelector("#startSessionButton");
const backToSetupButton = document.querySelector("#backToSetupButton");
const setupMessage = document.querySelector("#setupMessage");

const pronunciationRulesButton = document.querySelector("#pronunciationRulesButton");
const pronunciationScreen = document.querySelector("#pronunciationScreen");
const backFromPronunciationButton = document.querySelector("#backFromPronunciationButton");
const pronunciationRulesList = document.querySelector("#pronunciationRulesList");

const resetStatsButton = document.querySelector("#resetStatsButton");

const wordsButton = document.querySelector("#wordsButton");
const wrongWordsButton = document.querySelector("#wrongWordsButton");
const wordsScreen = document.querySelector("#wordsScreen");
const backFromWordsButton = document.querySelector("#backFromWordsButton");
const wordsScreenTitle = document.querySelector("#wordsScreenTitle");
const wordsScreenDescription = document.querySelector("#wordsScreenDescription");
const wordsDirectionButton = document.querySelector("#wordsDirectionButton");
const wordsCount = document.querySelector("#wordsCount");
const wordsList = document.querySelector("#wordsList");

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
      lastSeen: null,

      // SRS imediato para treino contínuo
      mastery: 0,
      streak: 0,
      lapses: 0,
      priority: 100,
      lastAnsweredAt: null
    };
  }

  // Migração para usuários que já têm estatísticas salvas antigas
  if (stats[key].mastery === undefined) {
    stats[key].mastery = calculateInitialMastery(stats[key]);
  }

  if (stats[key].streak === undefined) {
    stats[key].streak = 0;
  }

  if (stats[key].lapses === undefined) {
    stats[key].lapses = stats[key].wrong || 0;
  }

  if (stats[key].priority === undefined) {
    stats[key].priority = calculateCardPriority(stats[key]);
  }

  if (stats[key].lastAnsweredAt === undefined) {
    stats[key].lastAnsweredAt = stats[key].lastSeen || null;
  }

  return stats[key];
}

function calculateInitialMastery(cardStats) {
  const correct = cardStats.correct || 0;
  const wrong = cardStats.wrong || 0;

  if (correct + wrong === 0) {
    return 0;
  }

  return clamp(correct - wrong * 2, -6, 8);
}

function updateCardStats(card, isCorrect) {
  const cardStats = getCardStats(card.id);
  const now = new Date();

  cardStats.seen++;
  cardStats.lastSeen = now.toISOString();
  cardStats.lastAnsweredAt = now.toISOString();

  if (isCorrect) {
    cardStats.correct++;
    cardStats.lastResult = "correct";
    cardStats.streak = (cardStats.streak || 0) + 1;
    cardStats.mastery = clamp((cardStats.mastery || 0) + getCorrectMasteryGain(cardStats), -6, 10);
  } else {
    cardStats.wrong++;
    cardStats.lastResult = "wrong";
    cardStats.streak = 0;
    cardStats.lapses = (cardStats.lapses || 0) + 1;
    cardStats.mastery = clamp((cardStats.mastery || 0) - 3, -6, 10);
  }

  cardStats.priority = calculateCardPriority(cardStats);

  saveStats();
}

function getCorrectMasteryGain(cardStats) {
  const streak = cardStats.streak || 0;

  if (streak >= 4) {
    return 0.75;
  }

  if (streak >= 2) {
    return 1;
  }

  return 1.5;
}

function calculateCardPriority(cardStats) {
  const seen = cardStats.seen || 0;
  const wrong = cardStats.wrong || 0;
  const mastery = cardStats.mastery || 0;
  const lapses = cardStats.lapses || 0;

  if (seen === 0) {
    return 120;
  }

  let priority = 80;

  priority += wrong * 14;
  priority += lapses * 6;
  priority -= mastery * 9;
  priority -= (cardStats.streak || 0) * 5;

  if (cardStats.lastResult === "wrong") {
    priority += 45;
  }

  return clamp(Math.round(priority), 5, 180);
}

function fillFilterOptions() {
  fillCheckboxGroup(
    typeFilterGroup,
    getUniqueValues(allCards, (card) => card.grammar.type)
  );

  fillCheckboxGroup(
    themeFilterGroup,
    getUniqueThemeValues(allCards)
  );

  fillCheckboxGroup(
    sourceFilterGroup,
    getUniqueValues(allCards, (card) => getCardSource(card))
  );

  updateSourceSpecificFilters();
}

function fillCheckboxGroup(container, values) {
  container.innerHTML = "";

  values.forEach((value) => {
    const label = document.createElement("label");
    label.className = "checkbox-option";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = String(value);

    const text = document.createElement("span");
    text.textContent = String(value);

    label.append(checkbox, text);
    container.appendChild(label);
  });
}

function getCheckedValues(container) {
  return [...container.querySelectorAll('input[type="checkbox"]:checked')]
    .map((checkbox) => checkbox.value);
}

function hasCheckedValue(container, value) {
  return getCheckedValues(container).includes(value);
}

function getCardSource(card) {
  const classification = card.classification || {};

  if (classification.source) {
    return classification.source;
  }

  if (classification.sourceTitle || classification.sourceArtist) {
    return "música";
  }

  return "livro";
}

function getCardSourceTitle(card) {
  return card.classification?.sourceTitle || null;
}

function updateSourceSpecificFilters() {
  const selectedSources = getCheckedValues(sourceFilterGroup);

  const shouldShowChapters = selectedSources.includes("livro");
  const shouldShowSourceTitles = selectedSources.includes("música");

  chapterFilterLabel.classList.toggle("hidden", !shouldShowChapters);
  sourceTitleFilterLabel.classList.toggle("hidden", !shouldShowSourceTitles);

  if (!shouldShowChapters) {
    chapterFilterLabel.removeAttribute("open");
  }

  if (!shouldShowSourceTitles) {
    sourceTitleFilterLabel.removeAttribute("open");
  }

  if (shouldShowChapters) {
    fillCheckboxGroup(
      chapterFilterGroup,
      getUniqueValues(
        allCards.filter((card) => getCardSource(card) === "livro"),
        (card) => card.classification.chapter
      )
    );
  } else {
    chapterFilterGroup.innerHTML = "";
  }

  if (shouldShowSourceTitles) {
    fillCheckboxGroup(
      sourceTitleFilterGroup,
      getUniqueValues(
        allCards.filter((card) => getCardSource(card) === "música"),
        (card) => getCardSourceTitle(card)
      )
    );
  } else {
    sourceTitleFilterGroup.innerHTML = "";
  }
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

function getFilteredCards() {
  const selectedTypes = getCheckedValues(typeFilterGroup);
  const selectedThemes = getCheckedValues(themeFilterGroup);
  const selectedSources = getCheckedValues(sourceFilterGroup);
  const selectedChapters = getCheckedValues(chapterFilterGroup);
  const selectedSourceTitles = getCheckedValues(sourceTitleFilterGroup);

  return allCards.filter((card) => {
    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.includes(card.grammar.type);

    const cardThemes = getCardThemes(card);

    const matchesTheme =
      selectedThemes.length === 0 ||
      cardThemes.some((theme) => selectedThemes.includes(theme));

    const cardSource = getCardSource(card);

    const matchesSource =
      selectedSources.length === 0 ||
      selectedSources.includes(cardSource);

    const matchesChapter =
      cardSource !== "livro" ||
      selectedChapters.length === 0 ||
      selectedChapters.includes(String(card.classification.chapter));

    const matchesSourceTitle =
      cardSource !== "música" ||
      selectedSourceTitles.length === 0 ||
      selectedSourceTitles.includes(getCardSourceTitle(card));

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
  wordsScreen.classList.add("hidden");
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

  if (direction === "audio-pt" || direction === "audio-sv") {
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
  return shuffleArray(filteredCards);
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
  return buildSrsDeck(cardList);
}

function openPronunciationRules() {
  stopStudyTimer();
  setupMessage.textContent = "";

  setupScreen.classList.add("hidden");
  studyScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  wordsScreen.classList.add("hidden");
  pronunciationScreen.classList.remove("hidden");
  newWordsToggleButton.classList.add("hidden");

  renderPronunciationRules();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backFromPronunciationRules() {
  pronunciationScreen.classList.add("hidden");
  wordsScreen.classList.add("hidden");
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
  wordsScreen.classList.add("hidden");
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
  wordsScreen.classList.add("hidden");
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

preloadLikelyAudios();

}

function preloadLikelyAudios() {
  const upcomingCards = cards.slice(currentIndex, currentIndex + 4);

  const priorityCards = [...baseSessionCards]
    .filter((card) => card?.media?.audio?.src)
    .sort((a, b) => {
      const aStats = getCardStats(a.id);
      const bStats = getCardStats(b.id);

      return calculateCardPriority(bStats) - calculateCardPriority(aStats);
    })
    .slice(0, 4);

  preloadAudioForCards([...upcomingCards, ...priorityCards], 8);
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

  if (directionSelect.value === "audio-sv") {
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

  if (direction === "audio-sv") {
    return {
      questionType: "audio",
      question: "",
      questionLabel: "Áudio em sueco",
      answer: card.term.swedish,
      answerLabel: "Sueco"
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

  if (!isCorrect) {
    scheduleImmediateRetry(currentCard);
    preloadAudioForCard(currentCard);
  }

  return currentCard;
}

function scheduleImmediateRetry(card) {
  const insertIndex = Math.min(
    cards.length,
    currentIndex + getImmediateRetryGap()
  );

  const alreadyScheduledSoon = cards
    .slice(currentIndex + 1, insertIndex + 1)
    .some((queuedCard) => String(queuedCard.id) === String(card.id));

  if (alreadyScheduledSoon) {
    return;
  }

  cards.splice(insertIndex, 0, card);
}

function getImmediateRetryGap() {
  const remainingCards = cards.length - currentIndex - 1;

  if (remainingCards <= 2) {
    return 2;
  }

  return 3 + Math.floor(Math.random() * 3);
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
  return buildSrsDeck(filteredCards);
}

function buildSrsDeck(filteredCards) {
  const deck = [];

  filteredCards.forEach((card) => {
    const cardStats = getCardStats(card.id);
    const repeatCount = getImmediateSrsRepeatCount(cardStats);

    for (let i = 0; i < repeatCount; i++) {
      deck.push(card);
    }
  });

  if (deck.length === 0) {
    return shuffleArray(filteredCards);
  }

  return shuffleArray(deck);
}

function getImmediateSrsRepeatCount(cardStats) {
  const priority = calculateCardPriority(cardStats);

  if (priority >= 150) {
    return 5;
  }

  if (priority >= 115) {
    return 4;
  }

  if (priority >= 80) {
    return 3;
  }

  if (priority >= 45) {
    return 2;
  }

  return 1;
}
function showSummary() {
  stopStudyTimer();
  studyScreen.classList.add("hidden");
  setupScreen.classList.add("hidden");
  pronunciationScreen.classList.add("hidden");
  wordsScreen.classList.add("hidden");
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
  const forceWriteMode = directionSelect.value === "audio-sv";

  if (forceWriteMode) {
    answerModeSelect.value = "write";
    answerModeLabel.classList.add("hidden");
  } else if (!canWriteInSwedish) {
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
  return (
    directionSelect.value === "pt-sv" ||
    directionSelect.value === "img-sv" ||
    directionSelect.value === "audio-sv"
  );
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
      themeColorMeta.setAttribute("content", "#101A2B");
    }
  } else {
    themeToggleButton.textContent = "Tema escuro";

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", "#FFF7D8");
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

function openWordsScreen(viewMode = "all") {
  stopStudyTimer();
  setupMessage.textContent = "";
  wordsViewMode = viewMode;

  expandedWordCardId = null;

  setupScreen.classList.add("hidden");
  studyScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  pronunciationScreen.classList.add("hidden");
  wordsScreen.classList.remove("hidden");
  newWordsToggleButton.classList.add("hidden");

  renderWordsList();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backFromWordsScreen() {
  wordsScreen.classList.add("hidden");
  studyScreen.classList.add("hidden");
  summaryScreen.classList.add("hidden");
  pronunciationScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  newWordsToggleButton.classList.remove("hidden");
}

function toggleWordsDirection() {
  wordsDirection = wordsDirection === "sv-pt" ? "pt-sv" : "sv-pt";
  expandedWordCardId = null;
  renderWordsList();
}

function renderWordsList() {
  if (!wordsList) {
    return;
  }

  const filteredCards = getCardsForWordsView();

  updateWordsScreenText(filteredCards.length);

  wordsDirectionButton.textContent =
    wordsDirection === "sv-pt" ? "Sueco → Português" : "Português → Sueco";

  wordsList.innerHTML = "";

  if (filteredCards.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "words-empty";
    emptyMessage.textContent = getEmptyWordsMessage();
    wordsList.appendChild(emptyMessage);
    return;
  }

  const sortedCards = sortCardsForWordsView(filteredCards);

  sortedCards.forEach((card) => {
    wordsList.appendChild(createWordItem(card));
  });
}

function getCardsForWordsView() {
  const filteredCards = getFilteredCards();

  if (wordsViewMode !== "wrong") {
    return filteredCards;
  }

  return filteredCards.filter((card) => {
    const cardStats = getExistingCardStats(card.id);

    return cardStats && (cardStats.wrong || 0) > 0;
  });
}

function getExistingCardStats(cardId) {
  return stats[String(cardId)] || null;
}

function updateWordsScreenText(cardCount) {
  if (wordsViewMode === "wrong") {
    wordsScreenTitle.textContent = "Palavras que mais erro";
    wordsScreenDescription.textContent =
      "Lista das palavras com erro salvo, respeitando os filtros escolhidos na configuração.";
    wordsCount.textContent =
      cardCount === 1
        ? "1 palavra com erro"
        : `${cardCount} palavras com erro`;
    return;
  }

  wordsScreenTitle.textContent = "Palavras";
  wordsScreenDescription.textContent =
    "Lista gerada de acordo com os filtros escolhidos na configuração.";
  wordsCount.textContent =
    cardCount === 1
      ? "1 palavra"
      : `${cardCount} palavras`;
}

function getEmptyWordsMessage() {
  if (wordsViewMode === "wrong") {
    return "Nenhuma palavra com erro encontrada com esses filtros.";
  }

  return "Nenhuma palavra encontrada com esses filtros.";
}

function sortCardsForWordsView(cardList) {
  if (wordsViewMode === "wrong") {
    return [...cardList].sort((a, b) => {
      const aStats = getExistingCardStats(a.id) || {};
      const bStats = getExistingCardStats(b.id) || {};

      const wrongDifference = (bStats.wrong || 0) - (aStats.wrong || 0);

      if (wrongDifference !== 0) {
        return wrongDifference;
      }

      const aRate = getWrongRate(aStats);
      const bRate = getWrongRate(bStats);

      if (bRate !== aRate) {
        return bRate - aRate;
      }

      return getWordPrimaryText(a).localeCompare(getWordPrimaryText(b), "sv-SE");
    });
  }

  return [...cardList].sort((a, b) => {
    const aText = getWordPrimaryText(a);
    const bText = getWordPrimaryText(b);

    return aText.localeCompare(bText, "sv-SE");
  });
}

function getWrongRate(cardStats) {
  const correct = cardStats.correct || 0;
  const wrong = cardStats.wrong || 0;
  const total = correct + wrong;

  if (total === 0) {
    return 0;
  }

  return wrong / total;
}

function getWordStatsSummary(card) {
  const cardStats = getExistingCardStats(card.id) || {};
  const correct = cardStats.correct || 0;
  const wrong = cardStats.wrong || 0;
  const total = correct + wrong;
  const wrongRate = total === 0 ? 0 : Math.round((wrong / total) * 100);

  return `${wrong} erro${wrong === 1 ? "" : "s"} · ${correct} acerto${correct === 1 ? "" : "s"} · ${wrongRate}% de erro`;
}

function createWordItem(card) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "word-item";
  button.dataset.cardId = String(card.id);

  const main = document.createElement("div");
  main.className = "word-item-main";

  const primary = document.createElement("strong");
  primary.textContent = getWordPrimaryText(card);

  const secondary = document.createElement("span");
  secondary.textContent = getWordSecondaryText(card);

  main.append(primary, secondary);
  button.appendChild(main);

  if (String(card.id) === String(expandedWordCardId)) {
    button.appendChild(createWordDetails(card));
  }

  return button;
}

function createWordDetails(card) {
  const details = document.createElement("div");
  details.className = "word-details";

  const meta = document.createElement("p");
  meta.className = "word-meta";
  meta.textContent = getWordMetaText(card);
  details.appendChild(meta);

  const hasAudio = Boolean(card.media?.audio?.src);
  const hasImage = Boolean(card.media?.image?.src);

  if (!hasAudio && !hasImage) {
    const noMedia = document.createElement("p");
    noMedia.className = "word-meta";
    noMedia.textContent = "Sem áudio ou imagem para esta palavra.";
    details.appendChild(noMedia);
    return details;
  }

  const mediaActions = document.createElement("div");
  mediaActions.className = "word-media-actions";

  if (hasAudio) {
    const audioButton = document.createElement("button");
    audioButton.type = "button";
    audioButton.className = "word-audio-button";
    audioButton.dataset.audioSrc = card.media.audio.src;
    audioButton.textContent = "Ouvir áudio";

    mediaActions.appendChild(audioButton);
  }

  if (hasImage) {
    const image = document.createElement("img");
    image.className = "word-image";
    image.src = card.media.image.src;
    image.alt = card.media.image.alt || card.term.swedish;
    image.loading = "lazy";

    mediaActions.appendChild(image);
  }

  details.appendChild(mediaActions);

  return details;
}

function getWordPrimaryText(card) {
  if (wordsDirection === "sv-pt") {
    return card.term.swedish;
  }

  return card.term.portuguese;
}

function getWordSecondaryText(card) {
  const translation = wordsDirection === "sv-pt"
    ? card.term.portuguese
    : card.term.swedish;

  if (wordsViewMode !== "wrong") {
    return translation;
  }

  return `${translation} · ${getWordStatsSummary(card)}`;
}

function getWordMetaText(card) {
  const parts = [];

  if (wordsViewMode === "wrong") {
    parts.push(getWordStatsSummary(card));
  }

  if (card.grammar?.type) {
    parts.push(`Tipo: ${card.grammar.type}`);
  }

  const themes = getCardThemes(card);

  if (themes.length > 0) {
    parts.push(`Tema: ${themes.join(", ")}`);
  }

  const source = getCardSource(card);

  if (source) {
    parts.push(`Origem: ${source}`);
  }

  if (source === "livro" && card.classification?.chapter) {
    parts.push(`Capítulo: ${card.classification.chapter}`);
  }

  if (source === "música" && getCardSourceTitle(card)) {
    parts.push(`Música: ${getCardSourceTitle(card)}`);
  }

  return parts.join(" · ");
}

function handleWordsListClick(event) {
  const audioButton = event.target.closest(".word-audio-button");

  if (audioButton) {
    event.stopPropagation();

    const audioSrc = audioButton.dataset.audioSrc;

    if (!audioSrc) {
      return;
    }

    const audio = new Audio(audioSrc);
    audio.play().catch((error) => {
      console.error("Erro ao tocar áudio da palavra:", error);
    });

    return;
  }

  const wordItem = event.target.closest(".word-item");

  if (!wordItem) {
    return;
  }

  const cardId = wordItem.dataset.cardId;

  if (String(expandedWordCardId) === String(cardId)) {
    expandedWordCardId = null;
  } else {
    expandedWordCardId = cardId;
  }

  renderWordsList();
}

function resetStats() {
  const shouldReset = window.confirm(
    "Tem certeza que deseja zerar acertos, erros e prioridades de todas as palavras?"
  );

  if (!shouldReset) {
    return;
  }

  stats = {};
  localStorage.removeItem(STORAGE_KEY);

  correctCount = 0;
  wrongCount = 0;
  sessionAnswers = [];

  setupMessage.textContent = "Progresso zerado. As palavras voltarão a ser tratadas como novas.";
}

const audioPreloadCache = new Map();

function preloadAudioForCard(card) {
  const audioSrc = card?.media?.audio?.src;

  if (!audioSrc || audioPreloadCache.has(audioSrc)) {
    return;
  }

  const audio = new Audio();
  audio.preload = "auto";
  audio.src = audioSrc;
  audio.load();

  audioPreloadCache.set(audioSrc, audio);
}

function preloadAudioForCards(cardList, limit = 6) {
  cardList
    .filter((card) => card?.media?.audio?.src)
    .slice(0, limit)
    .forEach(preloadAudioForCard);
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

resetStatsButton.addEventListener("click", resetStats);
wordsButton.addEventListener("click", () => openWordsScreen("all"));
wrongWordsButton.addEventListener("click", () => openWordsScreen("wrong"));
backFromWordsButton.addEventListener("click", backFromWordsScreen);
wordsDirectionButton.addEventListener("click", toggleWordsDirection);
wordsList.addEventListener("click", handleWordsListClick);

finishSessionButton.addEventListener("click", showSummary);
repeatSessionButton.addEventListener("click", repeatSession);
newSessionButton.addEventListener("click", backToSetup);

correctButton.addEventListener("click", () => markAnswer(true));
wrongButton.addEventListener("click", () => markAnswer(false));

newWordsToggleButton.addEventListener("click", toggleNewWordsMode);

sourceFilterGroup.addEventListener("change", () => {
  setupMessage.textContent = "";
  updateSourceSpecificFilters();
});

applySavedTheme();
updateNewWordsModeUI();
loadCards();
