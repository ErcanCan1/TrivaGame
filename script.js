var questions = ["What planet is known as the 'Red Planet'?",
  "Who paineted the Mona Lisa?"
];
var choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"],
  ["Donadello", "Rafael", "Leonardo", "Michalangelo"]
];
var correctAnswers = ["Mars", "Leonardo"];
var currentQuestionIndex = 0;
var score = 0;

function checkAnswer(button) {
  const result = document.getElementById('result');
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score++;
    result.innerHTML = 'Correct';
  } else {
    result.innerHTML = 'Wrong';
  }
for (let i = 1; i<=4; i++){
  document.getElementById("choice" + i).disabled =true;
}
if (currentQuestionIndex >= questions.length - 1) {
    document.getElementById("retry").style.display = "block";
    result.innerHTML += '. Game over! Your score is: ' + score;
  } else {
    currentQuestionIndex++;
    setTimeout(displayQuestion, 2000); // Wait before next question
  }
}

function displayQuestion() {
  // Display the current question
  document.getElementById("question").innerHTML = questions[currentQuestionIndex];
  
  // Retrieve and display the choices for the current question
  const choices = choicesArray[currentQuestionIndex];
  for (let i = 0; i < choices.length; i++) {
    const choiceButton = document.getElementById("choice" + (i + 1));
    choiceButton.innerHTML = choices[i];
    choiceButton.value = choices[i];
    choiceButton.disabled = false;  // Re-enable the button
  }
}

function retry() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('result').innerHTML = ''; // Reset the result text
 
  for (let i = 1; i <= 4; i++) {
    document.getElementById("choice" + i).disabled = false;
  }
  document.getElementById("retry").style.display = "none";
 displayQuestion();
}
  displayQuestion();