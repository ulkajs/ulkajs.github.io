const isun = document.querySelector("i.icon-sun-inv");
const imoon = document.querySelector("i.icon-moon-inv");
const imenu = document.querySelector("i.icon-menu");
const icancel = document.querySelector("i.icon-cancel");
const backdrop = document.querySelector(".backdrop");
const sidebars = document.querySelectorAll("[data-responsive-sidebar]");

const getTheme = () =>
  localStorage.getItem("theme") ||
  (window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

const setTheme = (theme = getTheme()) => {
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.body.classList.remove("light");
    isun.classList.remove("hide");
    imoon.classList.add("hide");
  } else {
    document.body.classList.remove("dark");
    imoon.classList.remove("hide");
    isun.classList.add("hide");
  }
};

const toggleTheme = () => {
  const currentTheme = getTheme();

  setTheme(currentTheme === "dark" ? "light" : "dark");
};

const toggleSidebar = () => {
  sidebars.forEach((el) => {
    el.classList.toggle("right-0");
  });

  if (sidebars[0].classList.contains("right-0")) {
    backdrop.style.display = "block";
    imenu.classList.add("hide");
    icancel.classList.remove("hide");
  } else {
    backdrop.style.display = "none";
    imenu.classList.remove("hide");
    icancel.classList.add("hide");
  }
};

document
  .querySelector(".sidebar-toggler")
  .addEventListener("click", toggleSidebar);

setTheme();
backdrop.addEventListener("click", toggleSidebar);
document.querySelector(".theme-toggler").addEventListener("click", toggleTheme);
