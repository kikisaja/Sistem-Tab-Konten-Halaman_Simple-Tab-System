// --- 1. SELEKSI ELEMEN DOM ---
const kelompokTombolTab = document.querySelectorAll(".btn-tab");
const kelompokPanelKonten = document.querySelectorAll(".tab-panel");

// --- 2. FUNGSI LOGIKA UTAMA ---

function eksekusiPerpindahanTab(e) {
    const tombolKlik = e.currentTarget;
    const idTargetKonten = tombolKlik.dataset.target; // Mengambil string ID panel target dari atribut 'data-target'

    // --- TAHAP 1: Bersihkan Status Aktif Tombol ---
    // Melakukan perulangan untuk mencabut class 'active' dari seluruh tombol navigasi
    kelompokTombolTab.forEach(btn => btn.classList.remove("active"));

    // --- TAHAP 2: Sembunyikan Seluruh Panel Konten ---
    // Melakukan perulangan untuk mencabut class 'active' dari seluruh boks konten materi
    kelompokPanelKonten.forEach(panel => panel.classList.remove("active"));

    // --- TAHAP 3: Aktifkan Elemen Terpilih ---
    // Tambahkan class 'active' pada tombol yang baru saja diklik oleh user
    tombolKlik.classList.add("active");

    // Cari elemen boks panel berdasarkan ID target, lalu suntikkan class 'active' agar muncul di layar
    const panelTarget = document.getElementById(idTargetKonten);
    if (panelTarget) {
        panelTarget.classList.add("active");
    }
}

// --- 3. BINDING EVENT LISTENERS ---
// Menempelkan event klik ke masing-masing tombol navigasi tab menggunakan perulangan forEach
kelompokTombolTab.forEach(tombol => {
    tombol.addEventListener("click", eksekusiPerpindahanTab);
});
