// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Corrected the letters string
// const numbers = "123456789";


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("toggleButton");
    const content = document.getElementById("content");

    button.addEventListener("click", function() {
        if (content.classList.contains("visible")) {
            content.classList.remove("visible");
            content.classList.add("hidden");
        } else {
            content.classList.remove("hidden");
            content.classList.add("visible");
        }
    });
});


//read more button for DSotM


document.addEventListener("DOMContentLoaded", function() {
    var extraText = document.getElementById("extra-text");
    var readMoreBtn = document.getElementById("read-more-btn");

    // Ensure correct display based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            readMoreBtn.style.display = "block"; // Show button on mobile
            if (extraText.style.display !== "block") {
                extraText.style.display = "none"; // Hide extra text initially on mobile
            }
        } else {
            readMoreBtn.style.display = "none"; // Hide button on larger screens
            extraText.style.display = "block";  // Ensure extra text is always visible on desktop
        }
    }

    // Run function on page load and when window resizes
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Toggle text visibility when button is clicked
    readMoreBtn.addEventListener("click", function() {
        if (extraText.style.display === "none" || extraText.style.display === "") {
            extraText.style.display = "block"; // Show text
            this.innerText = "Read Less"; // Change button text
        } else {
            extraText.style.display = "none"; // Hide text
            this.innerText = "Read More"; // Change button text
        }
    });
});







// Function to open the mobile men
/*
document.querySelector("p1").onmouseover = event => { mpore notes so i can commit again
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