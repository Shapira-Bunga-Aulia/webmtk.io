<?php
if (isset($_POST['compound_interest'])) {
    // Bunga Majemuk
    $principal = $_POST['principal'];
    $rate = $_POST['rate'] / 100;
    $time = $_POST['time'];
    $frequency = $_POST['frequency'];

    $amount = $principal * pow((1 + $rate / $frequency), $frequency * $time);
    $interest = $amount - $principal;

    echo "Modal Akhir untuk Bunga Majemuk: Rp" . number_format($amount, 2) . "<br>";
    echo "Bunga yang Dihasilkan: Rp" . number_format($interest, 2);
}

if (isset($_POST['simple_interest'])) {
    // Bunga Tunggal
    $principal_simple = $_POST['principal_simple'];
    $rate_simple = $_POST['rate_simple'] / 100;
    $time_simple = $_POST['time_simple'];

    $interest_simple = $principal_simple * $rate_simple * $time_simple;
    $amount_simple = $principal_simple + $interest_simple;

    echo "Modal Akhir untuk Bunga Tunggal: Rp" . number_format($amount_simple, 2) . "<br>";
    echo "Bunga yang Dihasilkan: Rp" . number_format($interest_simple, 2);
}

if (isset($_POST['annuity'])) {
    // Anuitas
    $payment = $_POST['payment'];
    $rate_annuity = $_POST['rate_annuity'] / 100;
    $time_annuity = $_POST['time_annuity'];

    $annuity = $payment * ((1 - pow(1 + $rate_annuity, -$time_annuity)) / $rate_annuity);

    echo "Nilai Sekarang Anuitas: Rp" . number_format($annuity, 2);
}
?>
