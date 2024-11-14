// script.js
document.addEventListener('DOMContentLoaded', function () {
    const lightboxLinks = document.querySelectorAll('.lightbox');
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.classList.add('lightbox-overlay');
    document.body.appendChild(lightboxOverlay);

    // Variável para rastrear se o lightbox está visível
    let isLightboxVisible = false;

    lightboxLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            // Se o lightbox já está visível, clique fecha o lightbox
            if (isLightboxVisible) {
                lightboxOverlay.style.display = 'none';
                isLightboxVisible = false;
                return;
            }

            // Caso contrário, mostra a imagem no lightbox
            const img = document.createElement('img');
            img.src = link.href;
            while (lightboxOverlay.firstChild) {
                lightboxOverlay.removeChild(lightboxOverlay.firstChild);
            }
            lightboxOverlay.appendChild(img);
            lightboxOverlay.style.display = 'flex';
            isLightboxVisible = true; // Atualiza o estado do lightbox
        });
    });

    // Clique fora da imagem também fecha o lightbox
    lightboxOverlay.addEventListener('click', () => {
        lightboxOverlay.style.display = 'none';
        isLightboxVisible = false;
    });
});
