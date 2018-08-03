let hamburgerContainer = document.getElementById('hamburger-container');
let hamburgerIcon = document.getElementById('hamburger-icon');
let menu = document.getElementById('menu');

hamburgerContainer.addEventListener('click', (event) => {
    let display = hamburgerContainer.dataset.display;

    if (display === "none") {
        hamburgerIcon.classList.add('open');
        menu.style.display = "block";
        hamburgerContainer.dataset.display = "block";
    }
    else {
        hamburgerIcon.classList.remove('open');
        hamburgerContainer.dataset.display = "none";
        menu.classList.add("close");
        setTimeout(() => {
            menu.classList.remove("close");
            menu.style.display = "none";
        }, 600);
    }
});