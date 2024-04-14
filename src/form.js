// form.html
const questions = [
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What is 10 - 2?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mercury", "Venus", "Earth", "Jupiter"],
    answer: "Jupiter",
  },
  {
    question: "What is 4 * 3?",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
  {
    question: "What is 15 / 3?",
    options: ["3", "4", "5", "6"],
    answer: "5",
  },
];
const NUMBER_OF_OPTIONS = 4;
var QUESTION_NUMBER = 0;
var SELECTED_OPTION_ID = "";
// Function to handle click on answer form and change style property when chosen
function selectOption(selectedOption) {
  var allOptions = document.querySelectorAll(".anwerForm");
  allOptions.forEach(function (option) {
    option.style.fontWeight = "500";
    option.style.border = "1px solid var(--muted-color)";
    option.style.color = "black";
  });

  selectedOption.style.fontWeight = "700";
  selectedOption.style.border = "3px solid var(--branding-color)";
  selectedOption.style.color = "var(--branding-color)";
  SELECTED_OPTION_ID = selectedOption.id;
}

//Function to update questions and answers inside the form with the q&a from the object
document.addEventListener("DOMContentLoaded", function () {
  displayQuestion(0);
});

function displayQuestion(questionIndex) {
  const triviaQuestion = document.getElementById("triviaQuestion");
  if (triviaQuestion) {
    triviaQuestion.innerText = questions[questionIndex].question;
  } else {
    console.error("Could not find the trivia question :(.");
  }
  for (let i = 1; i <= NUMBER_OF_OPTIONS; i++) {
    const a = document.getElementById("answer" + i);
    a.innerText = questions[questionIndex].options[i - 1];
  }
}

function checkAnswer() {
  if (SELECTED_OPTION_ID == "") {
    return;
  }
  o = document.getElementById(SELECTED_OPTION_ID);
  user_answer = o.innerText;
  answer = questions[QUESTION_NUMBER].answer;
  if (user_answer == answer) {
    color_green(o);
  }

  color_red(o);
  for (let i = 1; i <= NUMBER_OF_OPTIONS; i++) {
    const a = document.getElementById("answer" + i);
    if (a.innerText == questions[QUESTION_NUMBER].answer) {
      color_green(a);
      break;
    }
  }
}

function color_green(option) {
  option.style.background = "green";
}

function color_red(option) {
  option.style.background = "red";
}

function proceed() {
  var allOptions = document.querySelectorAll(".anwerForm");
  allOptions.forEach(function (option) {
    option.style.fontWeight = "500";
    option.style.border = "1px solid var(--muted-color)";
    option.style.color = "black";
    option.style.background = "transparent";
  });

  QUESTION_NUMBER++;
  if (QUESTION_NUMBER >= questions.length) {
    window.location.href = "index.html";
  }

  var b = document.getElementById("triviaQuestion");
  b.innerText = questions[QUESTION_NUMBER].question;

  for (let i = 1; i <= NUMBER_OF_OPTIONS; i++) {
    const a = document.getElementById("answer" + i);
    a.innerText = questions[QUESTION_NUMBER].options[i - 1];
  }
}
