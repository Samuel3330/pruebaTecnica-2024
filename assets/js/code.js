/* Scroll navigation Transform  */

const hero = document.getElementById("hero");
const navigation = document.getElementById("navigation");
const topNav = document.getElementById("top-nav");
const aTopNav = document.querySelectorAll(".camb");

const cargarImagen = (entradas, observador) => {
  if (entradas[0].isIntersecting == false) {
    navigation.classList.add("scroll-navigation");
    topNav.classList.add("tnav");
    aTopNav.forEach((element) => {
      element.classList.remove("text-light");
    });
  } else if (entradas[0].isIntersecting == true) {
    navigation.classList.remove("scroll-navigation");
    topNav.classList.remove("tnav");
    aTopNav.forEach((element) => {
      element.classList.add("text-light");
    });
  }
};

const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

observador.observe(hero);

//Modal open and close

const modalVideo = document.querySelector("#modal-video");
const buttonClose = document.getElementById("button-modal-close");
const buttonOpen = document.getElementById("button-modal-open");
const modalMediaVideo = document.getElementById("modal-media-video");

buttonClose.addEventListener("click", (e) => {
  modalVideo.classList.toggle("modal-close");
  modalMediaVideo.pause();
});

buttonOpen.addEventListener("click", () => {
  modalVideo.classList.toggle("modal-close");
  modalMediaVideo.play();
});
