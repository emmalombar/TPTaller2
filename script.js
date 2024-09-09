const playButton = document.querySelector(".play");
const dalePlayBox = document.querySelector(".daleplay");

playButton.addEventListener("mouseenter", function () {
  dalePlayBox.style.opacity = "1";
  dalePlayBox.style.visibility = "visible";
});

playButton.addEventListener("mouseleave", function () {
  dalePlayBox.style.opacity = "0";
  dalePlayBox.style.visibility = "hidden";
});

// Botones hasta menu
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".play");
  const portada = document.querySelector(".portada");
  const elegir = document.querySelector(".elegir");
  const menu = document.querySelector(".menu");
  const hoverboton = document.querySelectorAll(".arti .hover");

  playButton.addEventListener("click", () => {
    portada.classList.add("arriba");
    elegir.classList.add("visible");
  });

  hoverboton.forEach((hover) => {
    hover.addEventListener("click", () => {
      elegir.classList.add("arriba");
      elegir.classList.remove("visible");
      menu.classList.add("visible");

      document.body.classList.add("menu-visible");
    });
  });
});

//NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const contents = document.querySelectorAll(".contents");
  const contentContainer = document.querySelector(".content-container");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      // Elimina 'show' de todas las secciones y 'active' de todos los items del menú
      contents.forEach((content) => {
        content.classList.remove("show");
      });
      navItems.forEach((item) => item.classList.remove("active"));

      // Obtiene la sección correspondiente y subraya el item del menú correspondiente
      const sectionId = item.getAttribute("data-section");
      const section = document.getElementById(sectionId + "-section");

      if (section) {
        section.classList.add("show");
        item.classList.add("active");

        // Ajusta el tamaño del contenedor según la sección activa
        adjustContentContainerSize(section);
      }
    });
  });

  // Selecciona la primera sección por defecto
  document.querySelector('.nav-item[data-section="inicio"]').click();
});
