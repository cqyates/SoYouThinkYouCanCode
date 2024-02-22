//questions array
var questions = [
  {
    question: 'Where in our code do we keep the styling?',
    choices: [
      'in a style.css file',
      'between two style tags',
      'inside our html with the style attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  },
  {
    question: 'Java short for Javascript',
    choices: ['true', 'false'],
    answer: 'false'
  },
  {
    question: 'Which of these are array methods?',
    choices: [
      'push, pull, forEach, map',
      'forEach, filter, map, state',
      'push, filter, forEach, map'
    ],
    answer: 'push, filter, forEach, map'
  },
  {
    question: '_________ is a Javascript library for DOM manipulation',
    choices: ['Node.js', 'JQuery', 'MySQL', 'Bootstrap'],
    answer: 'JQuery'
  },
  {
    question: 'Where in our code do we keep the javascript logic',
    choices: [
      'in a script.css file',
      'between two script tags',
      'inside our html with the onclick attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  }
];

var Q = 0;
var correct = [];
var time;
var highScoresArray = JSON.parse(localStorage.getItem("high-scores")) || []
var startBtn = document.getElementById('start-btn');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title');
var questionCardEl = document.getElementById('question-card');
var choicesEl = document.getElementById('choices');
var timeEl = document.getElementById('timer');
let timeLeft;
let timeInterval;
function buildQuestionCard() {
  var currentQuestion = questions[Q];

  questionTitleEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = '';

  currentQuestion.choices.forEach(function(choice, i) {
    var choiceBtn = document.createElement('button');
    choiceBtn.setAttribute('class', 'choice');
    choiceBtn.setAttribute('value', choice);

    choiceBtn.textContent = choice;

    choiceBtn.onclick = questionClick;

    choicesEl.appendChild(choiceBtn);
  });

  // timeEl.textContent = time;
}

function questionClick() {
  //if the answer is wrong
  if (this.value !== questions[Q].answer) {
    console.log('wrong');
    time -= 10
    if (time < 0) {
      endGame()
    }
    //conditional to make sure there is still time
  } else {
    correct.push(questions[Q]);
    time += 10
    //show right on the screen
  }
  Q++;
  if(Q===questions.length) {
    endGame()
  } else {
    buildQuestionCard();
  }
}
function endGame() {
  questionCardEl.classList.add("hide")
  document.getElementById("endGame-card").classList.remove("hide")
  timeLeft = time;
  clearInterval(timeInterval)
  if (timeLeft === 0 || correct.length ===0) {
    document.getElementById("status").textContent = "Lose!"
    document.getElementById("score-form").classList.add("hide")
    document.getElementById("reset").classList.remove("hide")
  } else {
    document.getElementById("status").textContent = `Won! Your Score is ${correct.length*timeLeft}`
  }
}
function startQuiz() {
  Q=0;
  time=60;
  startScreenEl.setAttribute('class', 'hide');
  document.getElementById("endGame-card").classList.add("hide")
  questionCardEl.removeAttribute('class');
  buildQuestionCard();
 timeInterval= setInterval(runTimer, 1000)
}
function runTimer() {
  time--;
  if(time < 0 ) {
    time = 0
  }
  timeEl.textContent = time
  
}
startBtn.addEventListener('click', startQuiz);
document.getElementById("score-form").addEventListener("submit", function(){
  var firstName = document.getElementById("first").value
  var lastName = document.getElementById("last").value
  var score = correct.length*timeLeft;
  var scoreObject = {firstName, lastName, score}
  highScoresArray.push(scoreObject)
  localStorage.setItem("high-scores", JSON.stringify(highScoresArray))
})