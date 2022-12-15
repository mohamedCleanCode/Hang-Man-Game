// Main varibles
const letters = "abcdefghijklmnopqrstuvwxyz";
const arrayOfLetters = letters.split("");
const lettesrDom = document.querySelector(".letters");
const categoryDom = document.querySelector(".category span");
const lettersGuess = document.querySelector(".letters-guess");

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
  countries: ["Egypt", "America", "Qatar", "Russia", "Palestine"],
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

// Add the length of choose array to lettersGuess dom
chosenWordArray.forEach((letter) => {
  let span = document.createElement("span");
  if (letter == " ") {
    span.className = "has-space";
    span.innerHTML = "-";
  }
  lettersGuess.appendChild(span);
});

// Clicking on letter
document.addEventListener("click", (e) => {
  if (e.target.className === "letter") {
    e.target.classList.add("clicked");
  }
});
