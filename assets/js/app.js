// actions for download button

downloadButton = document.getElementById('cv-dl-link');

downloadButton.addEventListener('click', function (event) {
    alert('File not available at the moment');
});

//actions for hamburger menu

hamburgerMenu = document.querySelector('.hamb-m');
offScreenMenu = document.querySelector('.hidden');
let active = true;
hamburgerMenu.addEventListener('click',
    function (event) {
        if (active === true) {
            active = false;
            offScreenMenu.classList.toggle('hidden');
            hamburgerMenu.innerHTML = '<a class="hamb-m"><i class="fas fa-times"></i></a>';
        }
        else if (active == false) {
            active = true;
            offScreenMenu.classList.toggle('hidden');
            hamburgerMenu.innerHTML = '<a class="hamb-m"><i class="fas fa-bars"></i></a>';
        }
    }
);