let container = document.getElementById("container");
let modal = document.getElementById("modal");
let modalImage = document.getElementById("modalImage");
let currentAudio = null;  // Variabel untuk menyimpan audio yang sedang diputar

// Array berisi gambar dan suara
let imageList = [
    {src: "image/leslie.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/adrianlima.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/hailey.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/jaeden.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/lanadelrey.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/orangorang.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/selenagomez.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/simon.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/spiderman.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"},
    {src: "image/spongebob.png", sound: "audio/The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio).mp3"}
];

// Fungsi untuk menambahkan gambar
function tambahgambar() {
    container.innerHTML = ""; // Hapus konten container

    // Tambahkan 10 gambar ke dalam container
    imageList.forEach((item, index) => {
        let gambar = document.createElement("img");
        gambar.src = item.src;
        gambar.alt = "Gambar " + (index + 1);
        gambar.onclick = function() {
            tampilkanModal(item.src, item.sound);
        };
        container.appendChild(gambar);
    });
}

// Fungsi untuk menampilkan modal dengan gambar dan memutar suara
function tampilkanModal(imageSrc, soundSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;

    // Hentikan audio yang sedang diputar sebelumnya (jika ada)
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;  // Reset ke awal
    }

    // Putar suara baru
    currentAudio = new Audio(soundSrc);
    currentAudio.play();
}

// Fungsi untuk menutup modal dan menghentikan suara
function closeModal() {
    modal.style.display = "none";

    // Hentikan audio yang sedang diputar
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;  // Reset audio ke awal
    }
}
