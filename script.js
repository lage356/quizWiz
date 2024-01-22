//?Here i do all my Query selectors
// Selects h1 timer element by class
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".questionsHere");
var quizWelcome = document.querySelector(".quiz-welcome");
var gameTitle = document.querySelector(".titleW");
var gameInstru = document.querySelector(".quiz-instr");
var gameContainer = document.querySelector(".game-container");
var quizAnswers = document.getElementById("quiz-answers");
var startButton = document.querySelector(".startButton");
var displayRetro = document.querySelector(".renderValid");

//? Here a declare variables
var secondsLeft = 100;

var finish = "All Done!";
let currentQuestionIndex = 0;
let score = 0;

// var questionOne = "Commonly used data types DO NOT iclude:";
// var questionTwo =
//   "The condition in an if/else statement is enclosed within _______.";
// var questionThree = "Arrays in JavaScript can be used to store ___________.";
// var questionFour =
//   "String values must be enclosed within ________ when being assigned to variables";
// var questionFive =
//   "A very useful tool used during development and debugging for printing content to the debugger is: ";
// var answersOne = ["Strings", "Booleans", "Alerts", "Numbers"];
// var answersTwo = ["Quotes", "Curly-brackets", "Parentheses", "Square-brackets"];
// var asnwersThree = [
//   "Numbers and strings",
//   "Other arrays",
//   "Booleans",
//   "All of the above",
// ];
// var answersFour = ["Commas", "Curly brackets", "Quotes", "Parentheses"];

const quizObject = [
  {
    question: "Commonly used data types DO NOT iclude:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
  {
    question:
      "The condition in an if/else statement is enclosed within _______.",
    answers: ["Quotes", "Curly-brackets", "Parentheses", "Square-brackets"],
    correctAnswer: "Curly-brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store ___________.",
    answers: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables",
    answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: ["Javascript", "Terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

function startGame() {
  currentQuestion =0; 
  currentQuestionIndex = 0
  secondsLeft = 100;
  clearInterval();
  setTime();
  hideWelcome();
  unhideQuizSection();
  renderQuestions();
}

function init() {
  var welcomeH = "Coding Quiz Challenge";
  var instructionsP =
    "Try to answer the following code-related questions within the time limit. Keep inmind that incorrect answers will penalize your scoretime by 10 seconds!";
  gameTitle.textContent = welcomeH;
  gameInstru.textContent = instructionsP;
}

function hideWelcome() { 
    quizWelcome.style.display= "none";
}
function showWelcome() { 
    quizWelcome.style.display= "contents";
}

init();

function renderQuestions() {
  const currentQuestion = quizObject[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  quizAnswers.innerHTML = "";
  currentQuestion.answers.forEach((answers, index) => {
    const answerElement = document.createElement("li");
    answerElement.className = "answers";
    answerElement.textContent = answers;
    answerElement.addEventListener("click", () => selectOption(index));
    quizAnswers.appendChild(answerElement);
  });
}

function selectOption(answersIndex) {
    
  const selectedOption = quizObject[currentQuestionIndex].answers[answersIndex];

  if (selectedOption === quizObject[currentQuestionIndex].correctAnswer) {
    score++;
    displayRetro.textContent = "Correct!";
  } else {
    secondsLeft = secondsLeft - 10;
    displayRetro.textContent = "Incorrect!";
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < quizObject.length) {
    renderQuestions();
  } else {
    showWelcome();
    hideQuizSection();
    secondsLeft = 1;
    
//    currentQuestionIndex=0;
  }
  
}

function hideQuizSection() {
    gameContainer.style.display= "none";
}
function unhideQuizSection() {
    gameContainer.style.display= "contents";
}

function setTime() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);
