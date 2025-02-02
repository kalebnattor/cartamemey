const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");
const card = document.getElementById("card"); 

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

    // Restaurar tamaños y texto de los botones
    noButton.style.transform = "scale(1)";
    noButton.innerText = "No";
    yesButton.style.transform = "scale(1)";
});

yesButton.addEventListener("click", function() {
    // Mostrar el pop-up
    popup.style.display = "flex";
    // Rotar la carta hacia atrás
    card.style.transform = "rotateY(180deg)";
});

// Función para cerrar el pop-up
closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";
});

// Detectar cuando la carta regresa a la parte delantera
card.addEventListener('transitionend', function() {
    if (card.style.transform === 'rotateY(0deg)') {
        // Cerrar el pop-up cuando la carta regresa al frente
        popup.style.display = "none";
    }
});
