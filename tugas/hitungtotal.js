// Fungsi hitungTotal dengan rest parameter
const hitungTotal = (nama, ...nilai) => {
  // arrow function untuk menghitung total
  const total = nilai.reduce((acc, curr) => acc + curr, 0);

  // Spread operator untuk menambahkan nilai tambahan [3, 7]
  const totalFinal = [...nilai, ...[3, 7]].reduce((acc, curr) => acc + curr, 0);

  // Cetak ke console dengan template literals
  console.log(
    `Halo ${nama}, total nilai yang telah dihitung adalah ${totalFinal}`
  );
};

// Contoh pemanggilan fungsi
hitungTotal("Argya", 5, 10, 15);
