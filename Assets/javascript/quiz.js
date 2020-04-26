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


// ----------  ID Variables  ---------- //
var pageTitleEl = document.getElementById("pageTitle");
var boxEl = document.getElementById("box");
var timerEl = document.getElementById("timer");
var buttonsBoxEl = document.getElementById("buttonsBox")
var formBoxEl = document.getElementById("formBox")
var scoresBoxEl = document.getElementById("scoresBox");



// ----------  Class Variables  ---------- //
var introEl = document.querySelector(".intro");
var introButtonEl = document.querySelector(".introButton");
var questionButtonEl = document.querySelector(".questionButton");
var questionsEl = document.querySelector(".questions");
var scoreEl = document.querySelector(".score");


// ----------  Other Variables  ---------- //
var currentQuestionIndex = 0;

// ----------  TIMER  ---------- //
var remainTime = 90;
// document.querySelector(".introButton").onclick = startCountdown;
var startCountdown = "";

function timer() {
startCountdown =
   setInterval(function () {
      countTimer()
   }, 1000);
   
   function countTimer() {
      document.getElementById("timer").innerHTML = remainTime + "<br>seconds remaining<br>but no pressure";
      remainTime--;
      if (remainTime === 0) {
         clearInterval(startCountdown);
         endGame();
      };
   };
};
         
// ----------  FIRST PAGE  ---------- //
function firstPage() {
   formBoxEl.style.display = "none";
   pageTitleEl.textContent = "Coding Quiz Challenge";
   introEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
   introButtonEl.textContent = "Ready?"
};
firstPage();

// ----------  START GAME  ---------- //
// introButtonEl.addEventListener("click", endGame);
// introButtonEl.addEventListener("click", highScores);
introButtonEl.addEventListener("click", timer);
introButtonEl.addEventListener("click", startGame);


function startGame() {
   // ----------  Show Questions  ---------- //
   function showQuestion() {
      var currentQuestion = questions[currentQuestionIndex];
      if (currentQuestionIndex == questions.length) {
         endGame();
         return;
      }
      
      buttonsBoxEl.innerHTML = "";
      
      questionsEl.textContent = currentQuestion.question;
      
      console.log(currentQuestionIndex);
      currentQuestion.answers.forEach(function (choice, i) {
         var optionNode = document.createElement("button");
         
         optionNode.setAttribute("class", "btn");
         optionNode.setAttribute("value", choice);
         optionNode.textContent = choice;
         optionNode.onclick = questionClick;
         
         buttonsBoxEl.appendChild(optionNode);

         function questionClick() {
            if (this.value === questions[currentQuestionIndex].correct) {
               optionNode.style.backgroundColor = "#3F730A";
               optionNode.style.color = "#C9EBF2";
               optionNode.textContent = "CORRECT";
               currentQuestionIndex++;
               
            } else {
               if (remainTime > 10) {
                  remainTime -= 10;
               } else {
                  remainTime = 1;
               }
               optionNode.style.backgroundColor = "#A60303";
               optionNode.style.color = "#C9EBF2";
               optionNode.textContent = "WRONG";
               currentQuestionIndex++;
            }; 
            setTimeout(showQuestion, 400);
         };
      });
   };
   showQuestion();
};

// ----------  GAME END  ---------- //
function endGame() {
   buttonsBoxEl.style.display = "none";
   introButtonEl.style.display = "none";
   scoresBoxEl.style.display = "none";
   formBoxEl.style.display = "";
   pageTitleEl.textContent = "Well Done!!!";
   scoreEl.textContent = `${remainTime} is your score!`;
   timerEl.style.display = "none";
   clearInterval(startCountdown);
   
   // // ----------  Creating the Form  ---------- //
   // var inputForm = document.createElement("input"); //add ID or class | Global scope
   // inputForm.type = "text";
   // // input.name = "initials";
   // inputForm.placeholder = "enter your initials"
   // formBoxEl.appendChild(inputForm);
   
   // var submitButton = document.createElement("a");
   // submitButton.type = "submit";
   // submitButton.textContent = "submit";
   // submitButton.setAttribute("class", "btn");
   // formBoxEl.appendChild(submitButton);
   
   
   //----------  SCORES  ---------- //
   var backButton = document.createElement("a");
   backButton.type = "submit";
   backButton.textContent = "Go Back";
   backButton.setAttribute("class", "btn");
   scoresBoxEl.appendChild(backButton);
   
   var clearButton = document.createElement("a");
   clearButton.type = "submit";
   clearButton.textContent = "Clear Scores";
   clearButton.setAttribute("class", "btn");
   scoresBoxEl.appendChild(clearButton);
   
   
   function highScores() {
      pageTitleEl.textContent = "High Scores";
      introButtonEl.style.display = "none";
      formBoxEl.style.display = "none";
      scoresBoxEl.style.display = "";
      scoreEl.style.display = "none";
   };
   
   submitButton.addEventListener("click", highScores);
   // ----------  Local Storage  ---------- //
   var inputValueEl = document.getElementById("inputValue");
   var submitButtonEl = document.getElementById("submitButton");
   var scoreIndexEl = document.getElementById("scoreIndex")

   submitButtonEl.onclick = function () {
      var value = inputValueEl.value;

      console.log(value);
      scoreIndexEl.innerHTML += `${value} - ${remainTime}`;
   };




   // for (let i = 0; i < localStorage.length; i++) {
   //    var value = localStorage.getItem.value(i);

   //    scoreIndexEl.innerHTML += `${value}`;

   //    console.log(value);
      
      
   // }
   
   
   // ----------  Clear Button  ---------- //
   clearButton.addEventListener("click", function() {
      localStorage.clear();
      // while (scoreList.firstChild) {
      //    scoreList.removeChild(scoreList.firstChild);
      // }
      itemsArray = [];
   });
   
   // ----------  Back Button  ---------- //
   function reloadPage() {
      window.location.href = "./index.html";
   };
   backButton.addEventListener("click", reloadPage);
   
};

console.log(localStorage);
      
      
      
      
      
      

// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
