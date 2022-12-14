// Main varibles
const letters = "abcdefghijklmnopqrstuvwxyz";
const arrayOfLetters = letters.split("");
const lettesrDom = document.querySelector(".letters");
let categoryDom = document.querySelector(".category span");

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
let valueRandomOfCategory = words[categoryRandom][valuesOfCatygoryIndex];

// Add category to DOM
categoryDom.innerHTML = `${categoryRandom}`;
