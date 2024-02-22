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
var time = 60;

var startBtn = document.getElementById('start-btn');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title');
var questionCardEl = document.getElementById('question-card');
var choicesEl = document.getElementById('choices');
var timeEl = document.getElementById('timer');

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
    //show wrong on screen
    //subtract time
    //conditional to make sure there is still time
  } else {
    correct.push(questions[Q]);
    console.log(correct);
    //show right on the screen
    //add time
  }
  Q++;
  if(Q===questions.length) {
    endGame()
  } else {
    buildQuestionCard();
  }
}
function endGame() {
  console.log(correct)
  questionCardEl.classList.add("hide")
  document.getElementById("endGame-card").classList.remove("hide")
  //clear out question div and buttons
  //display name input and score values on screen
  //add event listener to submit button.
}
function startQuiz() {
  startScreenEl.setAttribute('class', 'hide');
  questionCardEl.removeAttribute('class');
  buildQuestionCard();
}

startBtn.addEventListener('click', startQuiz);
