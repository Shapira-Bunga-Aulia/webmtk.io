// Fungsi untuk menghitung bunga majemuk
function hitungBungaMajemuk() {
    const principal = parseFloat(document.getElementById('majemuk-principal').value);
    const rate = parseFloat(document.getElementById('majemuk-rate').value) / 100;
    const time = parseFloat(document.getElementById('majemuk-time').value);
    
    const compoundAmount = principal * Math.pow((1 + rate), time);
    document.getElementById('hasil-majemuk').innerHTML = "Modal Akhir: " + compoundAmount.toFixed(2);
}

// Fungsi untuk menghitung bunga tunggal
function hitungBungaTunggal() {
    const principal = parseFloat(document.getElementById('tunggal-principal').value);
    const rate = parseFloat(document.getElementById('tunggal-rate').value) / 100;
    const time = parseFloat(document.getElementById('tunggal-time').value);

    const simpleInterest = principal * (1 + (rate * time));
    document.getElementById('hasil-tunggal').innerHTML = "Modal Akhir: " + simpleInterest.toFixed(2);
}

// Fungsi untuk menghitung anuitas
function hitungAnuitas() {
    const principal = parseFloat(document.getElementById('anuitas-principal').value);
    const rate = parseFloat(document.getElementById('anuitas-rate').value) / 100;
    const time = parseFloat(document.getElementById('anuitas-time').value);

    const annuityPayment = (principal * rate) / (1 - Math.pow(1 + rate, -time));
    document.getElementById('hasil-anuitas').innerHTML = "Pembayaran Anuitas: " + annuityPayment.toFixed(2);
}
