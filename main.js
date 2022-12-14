// Main varibles
const letters = "abcdefghijklmnopqrstuvwxyz";
const arrayOfLetters = letters.split("");
const lettesrDom = document.querySelector(".letters");

// Add letters into DOM
arrayOfLetters.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter";
  let text = document.createTextNode(letter);
  span.appendChild(text);
  lettesrDom.appendChild(span);
});

// Object of words + categories
const words = {
  programming,
};
