document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    const mainImage = document.getElementById('main-image');
    const mainContent = document.getElementById('main-content');

    // Toggle menu and background blur
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
        mainContent.classList.toggle('blur-background');
    });

    // Toggle blur on main image when clicked
    mainImage.addEventListener('click', function () {
        if (mainImage.style.filter === 'blur(5px)') {
            mainImage.style.filter = 'blur(0)';
        } else {
            mainImage.style.filter = 'blur(5px)';
        }
    });
});
