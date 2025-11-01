// Fungsi untuk Mengaktifkan/Menonaktifkan Menu Mobile
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.mobile-menu-icon i');

    mobileNav.classList.toggle('open');

    // Mengganti ikon hamburger menjadi X dan sebaliknya
    if (mobileNav.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

// Fungsi Notifikasi Keranjang dan Animasi
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.closest('.product-card').querySelector('h3').textContent;
            
            // Animasi feedback visual (Tombol menjadi Emas sejenak)
            button.style.backgroundColor = 'var(--color-secondary)';
            button.style.color = 'var(--color-primary)';
            button.textContent = 'Ditambahkan!';

            setTimeout(() => {
                button.style.backgroundColor = 'var(--color-primary)';
                button.style.color = 'var(--color-text-light)';
                button.innerHTML = '<i class="fas fa-bolt"></i> Tambahkan';
            }, 800);

            // Notifikasi (bisa diganti dengan fungsi keranjang yang sebenarnya)
            console.log(`Produk "${productName}" ditambahkan.`);
        });
    });
});