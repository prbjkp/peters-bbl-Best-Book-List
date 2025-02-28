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

  // Function to check screen size and adjust visibility
  function checkScreenSize() {
      if (window.innerWidth <= 768) {
          readMoreBtn.style.display = "block"; // Show button on mobile
          if (extraText.dataset.toggled !== "true") {
              extraText.style.display = "none"; // Keep text hidden unless manually toggled
          }
      } else {
          readMoreBtn.style.display = "none"; // Hide button on desktop
          extraText.style.display = "block";  // Ensure text is visible on desktop
      }
  }

  document.addEventListener("DOMContentLoaded", function() {
    var extraText = document.getElementById("extra-text2");
    var readMoreBtn = document.getElementById("more2");
  
    // Function to check screen size and adjust visibility
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            readMoreBtn.style.display = "block"; // Show button on mobile
            if (extraText.dataset.toggled !== "true") {
                extraText.style.display = "none"; // Keep text hidden unless manually toggled
            }
        } else {
            readMoreBtn.style.display = "none"; // Hide button on desktop
            extraText.style.display = "block";  // Ensure text is visible on desktop
        }
    }

  // Run function on page load and when window resizes
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  // Toggle text visibility when button is clicked
  readMoreBtn.addEventListener("click", function() {
      if (extraText.style.display === "none" || extraText.style.display === "") {
          extraText.style.display = "block"; // Show text
          extraText.dataset.toggled = "true"; // Mark as manually toggled
          this.innerText = "Read Less"; // Change button text
      } else {
          extraText.style.display = "none"; // Hide text
          extraText.dataset.toggled = "false"; // Reset manual toggle
          this.innerText = "Read More"; // Change button text
      }
  });
})});