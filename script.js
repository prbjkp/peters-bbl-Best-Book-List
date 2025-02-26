const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Corrected the letters string
const numbers =
  "123456789";


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  document.querySelector("span").addEventListener("click", function() {
    console.log("Open button clicked");
  });


// Function to open the mobile men
/*
document.querySelector("p1").onmouseover = event => { more tos recommit
  let iterations = 0;
  const interval = setInterval(() => { // Corrected the placement of the opening parenthesis hehe he hea mroe to commit more so i can commit again 
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
   */
  /*
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
document.querySelector(" ").onmouseover = event => {
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
*/