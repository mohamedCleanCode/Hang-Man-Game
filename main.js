// Main varibles
const letters = "abcdefghijklmnopqrstuvwxyz";
const arrayOfLetters = letters.split("");
const lettesrDom = document.querySelector(".letters");
const categoryDom = document.querySelector(".category span");
const lettersGuessContainer = document.querySelector(".letters-guess");
const hangmanDraw = document.querySelector(".hangman-draw .draw");

// Add letters into DOM
arrayOfLetters.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter";
  let text = document.createTextNode(letter);
  span.appendChild(text);
  lettesrDom.appendChild(span);
});

// Object of categories + words
const words = {
  programming: ["html", "css", "javascript", "python", "php", "nodejs"],
  companies: [
    "microsoft",
    "google",
    "facebook",
    "ibm",
    "linkedin",
    "twitter",
    "youtube",
  ],
  countries: ["egypt", "america", "qatar", "russia", "palestine"],
};

let categories = Object.keys(words);
let categoryRandomIndex = Math.floor(Math.random() * categories.length);
let categoryRandom = categories[categoryRandomIndex];

let valuesOfCatygoryIndex = Math.floor(
  Math.random() * words[categoryRandom].length
);
let chosenWord = words[categoryRandom][valuesOfCatygoryIndex];
let chosenWordArray = chosenWord.split("");

// Add category to DOM
categoryDom.innerHTML = `${categoryRandom}`;

// Add the length of choose array to lettersGuessContainer dom
chosenWordArray.forEach((letter) => {
  let span = document.createElement("span");
  if (letter == " ") {
    span.className = "has-space";
    span.innerHTML = "-";
  }
  lettersGuessContainer.appendChild(span);
});

// Select all spans lettersGuessContainer
const lettersGuess = document.querySelectorAll(".letters-guess span");

// The number of wrong attempts
let wrongAttempts = 0;

// Clicking on letter
document.addEventListener("click", (e) => {
  // Set status
  let statusCheck = false;
  if (e.target.className === "letter") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();
    chosenWordArray.forEach((letter, letterIndex) => {
      if (clickedLetter === letter) {
        statusCheck = true;
        lettersGuess.forEach((span, spanIndex) => {
          if (letterIndex === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    // if letter is not correct
    if (statusCheck !== true) {
      wrongAttempts++;
      hangmanDraw.classList.add(`wrong-${wrongAttempts}`);
    }
  }
});
