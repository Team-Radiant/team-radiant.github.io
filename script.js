window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Adjust the 50px value based on when you want the blur to happen
        header.classList.add('navblur');
    } else {
        header.classList.remove('navblur');
    }
});
