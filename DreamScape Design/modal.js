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