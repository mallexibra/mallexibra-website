const specialist = document.getElementById("specialist");
const colorBackground = "#062421";
const textDark = Array.from(document.querySelectorAll(".text_dark"));
const nav = document.querySelector("nav");
const swipeUp = document.querySelector(".swipe_up");
const toggleTheme = document.querySelector(".toggle_theme");
const icons = document.querySelectorAll(".icon");
let navItem = document.querySelector(".nav_item");
let buttonCV = document.querySelector(".button_cv");
let burgerMenu = document.querySelector(".burger_menu");
let span = document.querySelectorAll(".burger_menu span");
let toggleNav = false;
let modeIcon = "light";
let toggle = true;
let count = 0;
setInterval(() => {
  if (count == 0) {
    specialist.innerText = `Front-End Developer`;
    count++;
  } else if (count == 1) {
    specialist.innerText = `UI/UX Designer`;
    count++;
  } else if (count == 2) {
    specialist.innerText = `Content Creator`;
    count++;
  } else if (count == 3) {
    specialist.innerText = `Mahasiswa Biasa`;
    count++;
  } else if (count == 4) {
    count = 0;
  }
}, 1000);
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    swipeUp.style.display = "flex";
    toggleTheme.style.bottom = "72px";
  } else {
    setTimeout(() => {
      swipeUp.style.display = "none";
    }, 400);
    toggleTheme.style.bottom = "36px";
  }
});

toggleTheme.addEventListener("click", () => {
  if (toggle) {
    mode(colorBackground, "white", "0 0 2px rgba(0, 0, 0, 0.7)");
    toggle = false;
    modeIcon = "dark";
  } else {
    mode("white", "black", "none");
    toggle = true;
    modeIcon = "light";
  }
});

setInterval(() => {
  icons.forEach((element) => {
    let attr = element.getAttribute("src").split("-");
    element.setAttribute("src", `${attr[0]}-${modeIcon}.svg`);
  });
}, 1000);

function mode(colorBackground, color, shadow) {
  document.body.style.backgroundColor = colorBackground;
  nav.style.backgroundColor = colorBackground;
  document.querySelector("#find_me h1").style.textShadow = shadow;
  textDark.forEach((element) => {
    element.style.color = color;
  });
  span.forEach((element) => {
    element.style.backgroundColor = color;
  })
}


burgerMenu.addEventListener("click", () => {
  if (toggleNav) {
    navItem.style.display = "none";
    buttonCV.style.display = "none";
    span.forEach((element) => {
      element.style.width = "100%";
    });
    toggleNav = false;
  } else {
    navItem.style.display = "flex";
    buttonCV.style.display = "flex";
    toggleNav = true;
    span[1].style.width = "70%";
    span[2].style.width = "50%";
  }
});
