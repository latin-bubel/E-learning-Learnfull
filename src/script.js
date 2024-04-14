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
}
