// Mengambil elemen menu dan navbar
const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

// Menambahkan event listener ketika menu di-klik
menu.onclick = () => {
    menu.classList.toggle('fa-times');  // Menambahkan/menghapus kelas fa-times
    navbar.classList.toggle('active');  // Menambahkan/menghapus kelas active pada navbar
}

// Mengambil semua elemen section dan navLinks
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

// Event listener ketika window di-scroll
window.onscroll = () => {
    // Menghapus kelas fa-times dan active pada menu dan navbar ketika di-scroll
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Looping untuk setiap section
    sections.forEach(section => {
        const top = window.scrollY;  // Posisi scroll saat ini
        const height = section.offsetHeight;  // Tinggi dari section
        const offset = section.offsetTop - 150;  // Offset untuk menentukan batas scroll
        const id = section.getAttribute('id');  // ID section

        // Mengecek apakah scroll berada dalam jangkauan section
        if (top >= offset && top < offset + height) {
            // Menghapus kelas active dari semua link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Menambahkan kelas active pada link yang sesuai dengan section yang sedang aktif
            document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        }
    });
}

// Menampilkan atau menyembunyikan form pencarian ketika search icon di-klik
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

// Menutup form pencarian ketika close button di-klik
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// Inisialisasi Swiper untuk home-slider
const homeSwiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

// Inisialisasi Swiper untuk review-slider
const reviewSwiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,  // Menampilkan 1 slide pada layar kecil
        },
        640: {
            slidesPerView: 2,  // Menampilkan 2 slide pada layar dengan lebar 640px
        },
        768: {
            slidesPerView: 2,  // Menampilkan 2 slide pada layar dengan lebar 768px
        },
        1024: {
            slidesPerView: 3,  // Menampilkan 3 slide pada layar dengan lebar 1024px
        },
    },
});