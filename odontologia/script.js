document.addEventListener("DOMContentLoaded", function() {
    // Encuentra todos los contenedores de imágenes en la página
    const carousels = document.querySelectorAll(".text-image-container");

    carousels.forEach(carousel => {
        // Ahora seleccionamos los botones dentro del mismo contenedor
        const buttonsContainer = carousel.querySelector(".buttons");
        if (!buttonsContainer) return; // Asegura que los botones existan dentro de cada contenedor

        const buttons = buttonsContainer.querySelectorAll("button");
        const imageDisplay = carousel.querySelector("img");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const newImage = this.getAttribute("data-image");

                if (newImage) {
                    imageDisplay.style.opacity = "0"; // Agrega efecto de transición
                    
                    setTimeout(() => {
                        imageDisplay.src = newImage;
                        imageDisplay.style.opacity = "1";
                    }, 300);

                    // Marca el botón activo
                    buttons.forEach(btn => btn.classList.remove("active"));
                    this.classList.add("active");
                }
            });
        });

        // Aplica la transición de opacidad a las imágenes
        imageDisplay.style.transition = "opacity 0.3s ease-in-out";
    });
});
