window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Adjust the 50px value based on when you want the blur to happen
        header.classList.add('navblur');
    } else {
        header.classList.remove('navblur');
    }
});

// loader on load remove
window.onload = function() {
    var loadingAnimation = document.getElementById('loader_content');
    window.scrollTo(0,0);  //home on reloded
    setTimeout(function() {
        loadingAnimation.style.opacity = '0';
        setTimeout(function() {
            loadingAnimation.style.display = 'none';
        }, 500);
    }, 1000);
};




// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
        // Change menu icon
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('uil-bars');
            menuIcon.classList.add('uil-times');
        } else {
            menuIcon.classList.remove('uil-times');
            menuIcon.classList.add('uil-bars');
        }
    });

    // Close menu -open menu
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
            menuIcon.classList.remove('uil-times');
            menuIcon.classList.add('uil-bars');
        });
    });

    // Active section  link highlight
    const sections = document.querySelectorAll('section');

    function highlightNavLink() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on page load


});