const questions = [
  "Tell me about yourself.",
  "Why do you want to join this company?",
  "What are your strengths and weaknesses?",
  "Where do you see yourself in 5 years?",
  "Explain a technical concept you know well."
];

let currentQuestion = 0;

function startInterview() {
  currentQuestion = 0;
  document.getElementById("question").innerText = questions[currentQuestion];
  document.getElementById("feedback").innerText = "";
}

function nextQuestion() {
  const answer = document.getElementById("answer").value;
  if (answer.trim() === "") {
    alert("Please type your answer before moving to next question.");
    return;
  }
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    document.getElementById("question").innerText = questions[currentQuestion];
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
  } else {
    document.getElementById("question").innerText = "Interview completed. Thank you!";
    document.getElementById("answer").style.display = "none";
  }
}

function getFeedback() {
  const feedbackOptions = [
    "Good answer, but try to be more specific.",
    "You should provide real-life examples.",
    "Great confidence! Keep it up.",
    "Try to structure your answer more clearly.",
    "Focus more on achievements rather than responsibilities."
  ];
  const feedback = feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
  document.getElementById("feedback").innerText = "Feedback: " + feedback;
}
