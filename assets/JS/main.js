const navToogle = document.querySelector(".section1 .elements nav .nav_toogle");
const navMenu = document.querySelector(".section1 .elements .nav_links");

const enlace1 = document.querySelector(".section1 .elements .nav_links .a1");
const enlace2 = document.querySelector(".section1 .elements .nav_links .a2");
const enlace3 = document.querySelector(".section1 .elements .nav_links .a3");
const enlace4 = document.querySelector(".section1 .elements .nav_links .a4");
const enlace5 = document.querySelector(".section1 .elements .nav_links .a5");
const enlace6 = document.querySelector(".section1 .elements .nav_links .a6");

navToogle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
});

enlace1.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
});
enlace2.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
});
enlace3.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
});
enlace4.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
});
enlace5.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
});
enlace6.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu_visible");
});
