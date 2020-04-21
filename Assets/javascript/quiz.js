
// ----------  QUIZ QUESTIONS  ---------- //
var questions = [
   {
      question: "What's the meaning of JS?",
      answers: ["JavaScript", "JadeServer", "JundleSate", "JSlate"],
      correct: "JavaScript"
   },{
      question: "JavaScript file has an extension of?",
      answers: [".java", ".js", ".javascript", ".xml"],
      correct: ".js"
   },{
      question: "var numbers = [1,2,3] is an example of:",
      answers: ["Array", "Function", "Object", "Method"],
      correct: "Array"
   }, {
      question: "What is a JavaScript element that represents either TRUE or FALSE values?",
      answers: ["Event", "RegExp", "Boolean", "Condition"],
      correct: "Boolean"
   }
];

// ----------  MAIN VARIABLES  ---------- //
var readyButtonElement = document.getElementById("ready-button");
var quizBoxElement = document.getElementById("quiz-box");
var questionElement = document.getElementById("questions");
var quizQuestionElement = document.getElementById("quizQuestion");
// var answerBtnsElement = document.getElementById("answer-btns");

var mixedQuestions, currentQuestion;

var introTextElement = document.getElementById("intro");


// ----------  TIMER  ---------- //
var remainTime = 90;
const countdown = document.getElementById("ready-button").onclick = function countdown() {
   setInterval(function countdownF() {
      if (remainTime <= 0) {
         return remainTime; // Got to add here the last page
      } else {
         document.getElementById("timer").innerHTML = remainTime + "<br>seconds remaining<br>but no pressure";
      }
      remainTime -= 1;
   }, 1000);
};

// ----------  START GAME  ---------- //
window.onload = function hideAnswerButtons() {
   document.getElementById("answer-btns").style.display = "none";
   document.getElementById("timer").style.display = "none";
   introTextElement.classList.remove("hide");
};


function startGame() {
   quizQuestionElement.classList.remove("hide");   
   readyButtonElement.classList.add("hide");
   introTextElement.classList.add("hide");
   document.getElementById("answer-btns").style.display = "";
   document.getElementById("timer").style.display = "";
};

readyButtonElement.addEventListener("click", startGame);


// ----------  CONTINUE GAME  ---------- //
function showQuestion() {
   var option1Element = document.getElementById("option1");
   var option2Element = document.getElementById("option2");
   var option3Element = document.getElementById("option3");
   var option4Element = document.getElementById("option4");
   
   // ----------  Questions showing in the Quiz  ---------- //
   document.getElementById("quizQuestion").innerHTML += questions[0];

   
   // ----------  Options of answers showing in the Quiz  ---------- //
   document.getElementById("option1").innerHTML += questions;
   document.getElementById("option2").innerHTML += questions;
   document.getElementById("option3").innerHTML += questions;
   document.getElementById("option4").innerHTML += questions;
   
   

   console.log("test");
};

showQuestion();
      
// ----------  Check ANSWERS  ---------- //
function checkAnswer(answer) {
   if (questions[currentQuestion].correct == answer) {
      // go to next question
   } else {
      // deduct 10 seconds from time and got to next question
   }
};

// ----------  ANSWER IS CORRECT OR WRONG  ---------- //
function answerIsCorrect() {
   document.getElementById(currentQuestion).style.backgroundColor = "#3F730A"
}

function answerIsWrong() {
   document.getElementById(currentQuestion).style.backgroundColor = "#A60303"
}

function pickAnswer() { 

};
