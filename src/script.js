// index.html
document.addEventListener("DOMContentLoaded", function () {
  const buttonTexts = [
    "Engaging games",
    "Quizzes",
    "Pre-recorded videos",
    "Discussion forums",
    "Hands-on activities",
    "Assessments",
  ];
  const colors = [
    "#B93E00",
    "#1E287D",
    "#1D62D9",
    "#CE0053",
    "#007749",
    "#951CF2",
  ];

  const buttonContainer = document.getElementById("buttonContainer");

  buttonTexts.forEach((text, index) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.backgroundColor = colors[index];
    buttonContainer.appendChild(button);
  });
});
