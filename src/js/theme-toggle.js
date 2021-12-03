const isun = document.querySelector("i.icon-sun-inv");
const imoon = document.querySelector("i.icon-moon-inv");

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

setTheme();

document.querySelector(".theme-toggler").addEventListener("click", toggleTheme);

const toggleSidebar = () => {
  const imenu = document.querySelector("i.icon-menu");
  const icancel = document.querySelector("i.icon-cancel");

  const backdrop = document.querySelector(".backdrop");
  const els = document.querySelectorAll("[data-responsive-sidebar]");
  els.forEach((el) => {
    el.classList.toggle("right-0");
  });

  if (els[0].classList.contains("right-0")) {
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
