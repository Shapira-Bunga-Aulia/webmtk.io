// Bunga Majemuk
document.getElementById('compoundInterestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const frequency = parseFloat(document.getElementById('frequency').value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time) && !isNaN(frequency)) {
        const amount = principal * Math.pow((1 + rate / frequency), frequency * time);
        const interest = amount - principal;

        document.getElementById('compoundResult').innerHTML = `Modal Akhir: Rp ${amount.toFixed(2)}<br>Bunga yang Dihasilkan: Rp ${interest.toFixed(2)}`;
    } else {
        document.getElementById('compoundResult').innerHTML = "Mohon isi semua data dengan benar!";
    }
});

// Bunga Tunggal
document.getElementById('simpleInterestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const principalSimple = parseFloat(document.getElementById('principal_simple').value);
    const rateSimple = parseFloat(document.getElementById('rate_simple').value) / 100;
    const timeSimple = parseFloat(document.getElementById('time_simple').value);

    if (!isNaN(principalSimple) && !isNaN(rateSimple) && !isNaN(timeSimple)) {
        const interestSimple = principalSimple * rateSimple * timeSimple;
        const amountSimple = principalSimple + interestSimple;

        document.getElementById('simpleResult').innerHTML = `Modal Akhir: Rp ${amountSimple.toFixed(2)}<br>Bunga yang Dihasilkan: Rp ${interestSimple.toFixed(2)}`;
    } else {
        document.getElementById('simpleResult').innerHTML = "Mohon isi semua data dengan benar!";
    }
});

// Anuitas
document.getElementById('annuityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const payment = parseFloat(document.getElementById('payment').value);
    const rateAnnuity = parseFloat(document.getElementById('rate_annuity').value) / 100;
    const timeAnnuity = parseFloat(document.getElementById('time_annuity').value);

    if (!isNaN(payment) && !isNaN(rateAnnuity) && !isNaN(timeAnnuity)) {
        const annuity = payment * ((1 - Math.pow(1 + rateAnnuity, -timeAnnuity)) / rateAnnuity);

        document.getElementById('annuityResult').innerHTML = `Nilai Sekarang Anuitas: Rp ${annuity.toFixed(2)}`;
    } else {
        document.getElementById('annuityResult').innerHTML = "Mohon isi semua data dengan benar!";
    }
});
