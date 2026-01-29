// For the gallery to zoom in
const gallery = document.querySelector('.gallery');
const enlarge = document.querySelector('dialog');
const enlargeImage = enlarge.querySelector('img');
const closeButton = enlarge.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    enlargeImage.src = src;
    enlargeImage.alt = alt;

    enlarge.showModal();
}

closeButton.addEventListener('click', () => {
    enlarge.close();
});

enlarge.addEventListener('click', (event) => {
    if (event.target === enlarge) {
        enlarge.close();
    }
});

// For the menu-btn to expand
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
}

