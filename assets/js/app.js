// actions for download button

downloadButton = document.getElementById('cv-dl-link');

downloadButton.addEventListener('click', function(event) {
    alert('File not available at the moment');
});

//actions for hamburger menu

hamburgerMenu = document.querySelector('.hamb-m');
offScreenMenu = document.querySelector('.hidden');

hamburgerMenu.addEventListener('click',
    function(event) {
        offScreenMenu.classList.toggle('hidden');
    }
);