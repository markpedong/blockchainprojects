const loading = document.querySelector(".lds-hourglass");

window.onload = function () {
  loading.style.display = "none";

  gsap.from("body", { opacity: 0, duration: 0.5 });
};
