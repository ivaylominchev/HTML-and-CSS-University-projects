document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("gallery-modal");
    const modalImage = document.getElementById("modal-image");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const closeBtn = document.querySelector(".close-btn");

    let currentIndex = 0;
    let currentImages = [];

    const projects = document.querySelectorAll(".section-item");

    projects.forEach((project, index) => {
        project.addEventListener("click", (e) => {
            e.preventDefault();
            const projectName = project.querySelector(".project-image").alt;

            currentImages = getImagesForProject(projectName);

            if (currentImages.length > 0) {
                currentIndex = 0;
                modalImage.src = currentImages[currentIndex];
                modal.classList.remove("hidden");
            }
        });
    });

    function getImagesForProject(projectName) {
        const galleries = {
            "Модерен апартамент в София": [
                "images/Luxury Apartment - Sofia/1.jpg",
                "images/Luxury Apartment - Sofia/2.jpg",
                "images/Luxury Apartment - Sofia/3.jpg",
                "images/Luxury Apartment - Sofia/4.jpg",
                "images/Luxury Apartment - Sofia/5.jpg",
                "images/Luxury Apartment - Sofia/6.jpg",
                "images/Luxury Apartment - Sofia/7.jpg",
                "images/Luxury Apartment - Sofia/8.jpg",
                "images/Luxury Apartment - Sofia/9.jpg",
                "images/Luxury Apartment - Sofia/10.jpg",
                "images/Luxury Apartment - Sofia/11.jpg",
                "images/Luxury Apartment - Sofia/12.jpg",
                "images/Luxury Apartment - Sofia/13.jpg",
                "images/Luxury Apartment - Sofia/14.jpg",
                "images/Luxury Apartment - Sofia/15.jpg"
            ],
            "Луксозен ресторант в Пловдив": [
                "images/Luxury Restaurant/1.jpg",
                "images/Luxury Restaurant/2.jpg",
                "images/Luxury Restaurant/3.jpg"
                "images/Luxury Restaurant/4.jpg",
                "images/Luxury Restaurant/5.jpg",
                "images/Luxury Restaurant/6.jpg",
                "images/Luxury Restaurant/7.jpg",
                "images/Luxury Restaurant/8.jpg",
                "images/Luxury Restaurant/9.jpg"
            ],
            "Семейна къща край Варна": [
                "images/Family house in Varna/1.jpg"
                "images/Family house in Varna/2.jpg",
                "images/Family house in Varna/3.jpg",
                "images/Family house in Varna/4.jpg",
                "images/Family house in Varna/5.jpg",
                "images/Family house in Varna/6.jpg",
                "images/Family house in Varna/7.jpg",
                "images/Family house in Varna/8.jpg",
                "images/Family house in Varna/9.jpg",
                "images/Family house in Varna/10.jpg",
                "images/Family house in Varna/11.jpg",
                "images/Family house in Varna/12.jpg",
                "images/Family house in Varna/13.jpg"
            ],
            "Офис пространство за стартираща компания": [
                "images/Office/1.jpg",
                "images/Office/2.jpeg",
                "images/Office/3.jpeg",
                "images/Office/4.jpeg"
            ],
            "Луксозна вила в планината": [
                "images/Mountain villa/1.jpg"
                "images/Mountain villa/2.jpg",
                "images/Mountain villa/3.jpg",
                "images/Mountain villa/4.jpg",
                "images/Mountain villa/5.jpg",
                "images/Mountain villa/6.jpg",
                "images/Mountain villa/7.jpg",
                "images/Mountain villa/8.jpg",
                "images/Mountain villa/9.jpg",
                "images/Mountain villa/10.jpg",
                "images/Mountain villa/11.jpg",
                "images/Mountain villa/12.jpg",
                "images/Mountain villa/13.jpg",
                "images/Mountain villa/14.jpg",
                "images/Mountain villa/15.jpg"
            ],
            "Модерно кафене в Бургас": [
                "images/Modern Cafe/1.jpg"
                "images/Modern Cafe/2.jpg",
                "images/Modern Cafe/3.jpg",
                "images/Modern Cafe/4.jpg",
                "images/Modern Cafe/5.jpg",
                "images/Modern Cafe/6.jpg",
                "images/Modern Cafe/7.jpg",
                "images/Modern Cafe/8.jpg",
                "images/Modern Cafe/9.jpg",
                "images/Modern Cafe/10.jpg"
            ]
        };

        return galleries[projectName] || [];
    }

    nextBtn.addEventListener("click", () => {
        if (currentImages.length > 0) {
            currentIndex = (currentIndex + 1) % currentImages.length;
            modalImage.src = currentImages[currentIndex];
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentImages.length > 0) {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            modalImage.src = currentImages[currentIndex];
        }
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});