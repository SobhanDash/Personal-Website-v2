// ---
const hamMenuBtn = document.querySelector(".header_main-ham-menu-cont");
const smallMenu = document.querySelector(".header_sm-menu");
const headerHamMenuBtn = document.querySelector(".header_main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
  ".header_main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header_sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
  if (smallMenu.classList.contains("header_sm-menu--active")) {
    smallMenu.classList.remove("header_sm-menu--active");
  } else {
    smallMenu.classList.add("header_sm-menu--active");
  }
  if (headerHamMenuBtn.classList.contains("d-none")) {
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  } else {
    headerHamMenuBtn.classList.add("d-none");
    headerHamMenuCloseBtn.classList.remove("d-none");
  }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener("click", () => {
    smallMenu.classList.remove("header_sm-menu--active");
    headerHamMenuBtn.classList.remove("d-none");
    headerHamMenuCloseBtn.classList.add("d-none");
  });
}

// ---
const headerLogoConatiner = document.querySelector(".header_logo-container");

headerLogoConatiner.addEventListener("click", () => {
  location.href = "index.html";
});

// ----
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-light") {
    setTheme("theme-light");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-dark");
    document.getElementById("slider").checked = true;
  }
})();
