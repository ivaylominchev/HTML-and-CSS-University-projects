document.addEventListener('DOMContentLoaded', function () {
        const hash = window.location.hash;

        if (hash) {
            const targetSection = document.querySelector(hash);

            if (targetSection) {
                targetSection.classList.add('highlighted');

                setTimeout(() => {
                    targetSection.classList.remove('highlighted');
                }, 5000);
            }
        }
    });

    const galleryImages = document.querySelectorAll('.gallery-image-item');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentImageIndex = 0;

    
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            openModal(img.src);
        });
    });

    
    function openModal(src) {
        modal.style.display = 'block';
        modalImage.src = src;
    }

    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex].src;
    });

    // Навигация назад
    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex].src;
    });

    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });