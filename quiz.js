var questions = [
    {
    question: "What does HTML stand for?", options: [
    "Hyperlink and Text Markup Language", "Hypertext Markup Language",
    "High Tech Modern Language", "Hyper Transfer Markup Language"
    ],
    correctIndex: 1
    },
    {
    question: "Which programming language is known as the 'language of the web'?",
    options: [ "Python", "JavaScript", "Java", "C++"
    ],
    correctIndex: 1
},
{
question: "What does CSS stand for?", options: [
"Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"
],
correctIndex: 1
},
{
question: "Which company developed the JavaScript programming language?",
options: [ "Microsoft", "Google", "Netscape", "Apple"
],
correctIndex: 2
},
{
question: "What is the largest planet in our solar system?", options: [
"Mars",
"Saturn", "Jupiter", "Neptune"
],
correctIndex: 2
},
{
question: "Which data type in JavaScript can hold both numbers and strings?",
options: [ "boolean", "array",
"object", "variable"
],
correctIndex: 2
},
{
question: "Which famous scientist developed the theory of relativity?",
options: [
    "Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"
],
correctIndex: 1
},
{
question: "What does CPU stand for?", options: [
"Central Processing Unit", "Computer Personal Unit", "Central Printed Unit", "Computer Processor Unit"
],
correctIndex: 0
},
{
question: "Which planet is known as the 'Red Planet'?", options: [
"Venus",
"Mars", "Jupiter", "Saturn"
],
correctIndex: 1
},
{
question: "In which year did World War II end?", options: [
"1945",
"1918",
"1939",
"1950"
],
correctIndex: 0
}
];
var progressBar = document.getElementById("progress-bar"); var progressValue = 0;
progressBar.style.width = "0";

var currentQuestionIndex = 0;
var submitButton = document.getElementById("submit-btn"); var correctAnswers = 0;
var questionNumberElement = document.getElementById("question-number"); var questionElement = document.getElementById("question");
var optionsContainer = document.getElementById("options");
var resultElement = document.getElementById("result");

submitButton.addEventListener("click", checkAnswer);

function displayQuestion() {
var currentQuestion = questions[currentQuestionIndex]; questionNumberElement.textContent = "Question " +
(currentQuestionIndex + 1);
questionElement.textContent = currentQuestion.question;

optionsContainer.innerHTML = ""; currentQuestion.options.forEach(function (option, index) {

var optionLabel = document.createElement("label"); var optionInput = document.createElement("input"); optionInput.type = "radio";
optionInput.name = "answer"; optionInput.value = index.toString(); optionLabel.appendChild(optionInput);
optionLabel.appendChild(document.createTextNode(option)); optionsContainer.appendChild(optionLabel); optionsContainer.appendChild(document.createElement("br"));

});
var progressPercentage = Math.round((currentQuestionIndex / questions.length) * 100);
progressBar.style.width = progressPercentage + "%";

resultElement.textContent = "";
}

function checkAnswer() { var selectedAnswer = document.querySelector("input[name='answer']:checked");

if (selectedAnswer) {
var userAnswer = parseInt(selectedAnswer.value);
var correctIndex = questions[currentQuestionIndex].correctIndex;

if (userAnswer === correctIndex) { resultElement.textContent = "Correct!"; correctAnswers++; // Increment correct answers counter
} 
else {
resultElement.textContent = "Incorrect. The correct answer is: " + questions[currentQuestionIndex].options[correctIndex];
}

currentQuestionIndex++;
if (currentQuestionIndex < questions.length) { displayQuestion();
} 
else {
questionNumberElement.textContent = "Quiz completed!"; questionElement.textContent = ""; optionsContainer.innerHTML = ""; submitButton.style.display = "none";

if(correctAnswers<=4){
progressBar.style.width = 100 + "%"; progressBar.classList.add("completed-progress");


resultElement.textContent = "Your score: " + correctAnswers + " out of " + questions.length+" Keep practising !!";




}
else if(correctAnswers<=7){ progressBar.style.width = 100 + "%";
progressBar.classList.add("completed-progress");

resultElement.textContent = "Your score: " + correctAnswers + " out of " + questions.length+" Good try !!";


}
else{
progressBar.style.width = 100 + "%"; progressBar.classList.add("completed-progress"); resultElement.textContent = "Your score: " + correctAnswers +
" out of " + questions.length+" Excellent!!!!";

}
}
}
}

displayQuestion();
    