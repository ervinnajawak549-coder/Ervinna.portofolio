function hitungNilai() {

    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        alert("Nilai harus berada antara 0 sampai 100.");
        return;
    }

    let nilaiAkhir =
        (tugas * 0.30) +
        (uts * 0.30) +
        (uas * 0.40);

    let grade;
    let keterangan;

    if (nilaiAkhir >= 85) {
        grade = "A";
        keterangan = "Sangat Baik";
    } else if (nilaiAkhir >= 75) {
        grade = "B";
        keterangan = "Baik";
    } else if (nilaiAkhir >= 65) {
        grade = "C";
        keterangan = "Cukup";
    } else if (nilaiAkhir >= 50) {
        grade = "D";
        keterangan = "Kurang";
    } else {
        grade = "E";
        keterangan = "Tidak Lulus";
    }

    document.getElementById("nilaiAkhir").textContent =
        nilaiAkhir.toFixed(2);

    document.getElementById("grade").textContent = grade;

    document.getElementById("keterangan").textContent =
        keterangan;

    document.getElementById("hasil").classList.remove("hidden");
}