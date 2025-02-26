const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Corrected the letters string
const numbers =
  "123456789";



  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  
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


document.addEventListener("DOMContentLoaded", function () {
  // Select all menu links from both desktop and mobile menus
  const links = document.querySelectorAll("#desktopMenu a, .overlay-content a");

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          const pageId = this.getAttribute("id") || this.textContent.trim().toLowerCase().replace(/\s+/g, "");

          showPage(pageId);
          closeNav(); // Close mobile menu after clicking
      });
  });

  // Set initial page to be visible
  showPage("home");
});

// Function to show the selected page
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
      page.style.display = "none";
  });

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
      selectedPage.style.display = "block";
  }
}

// Function to open the mobile menu
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// Function to close the mobile menu
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
document.addEventListener("DOMContentLoaded", function () {
  // Select all menu links from both desktop and mobile menus
  const links = document.querySelectorAll("#desktopMenu a, .overlay-content a");

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          const pageId = this.getAttribute("id") || this.textContent.trim().toLowerCase().replace(/\s+/g, "");

          showPage(pageId);
          closeNav(); // Close mobile menu after clicking
      });
  });

  // Set initial page to be visible
  showPage("home");
});

// Function to show the selected page
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
      page.style.display = "none";
  });

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
      selectedPage.style.display = "block";
  }
}

// Function to open the mobile men
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