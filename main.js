// Main varibles
const letters = "abcdefghijklmnopqrstuvwxyz";
const arrayOfLetters = letters.split("");
const lettesrDom = document.querySelector(".letters");
const categoryDom = document.querySelector(".category span");
const lettersGuessContainer = document.querySelector(".letters-guess");
const hangmanDraw = document.querySelector(".hangman-draw .draw");
const success = document.getElementById("success");
const good = document.getElementById("good");
const failed = document.getElementById("failed");
const bad = document.getElementById("bad");
let result = document.querySelector(".result span");

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
            span.classList.add("done");
          }
        });
      }
    });
    // if letter is not correct
    if (statusCheck !== true) {
      wrongAttempts++;
      result.innerHTML -= 1;
      hangmanDraw.classList.add(`wrong-${wrongAttempts}`);
      bad.play();
      if (wrongAttempts === 7) {
        lettesrDom.classList.add("end-game");
        failed.play();
        Swal.fire({
          title: `Game Over! The Word Is ${
            chosenWord[0].toUpperCase() + chosenWord.slice(1)
          }`,
          text: "Try Again!",
          icon: "error",
          confirmButtonText: "Try",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } else {
      let done = document.querySelectorAll(".done");
      if (done.length === chosenWord.length) {
        setTimeout(() => {
          success.play();
          Swal.fire("Good job!", "You clicked the button!", "success");
        });
      }
      good.play();
    }
  }
});
