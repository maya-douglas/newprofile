const text = "$ Hello, my name is Maya. Welcome to my website.";

// Get a reference to the text element
const textElement = document.getElementById("text");

// Define the typing speed (in milliseconds)
const typingSpeed = 100;

// Start typing out the text
let i = 0;
setInterval(() => {
  textElement.textContent = text.slice(0, i) + "_";
  i++;
  if (i > text.length) {
    i = 0;
  }
}, typingSpeed);

const text2 = "$ About me.";

const textElement2 = document.getElementById("text2");

let j = 0;
setInterval(() => {
  textElement2.textContent = text2.slice(0, j) + "_";
  j++;
  if (j > text2.length) {
    j = 0;
  }
}, typingSpeed);

const fadeInDiv = document.querySelector('.fade-in');
const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
  fadeInDiv.classList.toggle('show');
});

