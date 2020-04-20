// ----------  MAIN VARIABLES  ---------- //
const readyButtonElement = document.getElementById("ready-button");
const quizBoxElement = document.getElementById("quiz-box");
const questionElement = document.getElementById("questions");
const answerBtnsElement = document.getElementById("answer-btns");

let mixedQuestions, currentQuestion;




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
   
};

readyButtonElement.addEventListener("click", startGame);

function startGame() {
   readyButtonElement.classList.add("hide");
   // document.getElementById("intro").style.display = "none";
   document.getElementById("answer-btns").style.display = "";
   document.getElementById("timer").style.display = "";
   mixedQuestions = questions.sort(() => Math.random() - 0.5);
   currentQuestion = 0;
};

// ----------  CONTINUE GAME  ---------- //
function nextQuestion() {
   showQuestion(mixedQuestions[currentQuestion]);
};



function showQuestion() {
   let q = questions[currentQuestion];
   
   question.innerHTML = "<p>" + q.question +"</p>";
   option1.innerHTML = q.option1;
   option2.innerHTML = q.option2;
   option3.innerHTML = q.option3;
   option4.innerHTML = q.option4;
   
   // question.answers.forEach(answer => {
      //    const button = document.createElement("button");
      //    button.innerText = answer.text;
      //    button.classList.add("btn");
      //    if (answer.correct) {
         //       button.dataset.correct = answer.correct;
         //    };
         //    button.addEventListener("click", pickAnswer);
         //    answerBtnsElement.appendChild(button);
         // });
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
   document.getElementById(currentQuestion).style.backgroundColor = "#3F730A"
}

function answerIsWrong() {
   document.getElementById(currentQuestion).style.backgroundColor = "#A60303"
}

function pickAnswer() { 

};






// ----------  QUESTIONS  ---------- //
// function questions(question, answers, correct) {
//    this.quizQuestion = question;
//    this.quizAnswers = answers;
//    this.quizCorrect = correct;
// }

let questions = [
   {
      question: "What's the meaning of JS?",
      option1: "JavaScript",
      option2: "JadeServer",
      option3: "JundleSate",
      option4: "JSlate",
      correct: "A"
   }, {
      question: "JavaScript file has an extension of?",
      option1: ".java",
      option2: ".js",
      option3: ".javascript",
      option4: ".xml",
      correct: "B"
   }, {
      question: "var numbers = [1,2,3] is an example of:",
      option1: "Array",
      option2: "Function",
      option3: "Object",
      option4: "Method",
      correct: "A"
   }, {
      question: "What is a JavaScript element that represents either TRUE or FALSE values?",
      option1: "Event",
      option2: "RegExp",
      option3: "Boolean",
      option4: "Condition",
      correct: "C"
   }
];

console.log(questions);

// let questions = [
//    {
//       question: "What's the meaning of JS?",
//       answers: [
//          { text: "JavaScript", correct: true },
//          { text: "JadeServer", correct: false },
//          { text: "JundleSate", correct: false },
//          { text: "JSlate", correct: false },
//       ]
//    },
//    {
//       question: "JavaScript file has an extension of?",
//       answers: [
//          { text: ".java", correct: false },
//          { text: ".js", correct: true },
//          { text: ".javascript", correct: false },
//          { text: ".xml", correct: false },
//       ]
//    },
//    {
//       question: "var numbers = [1,2,3] is an example of:",
//       answers: [
//          { text: "Array", correct: true },
//          { text: "Function", correct: false },
//          { text: "Object", correct: false },
//          { text: "Method", correct: false },
//       ]
//    },
//    {
//       question: "What is a JavaScript element that represents either TRUE or FALSE values?",
//       answers: [
//          { text: "Event", correct: false },
//          { text: "RegExp", correct: false },
//          { text: "Boolean", correct: true },
//          { text: "Condition", correct: false },
//       ]
//    },
// ];
