document.addEventListener('DOMContentLoaded', function() {
    // Encuentra todos los contenedores de imágenes en la página
    const carousels = document.querySelectorAll('.text-image-container');

    carousels.forEach(carousel => {
        const buttons = carousel.nextElementSibling.querySelectorAll('button');
        const imageDisplay = carousel.querySelector('img');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Cambiar imagen de cada carrusel sin afectar a los demás
                imageDisplay.style.opacity = '0';

                setTimeout(() => {
                    imageDisplay.src = this.getAttribute('data-image');
                    imageDisplay.style.opacity = '1';
                }, 300);

                // Actualizar botón activo en su propio grupo
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Aplicar transición a las imágenes
        imageDisplay.style.transition = 'opacity 0.3s ease-in-out';
    });
});