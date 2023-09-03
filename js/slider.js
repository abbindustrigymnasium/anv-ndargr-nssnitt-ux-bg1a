const slider = document.querySelector('.slider');
        const images = document.querySelectorAll('.slider img');
        const pagination = document.getElementById('pagination');
        let currentSlide = 0;

        // Create pagination dots
        images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(index));
            pagination.appendChild(dot);
        });

        // Update pagination dots
        function updatePagination() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active-dot', index === currentSlide);
            });
        }

        // Function to move the slider
        function moveSlider(direction) {
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = images.length - 1;
            if (currentSlide >= images.length) currentSlide = 0;

            const offset = -currentSlide * 100;
            slider.style.transform = `translateX(${offset}%)`;

            updatePagination();
        }

        // Function to go to a specific slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            const offset = -currentSlide * 100;
            slider.style.transform = `translateX(${offset}%)`;

            updatePagination();
        }

        // Start the slider
        updatePagination();
        setInterval(() => moveSlider(1), 5000); // Auto-scroll every 5 seconds