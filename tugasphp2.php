<?php
function sapaan($nama = "Tamu", $waktu = null) {
    // Memeriksa apakah parameter waktu diisi atau tidak
    if ($waktu === "pagi") {
        echo "Selamat pagi, $nama! Semoga harimu menyenangkan.";
    } elseif ($waktu === "siang") {
        echo "Selamat siang, $nama! Jangan lupa makan siang ya.";
    } elseif ($waktu === "sore") {
        echo "Selamat sore, $nama! Semoga harimu lancar.";
    } elseif ($waktu === "malam") {
        echo "Selamat malam, $nama! Semoga beristirahat dengan tenang.";
    } else {
        // Jika waktu tidak diisi atau tidak sesuai, gunakan sapaan umum
        echo "Halo, $nama! Selamat datang!";
    }
}

// Contoh penggunaan
sapaan("Ayu", "pagi"); // Output: Selamat pagi, Ayu! Semoga harimu menyenangkan.
sapaan("Budi", "siang"); // Output: Selamat siang, Budi! Jangan lupa makan siang ya.
sapaan("Dewi", "malam"); // Output: Selamat malam, Dewi! Semoga beristirahat dengan tenang.
sapaan(); // Output: Halo, Tamu! Selamat datang!
?>
