

// declarar variables globales

let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;

// Funciones
const showPostModal = () => {
    MAIN.style.display = 'none';
    MODAL_POST.style.display = 'block';
    setTimeout(() => {
      MODAL_POST.style.transform = 'translateY(0)';
    }, 1);
};

const closePostModal = () => {
    MODAL_POST.style.transform = 'translateY(100vh)';
    MAIN.style.display = 'block';
};

// Cuando se cargue todo el DOM
window.addEventListener('load', async () => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#btn-upload-post');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal);

    if('serviceWorker' in navigator){
        const response = await navigator.serviceWorker.register('sw.js');
        if(response) {
            console.info('Service worker registrado');
        }
    }
});