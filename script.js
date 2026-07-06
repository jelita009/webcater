document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Animasi Reveal on Scroll (Muncul Saat Gulir Halaman) ---
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = function() {
        const triggerBottom = window.innerHeight * 0.85; // Menentukan batas trigger interaksi dokumen

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    };

    // Jalankan sekali saat load pertama
    revealOnScroll();
    // Jalankan setiap kali pengguna scroll layar
    window.addEventListener("scroll", revealOnScroll);


    // --- 2. Akordeon FAQ Interaktif & Responsif ---
    const faqToggles = document.querySelectorAll(".faq-toggle");

    faqToggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const currentItem = this.parentElement;
            
            // Tutup item FAQ lain yang sedang terbuka (opsional, untuk kerapian)
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            // Toggle kelas aktif pada item yang diklik
            currentItem.classList.toggle("active");
        });
    });


    // --- 3. Efek Navigasi Berubah Warna Saat Scroll Melampaui Hero ---
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(249, 248, 246, 0.98)";
            header.style.boxShadow = "0 4px 20px rgba(92, 77, 60, 0.05)";
        } else {
            header.style.backgroundColor = "rgba(249, 248, 246, 0.85)";
            header.style.boxShadow = "none";
        }
    });
});