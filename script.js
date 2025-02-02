const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");
const card = document.getElementById("card"); 

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

// Funciones de deslizamiento
card.addEventListener("touchstart", function(e) {
    isTouching = true;
    startX = e.touches[0].clientX;
});

card.addEventListener("touchmove", function(e) {
    if (isTouching) {
        let deltaX = e.touches[0].clientX - startX;
        if (Math.abs(deltaX) > 50) { // Se ha deslizado lo suficiente
            if (deltaX > 0) {
                // Deslizar hacia la derecha
                card.style.transform = "rotateY(0deg)"; // Vuelve a la parte delantera
                popup.style.display = "none"; // Cierra el pop-up al regresar
            } else {
                // Deslizar hacia la izquierda
                card.style.transform = "rotateY(180deg)"; // Regresa a la parte trasera
                popup.style.display = "flex"; // Muestra el pop-up
            }
            isTouching = false; // Detener el movimiento una vez que se deslizó
        }
    }
});

card.addEventListener("touchend", function() {
    isTouching = false;
});
