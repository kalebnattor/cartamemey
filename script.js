// Variables para los botones
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// Contador para el número de clics en el botón "No"
let noClickCount = 0;

// Función para manejar el clic en el botón "No"
noButton.addEventListener("click", function() {
    // Cambiar tamaño del botón "No"
    if (noClickCount < 3) {
        noButton.style.transform = `scale(${1 - (0.1 * noClickCount)})`; // Reducir tamaño
        noClickCount++;
    }

    // Cambiar el texto del botón "No"
    if (noClickCount === 1) {
        noButton.innerText = "¿Segura?";
    } else if (noClickCount === 2) {
        noButton.innerText = "Muy segurísima";
    } else if (noClickCount === 3) {
        noButton.innerText = "Yo sabía que no me querías...";
    }

    // Hacer crecer el botón "Sí"
    yesButton.style.transform = "scale(1.2)"; // Hacerlo más grande
});

// Función para restaurar el tamaño de los botones si se hace clic en el botón "Sí"
yesButton.addEventListener("click", function() {
    // Restaurar tamaño del botón "No" cuando se hace clic en "Sí"
    noButton.style.transform = "scale(1)"; // Restaurar al tamaño original
    noButton.innerText = "No"; // Restaurar texto original

    // Restaurar tamaño del botón "Sí"
    yesButton.style.transform = "scale(1)"; // Restaurar tamaño original
});
