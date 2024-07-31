const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Corrected the letters string
const numbers =
  "123456789";


document.querySelector("p1").onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => { // Corrected the placement of the opening parenthesis
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        } else {
          return letters[Math.floor(Math.random() * 26)];
        }
      }).join(""); // Corrected the method name to 'join'

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval); // Corrected the method name to 'clearInterval'
    }

    iterations += 1 / 1;
  }, 40);
}
//replase the p2 with what ever the variable is in the index.html is. 
document.querySelector("p2").onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => { // Corrected the placement of the opening parenthesis
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        } else {
          return letters[Math.floor(Math.random() * 26)];
        }
      }).join(""); // Corrected the method name to 'join'

    if (iterations >= event.target.dataset.value.length) {
      clearInterval(interval); // Corrected the method name to 'clearInterval'
    }

    iterations += 1 / 1;
  }, 30);
}

document.querySelector("p3").onmouseover = event => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iterations = 0;
  const originalText = event.target.dataset.value;
  const interval = setInterval(() => {
    event.target.innerText = originalText.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalText[index];
        } else {
          return letters[Math.floor(Math.random() * letters.length)];
        }
      }).join("");

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }

    iterations += 1;
  }, 30);
}
