const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Corrected the letters string
const numbers =
  "123456789";



  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Desktop menu links
    document.getElementById("home-link").addEventListener("click", function () {
        navigateTo("index.html");
    });
    document.getElementById("newpage-link").addEventListener("click", function () {
        navigateTo("about.html");
    });
    document.getElementById("newerpage-link").addEventListener("click", function () {
        navigateTo("photography.html");
    });

    // Mobile menu links
    const overlayLinks = document.querySelectorAll(".overlay-content a");
    overlayLinks.forEach((link, index) => {
        link.addEventListener("click", function () {
            let pages = ["index.html", "about.html", "photography.html"];
            navigateTo(pages[index]); 
            closeNav(); // Close overlay after navigation
        });
    });
});

// Function to handle navigation
function navigateTo(url) {
    window.location.href = url;
}

// Function to open overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

// Function to close overlay
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


/*
document.querySelector("p1").onmouseover = event => {
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