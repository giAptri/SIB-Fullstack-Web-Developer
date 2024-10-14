-- Membuat tabel vendor
CREATE TABLE vendor (
    id INT PRIMARY KEY,
    nomor VARCHAR(50),
    nama VARCHAR(100),
    kode VARCHAR(50),
    alamat TEXT,
    kontak VARCHAR(50)
);

-- Membuat tabel pembelian
CREATE TABLE pembelian (
    id INT PRIMARY KEY,
    tanggal DATE,
    nomor VARCHAR(50),
    produk_id INT,
    jumlah INT,
    harga DECIMAL(10, 2),
    vendor_id INT,
    FOREIGN KEY (vendor_id) REFERENCES vendor(id)
);

INSERT INTO vendor (id, nomor, nama, kode, alamat, kontak) VALUES
(1, 'VND001', 'Vendor A', 'KD01', 'Jalan Merdeka 123', '08123456789'),
(2, 'VND002', 'Vendor B', 'KD02', 'Jalan Sudirman 456', '08234567890'),
(3, 'VND003', 'Vendor C', 'KD03', 'Jalan Thamrin 789', '08345678901'),
(4, 'VND004', 'Vendor D', 'KD04', 'Jalan Diponegoro 101', '08456789012'),
(5, 'VND005', 'Vendor E', 'KD05', 'Jalan Gatot Subroto 111', '08567890123');

INSERT INTO pembelian (id, tanggal, nomor, produk_id, jumlah, harga, vendor_id) VALUES
(1, '2024-10-01', 'PB001', 101, 10, 50000.00, 1),
(2, '2024-10-02', 'PB002', 102, 5, 75000.00, 2),
(3, '2024-10-03', 'PB003', 103, 8, 60000.00, 3),
(4, '2024-10-04', 'PB004', 104, 12, 45000.00, 4),
(5, '2024-10-05', 'PB005', 105, 15, 70000.00, 5);
