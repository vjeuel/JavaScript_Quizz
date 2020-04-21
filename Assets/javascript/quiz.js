
// ----------  QUIZ QUESTIONS  ---------- //
var questions = [
   {
      question: "What's the meaning of JS?",
      answers: ["JavaScript", "JadeServer", "JundleSate", "JSlate"],
      correct: "JavaScript"
   },
   {
      question: "JavaScript file has an extension of?",
      answers: [".java", ".js", ".javascript", ".xml"],
      correct: ".js"
   },
   {
      question: "var numbers = [1,2,3] is an example of:",
      answers: ["Array", "Function", "Object", "Method"],
      correct: "Array"
   },
   {
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
var currentQuestionIndex = 0;
var optionElement = document.getElementById("answer-btns");

var introTextElement = document.getElementById("intro");
var quizTitleElement = document.getElementById("question-title");

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
   console.log("start")

   quizQuestionElement.classList.remove("hide");   
   readyButtonElement.classList.add("hide");
   introTextElement.classList.add("hide");
   document.getElementById("answer-btns").style.display = "";
   document.getElementById("timer").style.display = "";
};

readyButtonElement.addEventListener("click", startGame);



// ----------  CONTINUE GAME  ---------- //
function showQuestion() {
   var currentQuestion = questions[currentQuestionIndex];
   
   optionElement.innerHTML = "";
   
   quizTitleElement.textContent = currentQuestion.question;
   currentQuestion.answers.forEach(function (choice, i) {
      var optionNode = document.createElement("button");
      optionNode.setAttribute("class", "btn");
      optionNode.setAttribute("value", choice);
      optionNode.textContent = choice;
      optionNode.onclick = questionClick;
      
      optionElement.appendChild(optionNode);
      
      function questionClick() {
         if (this.value == questions[currentQuestionIndex].correct) {
            console.log("correct");
            
            currentQuestionIndex++;
         } else {
            if (remainTime > 10) {
               remainTime -= 10;
            } else {
               remainTime = 1;
            }
            console.log("incorrect");
            currentQuestionIndex++;
            
         }
         console.log(currentQuestionIndex)
         showQuestion();
      };
   });
};

showQuestion();

// ----------  GAME OVER  ---------- //
function gameOver() {
   if (remainTime == 0) {
      window.location.href = "gameover.html";
   }
   
};

      
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
   optionNode.style.backgroundColor = "#3F730A"
}

function answerIsWrong() {
   document.getElementById(currentQuestion).style.backgroundColor = "#A60303"
}

function pickAnswer() { 

};
