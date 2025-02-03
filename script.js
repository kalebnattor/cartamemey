const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");
const card = document.getElementById("card"); 
document.addEventListener("DOMContentLoaded", function () {
// Variables para el deslizamiento
let startX = 0;
let isTouching = false;

let noClickCount = 0; 

// Función para reducir tamaño del botón "No" y cambiar su texto
noButton.addEventListener("click", function() {
    if (noClickCount < 4) {
        noButton.style.transform = `scale(${1 - (0.1 * noClickCount)})`;
        noClickCount++;
    }
    if (noClickCount === 1) {
        noButton.innerText = "¿Por qué le das no?";
    } else if (noClickCount === 2) {
        noButton.innerText = "¿Segura?";
    } else if (noClickCount === 3) {
        noButton.innerText = "Muy segurísima";
    } else if (noClickCount === 4) {
        noButton.innerText = "Yo sabía que no me querías...";
    }

    yesButton.style.transform = "scale(1.2)";
});

// Ocultar el pop-up al inicio
    popup.style.display = "none";

   yesButton.addEventListener("click", function() {
    popup.style.display = "flex";
    card.style.transform = "rotateY(180deg)"; // Girar la carta hacia la parte trasera
});

    // Cerrar pop-up cuando se toca fuera de la caja o en el botón de cerrar
    popup.addEventListener("click", function (event) {
        if (event.target === popup || event.target === closePopupButton) {
            popup.style.display = "none";
        }
    });

// Voltear el texto del pop-up cuando se hace clic o toca en cualquier lugar del pop-up
popup.addEventListener("click", function() {
    popupContent.classList.toggle("flip"); // Añadir o quitar la clase 'flip' para voltear el texto
});
    // Crear un iframe para el audio de YouTube
    let iframe = document.createElement("iframe");
    iframe.setAttribute("width", "0");
    iframe.setAttribute("height", "0");
    iframe.setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&loop=1&playlist=dQw4w9WgXcQ");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay");

    // Agregar el iframe al body
    document.body.appendChild(iframe);
});

