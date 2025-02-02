// Obtener los botones
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

// Contador para el número de clics en el botón "No"
let noClickCount = 0;

// Función para manejar el clic en el botón "No" (Reducir tamaño)
noButton.addEventListener("click", function() {
    // Cambiar tamaño del botón "No"
    if (noClickCount < 4) {
        noButton.style.transform = `scale(${1 - (0.1 * noClickCount)})`; // Reducir tamaño
        noClickCount++;
    }

    // Cambiar el texto del botón "No"
    if (noClickCount === 1) {
        noButton.innerText = "¿Por qué le das no?";
    } else if (noClickCount === 2) {
        noButton.innerText = "¿Segura?";
    } else if (noClickCount === 3) {
        noButton.innerText = "¿Muy segurísima?";
    } else if (noClickCount === 4) {
        noButton.innerText = "Yo sabía que no me querías...";
    }

    // Hacer crecer el botón "Sí"
    yesButton.style.transform = "scale(1.2)"; // Hacerlo más grande
});

// Función para mostrar el pop-up cuando se hace clic en "Sí"
yesButton.addEventListener("click", function() {
    // Mostrar el pop-up
    popup.style.display = "flex";
    
    // Restaurar tamaño del botón "No" y texto
    noButton.style.transform = "scale(1)"; // Restaurar tamaño original
    noButton.innerText = "No"; // Restaurar texto original

    // Restaurar tamaño del botón "Sí"
    yesButton.style.transform = "scale(1)"; // Restaurar tamaño original
});

// Función para cerrar el pop-up cuando se hace clic en "Cerrar"
closePopupButton.addEventListener("click", function() {
    // Ocultar el pop-up
    popup.style.display = "none";
});
