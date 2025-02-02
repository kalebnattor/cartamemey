// Obtener los elementos
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");
const card = document.getElementById("card"); // Asumimos que la carta tiene el ID 'card'

// Función para manejar el clic en el botón "No" (Reducir tamaño)
let noClickCount = 0;

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
        noButton.innerText = "¿Muy segurísima?";
    } else if (noClickCount === 4) {
        noButton.innerText = "Yo sabía que no me querías...";
    }

    yesButton.style.transform = "scale(1.2)";
});

// Función para mostrar el pop-up cuando se hace clic en "Sí"
yesButton.addEventListener("click", function() {
    setTimeout(function() {
        // Mostrar el pop-up
        popup.style.display = "flex";
    }, 500); // Espera medio segundo

    // Restaurar tamaños y texto de los botones
    noButton.style.transform = "scale(1)";
    noButton.innerText = "No";
    yesButton.style.transform = "scale(1)";
});

// Cerrar el pop-up cuando se hace clic en "Cerrar"
closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";
});

// Detectar cuando la carta vuelve a la parte delantera y cerrar el pop-up
card.addEventListener('transitionend', function() {
    if (card.style.transform === 'rotateY(0deg)') {
        // Cuando la carta está de nuevo en la parte delantera, cerramos el pop-up
        popup.style.display = "none";
    }
});
