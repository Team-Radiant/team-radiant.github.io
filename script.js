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
    setTimeout(function() {
        loadingAnimation.style.opacity = '0';
        setTimeout(function() {
            loadingAnimation.style.display = 'none';
        }, 500);
    }, 500);
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
// close when link click section
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
            menuIcon.classList.remove('uil-times');
            menuIcon.classList.add('uil-bars');
        });
    });

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call on page load

  
});
