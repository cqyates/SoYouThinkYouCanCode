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
    question: 'Where in our code do we keep the styling',
    choices: [
      'in a styles.css file',
      'between two style tags',
      'inside our html with the style attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  },
  {
    question: 'Where in our code do we keep the styling',
    choices: [
      'in a styles.css file',
      'between two style tags',
      'inside our html with the style attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  },
  {
    question: 'Where in our code do we keep the styling',
    choices: [
      'in a styles.css file',
      'between two style tags',
      'inside our html with the style attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  },
  {
    question: 'Where in our code do we keep the styling',
    choices: [
      'in a styles.css file',
      'between two style tags',
      'inside our html with the style attribute',
      'all of the above'
    ],
    answer: 'all of the above'
  }
];

var Q = 0;

var startBtn = document.getElementById('start-btn');
var startScreenEl = document.getElementById('start-screen');
var questionTitleEl = document.getElementById('question-title');
var questionCardEl = document.getElementById('question-card');
var choicesEl = document.getElementById('choices');

function buildQuestionCard() {
  var currentQuestion = questions[Q];

  questionTitleEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = '';

  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = choice;

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  console.log(this.value);
}

function startQuiz() {
  startScreenEl.setAttribute('class', 'hide');
  questionCardEl.removeAttribute('class');
  buildQuestionCard();
}

startBtn.addEventListener('click', startQuiz);
