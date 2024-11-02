b<?php
// Definisi class Buku
class Buku {
    public $judul;
    public $penulis;

    public function __construct($judul, $penulis) {
        $this->judul = $judul;
        $this->penulis = $penulis;
    }

    public function infoBuku() {
        return "Judul: {$this->judul},</br> Penulis: {$this->penulis}</br>";
    }
}

// Definisi class turunan BukuDigital
class BukuDigital extends Buku {
    public $ukuranFile;

    public function __construct($judul, $penulis, $ukuranFile) {
        parent::__construct($judul, $penulis);
        $this->ukuranFile = $ukuranFile;
    }

    // Override method infoBuku
    public function infoBuku() {
        return "Judul: {$this->judul} ,</br> Penulis: {$this->penulis},</br> Ukuran File: {$this->ukuranFile} MB";
    }
}

// Contoh penggunaan
$buku1 = new Buku("Pemrograman PHP", "Jane Doe");
echo $buku1->infoBuku(); // Output: Judul: Pemrograman PHP, Penulis: Jane Doe

echo "\n"; // Line break

$bukuDigital1 = new BukuDigital("Pemrograman PHP", "Jane Doe", 10);
echo $bukuDigital1->infoBuku(); // Output: Judul: Pemrograman PHP, Penulis: Jane Doe, Ukuran File: 10 MB
?>
