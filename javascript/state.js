let state = {
    count: 0
};

function setState(newState) {
    state = {...state, ...newState}; // Memperbarui state dengan menggunakan spread operator
    render(); // Memanggil fungsi render untuk memperbarui UI
}

function render() {
    document.getElementById("count").innerText = `Hitung Nilai: ${state.count}`;
}

// Event listener untuk tombol "tambah"
document.getElementById("tambah").addEventListener("click", () => {
    setState({count: state.count + 1}); // Memperbarui state dengan menambahkan 1 ke nilai count
});

// Panggilan awal untuk render agar tampilan pertama kali sesuai dengan state awal
render();
