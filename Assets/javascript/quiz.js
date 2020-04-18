// ----------  MAIN VARIABLES  ---------- //
const readyButtonElement = document.getElementById("ready-button");
const quizBoxElement = document.getElementById("quiz-box");
const questionElement = document.getElementById("questions");
const answerBtnsElement = document.getElementById("answer-btns");

let mixedQuestions, currentQuestion;




// ----------  TIMER  ---------- //
var remainTime = 90;

var countdown = setInterval(function () {
   if (remainTime <= 0) {
      return remainTime; // Got to add here the last page
   } else {
      document.getElementById("timer").innerHTML = remainTime + "<br>seconds remaining<br>but no pressure";
   }
   remainTime -= 1;
}, 1000);


// ----------  START GAME  ---------- //
window.onload = function hideAnswerButtons() {
   document.getElementById("answer-btns").style.display = "none";
   document.getElementById("timer").style.display = "none";
   
};

readyButtonElement.addEventListener("click", startGame);

function startGame() {
   readyButtonElement.classList.add("hide");
   document.getElementById("answer-btns").style.display = "";
   document.getElementById("timer").style.display = "";
};

// ----------  CONTINUE GAME  ---------- //
function nextQuestion() { 

};


function pickAnswer() { 

};






// ----------  QUESTIONS  ---------- //
const questions = [
   {
      question: "What's the meaning of JS?",
      answers: [
         { text: "JavaScript", correct: true },
         { text: "JadeServer", correct: false },
         { text: "JundleSate", correct: false },
         { text: "JSlate", correct: false },
      ]
   },
   {
      question: "JavaScript file has an extension of?",
      answers: [
         { text: ".java", correct: false },
         { text: ".js", correct: true },
         { text: ".javascript", correct: false },
         { text: ".xml", correct: false },
      ]
   },
   {
      question: "var numbers = [1,2,3] is an example of:",
      answers: [
         { text: "Array", correct: true },
         { text: "Function", correct: false },
         { text: "Object", correct: false },
         { text: "Method", correct: false },
      ]
   },
   {
      question: "What is a JavaScript element that represents either TRUE or FALSE values?",
      answers: [
         { text: "Event", correct: false },
         { text: "RegExp", correct: false },
         { text: "Boolean", correct: true },
         { text: "Condition", correct: false },
      ]
   },
];
