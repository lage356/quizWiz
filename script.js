//?Here i do all my Query selectors
// Selects h1 timer element by class
var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".questionsHere");
var quizWelcome = document.querySelector(".quiz-welcome");
var gameContainer = document.querySelector(".game-container");
var startButton = document.querySelector(".startButton");

//? Here a declare variables
var secondsLeft = 10;
var welcomeH = "Coding Quiz Challenge";
var instructionsP =
  "Try to answer the following code-related questions within the time limit. Keep inmind that incorrect answers will penalize your scoretime by 10 seconds!";
var questionOne = "Commonly used data types DO NOT iclude:";
var questionTwo =
  "The condition in an if/else statement is enclosed within _______.";
var questionThree = "Arrays in JavaScript can be used to store ___________.";
var questionFour =
  "String values must be enclosed within ________ when being assigned to variables";
var questionFive =
  "A very useful tool used during development and debugging for printing content to the debugger is: ";
var finish = "All Done!";

var answersOne = ["Strings", "Booleans", "Alerts", "Numbers"];
var answersTwo = ["Quotes", "Curly-brackets", "Parentheses", "Square-brackets"];
var asnwersThree = [
  "Numbers and strings",
  "Other arrays",
  "Booleans",
  "All of the above",
];
var answersFour = ["Commas", "Curly brackets", "Quotes", "Parentheses"];

const quizQuestAns = [
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
    answers: ["Numbers and strings",
    "Other arrays",
    "Booleans",
    "All of the above"], 
    correctAnswer: "All of the above"
  }, 
  {
    question: "String values must be enclosed within ________ when being assigned to variables",
    answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    answers: ["Javascript", "Terminal/bash","for loops","console.log"],
    correctAnswer: "console.log"
  }
];

function startGame() {
  setTime();
  startButton.disabled = true;
  renderQuestions();
}

function renderQuestions() {
  questionEl.textContent = questionOne;

  var quizAnswers = document.getElementById("quiz-answers");

  var ol = document.createElement("ol");

  for (var i = 0; i < answersOne.length; i++) {
    var li = document.createElement("li");

    li.textContent = answersOne[i];

    ol.appendChild(li);
  }

  quizAnswers.appendChild(ol);
}

function setTime() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);
