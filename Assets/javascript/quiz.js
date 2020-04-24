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


// ----------  Class Variables  ---------- //
var introEl = document.querySelector(".intro");
var introButtonEl = document.querySelector(".introButton");
var questionButtonEl = document.querySelector(".questionButton");
var questionsEl = document.querySelector(".questions");
var scoreEl = document.querySelector(".score");


// ----------  Other Variables  ---------- //
var currentQuestionIndex = 0;

// document.querySelector(".introButton").on("click", startGame);

// ----------  TIMER  ---------- //
var remainTime = 50;
function timer() {
document.querySelector(".introButton").onclick = startCountdown;
var startCountdown =
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
introButtonEl.addEventListener("click", timer);
introButtonEl.addEventListener("click", startGame);


function startGame() {
   // ----------  Show Questions  ---------- //
   function showQuestion() {
      if (currentQuestionIndex == questions.length) {
         endGame();
      };
      var currentQuestion = questions[currentQuestionIndex];
      
      buttonsBoxEl.innerHTML = "";
      
      questionsEl.textContent = currentQuestion.question;
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
            }
            
            setTimeout(showQuestion, 400);
         };
         
      });
   };
   showQuestion();
};

// ----------  GAME END  ---------- //
function endGame() {
   // clearInterval(countdown);
   buttonsBoxEl.style.display = "none";
   introButtonEl.style.display = "none";
   formBoxEl.style.display = "";
   pageTitleEl.textContent = "Well Done!!!";
   scoreEl.textContent = `${remainTime} is your score!`;
   timerEl.textContent = "";
   
   // ----------  Creating the Form  ---------- //
   // var initials = document.createElement("p");
   // initials.textContent = "Enter initials: ";
   // buttonsBoxEl.appendChild(initials);
   
   var input = document.createElement("input");
   input.type = "text";
   input.name = "initials";
   input.placeholder = "enter your initials"
   formBoxEl.appendChild(input);
   
   var submitButton = document.createElement("submit");
   var aTag = document.createElement("a");
   formBoxEl.appendChild(submitButton);
   submitButton.appendChild(aTag);
   submitButton.type = "submit";
   aTag.textContent = "submit";
   submitButton.setAttribute("class", "btn");
   
   
};
console.log("final test");











// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
// ----------  TIMER  ---------- //
