const text = "$ Hello, my name is Maya. Welcome to my website. ";

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