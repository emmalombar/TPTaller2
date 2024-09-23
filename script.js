/*------------------------------HOVER PLAY---------------------------*/
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

/*------------------------------HOVER ELEGIR---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".play");
  const portada = document.querySelector(".portada");
  const elegir = document.querySelector(".elegir");
  const menu = document.querySelector(".menu");
  const hoverboton = document.querySelectorAll(".arti .hover");

  // Click en botón play
  playButton.addEventListener("click", () => {
    portada.classList.add("arriba");
    elegir.classList.add("visible");
  });

  // Click en los botones de hover
  hoverboton.forEach((hover) => {
    hover.addEventListener("click", () => {
      elegir.classList.add("arriba");
      elegir.classList.remove("visible");
      menu.classList.add("visible");

      document.body.classList.add("menu-visible");
    });
  });
});

/*------------------------------NAV Y FINAL---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const contents = document.querySelectorAll(".contents");
  const contentContainer = document.querySelector(".content-container");
  const finalSection = document.getElementById("final-section");

  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      // Elimina 'show' y 'active'
      contents.forEach((content) => {
        content.classList.remove("show");
        content.classList.remove("visible"); // Elimina visible
      });
      navItems.forEach((item) => item.classList.remove("active"));

      // Agrega 'show' y 'active'
      const sectionId = item.getAttribute("data-section");
      const section = document.getElementById(sectionId + "-section");

      if (section) {
        section.classList.add("show");
        if (sectionId === "final") {
          section.classList.add("visible");
        }
        item.classList.add("active");

        const paddingOffset = parseInt(
          window.getComputedStyle(contentContainer).paddingTop
        );
        const containerTop = contentContainer.getBoundingClientRect().top;
        const sectionTop = section.getBoundingClientRect().top;

        contentContainer.scrollTo({
          top: sectionTop - containerTop - paddingOffset,
          behavior: "smooth",
        });

        // Actualiza la barra de progreso
        setTimeout(updateProgressBar, 500);
      }
    });
  });

  document.querySelector('.nav-item[data-section="inicio"]').click();
});

/*------------------------------HOVER WIFI---------------------------*/
const paths = document.querySelectorAll("path");
const texts = document.querySelectorAll(".data");

paths.forEach((path, index) => {
  path.addEventListener("mouseenter", () => {
    texts[index].style.opacity = "1";
  });
  path.addEventListener("mouseleave", () => {
    texts[index].style.opacity = "0";
  });
});

/*------------------------------BARRA DE PROGRESO---------------------------*/
const progressBar = document.querySelector("#progress-bar");

const updateProgressBar = () => {
  const activeSection = document.querySelector(".contents.show");
  const contentContainer = document.querySelector(".content-container");

  if (activeSection && contentContainer) {
    const sectionHeight = activeSection.scrollHeight; // Altura de la sección
    const scrollPosition = contentContainer.scrollTop; // Posición del scroll

    // Porcentaje basado en altura
    const progressPercentage =
      (scrollPosition / (sectionHeight - contentContainer.clientHeight)) * 100;

    const clampedPercentage = Math.min(Math.max(progressPercentage, 0), 100);

    progressBar.style.width = clampedPercentage + "%";
  }
};

const contentContainer = document.querySelector(".content-container");
if (contentContainer) {
  contentContainer.addEventListener("scroll", updateProgressBar);
}

document.addEventListener("DOMContentLoaded", updateProgressBar);

/*------------------------------TECLAS---------------------------*/
// Mapeo de teclas a imágenes y textos
const keyMappings = {
  b: { imgId: "b", imgNormal: "img/B.svg", imgPressed: "img/Bverde.svg" },
  r: { imgId: "r", imgNormal: "img/R.svg", imgPressed: "img/Rverde.svg" },
  t: { imgId: "t", imgNormal: "img/T.svg", imgPressed: "img/Tverde.svg" },
};

const keysState = { b: false, r: false, t: false };
const traduccionDiv = document.querySelector(".traduccion");

// Función para cambiar la imagen y la opacidad del texto
const toggleKey = (key) => {
  const keyMapping = keyMappings[key];
  if (keyMapping) {
    const imgElement = document.getElementById(keyMapping.imgId);
    const textElement = imgElement.nextElementSibling; // El h2 correspondiente

    keysState[key] = !keysState[key]; // Cambia el estado

    // Cambia la imagen
    imgElement.src = keysState[key]
      ? keyMapping.imgPressed
      : keyMapping.imgNormal;

    // Cambia la opacidad del texto
    textElement.style.opacity = keysState[key] ? "1" : "0";

    // Verifica si todos los h2 tienen opacidad 1
    const allVisible = Object.values(keysState).every((state) => state);
    traduccionDiv.style.opacity = allVisible ? "1" : "0";
  }
};

// Inicializar opacidad al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  for (const key in keyMappings) {
    const imgElement = document.getElementById(keyMappings[key].imgId);
    const textElement = imgElement.nextElementSibling; // El h2 correspondiente
    textElement.style.opacity = "0"; // Asegúrate de que la opacidad sea 0
  }
});

// Escuchar eventos de teclado
document.addEventListener("keydown", (event) => {
  if (keyMappings[event.key]) {
    toggleKey(event.key);
  }
});
