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
  // First extra text and button
  var extraText1 = document.getElementById("extra-text");
  var readMoreBtn1 = document.getElementById("read-more-btn");

  
  var extraText2 = document.getElementById("extra-text2");
  var readMoreBtn2 = document.getElementById("more2");

 var extraText3 = document.getElementById("text3");
 var readMoreBtn3 = document.getElementById("extraText3")

 var extraText5 = document.getElementById("text5");
 var readMoreBtn5 = document.getElementById("extraText5")

 var extraText4 = document.getElementById("text4");
 var readMoreBtn4 = document.getElementById("extraText4")
  // Function to check screen size and adjust visibility
  function checkScreenSize() {
      if (window.innerWidth <= 768) {
          // Show buttons on mobile and hide text initially
          readMoreBtn1.style.display = "block";
          if (extraText1.dataset.toggled !== "true") {
              extraText1.style.display = "none";
          }

          readMoreBtn2.style.display = "block";
          if (extraText2.dataset.toggled !== "true") {
              extraText2.style.display = "none";
          }

          readMoreBtn4.style.display = "block";
          if (extraText4.dataset.toggled !== "true") {
              extraText4.style.display = "none";
          }

        readMoreBtn5.style.display = "block";
          if (extraText5.dataset.toggled !== "true") {
              extraText5.style.display = "none";
          }
          
          readMoreBtn3.style.display = "block";
          if (extraText3.dataset.toggled !== "true") {
              extraText3.style.display = "none";
          }
      } else {
          // Hide buttons on desktop and show text
          readMoreBtn1.style.display = "none";
          extraText1.style.display = "block";
          
          readMoreBtn2.style.display = "none";
          extraText2.style.display = "block";

          readMoreBtn3.style.display = "none";
          extraText3.style.display = "block";

          readMoreBtn4.style.display = "none";
          extraText4.style.display = "block";

          readMoreBtn5.style.display = "none";
          extraText5.style.display = "block";
      }
  }

  // Run function on page load and when window resizes
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

  // Toggle text visibility when button 1 is clicked
  readMoreBtn1.addEventListener("click", function() {
      if (extraText1.style.display === "none" || extraText1.style.display === "") {
          extraText1.style.display = "block";
          extraText1.dataset.toggled = "true";
          this.innerText = "Read Less";
      } else {
          extraText1.style.display = "none";
          extraText1.dataset.toggled = "false";
          this.innerText = "Read More";
      }
  });

  readMoreBtn3.addEventListener("click", function() {
    if (extraText3.style.display === "none" || extraText3.style.display === "") {
        extraText3.style.display = "block";
        extraText3.dataset.toggled = "true";
        this.innerText = "Read Less";
    } else {
        extraText3.style.display = "none";
        extraText3.dataset.toggled = "false";
        this.innerText = "Read More";
    }
});

readMoreBtn5.addEventListener("click", function() {
    if (extraText5.style.display === "none" || extraText5.style.display === "") {
        extraText5.style.display = "block";
        extraText5.dataset.toggled = "true";
        this.innerText = "Read Less";
    } else {
        extraText5.style.display = "none";
        extraText5.dataset.toggled = "false";
        this.innerText = "Read More";
    }
});

readMoreBtn4.addEventListener("click", function() {
    if (extraText4.style.display === "none" || extraText4.style.display === "") {
        extraText4.style.display = "block";
        extraText4.dataset.toggled = "true";
        this.innerText = "Read Less";
    } else {
        extraText4.style.display = "none";
        extraText4.dataset.toggled = "false";
        this.innerText = "Read More";
    }
});

  // Toggle text visibility when button 2 is clicked
  readMoreBtn2.addEventListener("click", function() {
      if (extraText2.style.display === "none" || extraText2.style.display === "") {
          extraText2.style.display = "block";
          extraText2.dataset.toggled = "true";
          this.innerText = "Read Less";
      } else {
          extraText2.style.display = "none";
          extraText2.dataset.toggled = "false";
          this.innerText = "Read More";
      }
  });
});