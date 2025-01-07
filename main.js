document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.menu-icon'); // Ambil elemen menu
    let navbar = document.querySelector('.navbar');  // Ambil elemen navbar
    let cart = document.querySelector('.cart');      // Ambil elemen cart
    let cartIcon = document.querySelector('.bx-cart'); // Ambil ikon cart
    let login = document.querySelector('.login-form'); // Ambil form login
    let userIcon = document.querySelector('.bx-user'); // Ambil ikon user
    let header = document.querySelector('header');
    let scrolltop = document.querySelector('.scroll-top');

    // Periksa apakah elemen ditemukan
    if (!menu || !navbar || !cart || !cartIcon || !login || !userIcon) {
        console.error('Pastikan semua elemen HTML tersedia dengan selector yang benar.');
        return;
    }

    // Event untuk menu
    menu.onclick = () => {
        navbar.classList.toggle('active');
        menu.classList.toggle('move');
        cart.classList.remove('active'); // Tutup cart jika menu dibuka
        login.classList.remove('active'); // Tutup login form jika menu dibuka
    };

    // Event untuk cart
    cartIcon.onclick = () => {
        cart.classList.toggle('active');
        navbar.classList.remove('active'); // Tutup navbar jika cart dibuka
        menu.classList.remove('move');    // Reset ikon menu
        login.classList.remove('active'); // Tutup login form jika cart dibuka
    };

    // Event untuk user icon
    userIcon.onclick = () => {
        login.classList.toggle('active'); // Toggle login form
        cart.classList.remove('active'); // Tutup cart jika login form dibuka
        navbar.classList.remove('active'); // Tutup navbar jika login form dibuka
        menu.classList.remove('move');    // Reset ikon menu
    };
    
    window.onscroll = () => {
       
            navbar.classList.remove('active');
            menu.classList.remove('move');
    }
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });

    window.addEventListener('scroll', () => {
        scrolltop.classList.toggle('active', window.scrollY > 0);
    });


});
