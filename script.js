function hitungNilai() {

    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    let nilaiAkhir = (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);

    let grade;

    if (nilaiAkhir >= 85) {
        grade = "A";
    } else if (nilaiAkhir >= 75) {
        grade = "B";
    } else if (nilaiAkhir >= 65) {
        grade = "C";
    } else if (nilaiAkhir >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    document.getElementById("nilaiAkhir").textContent =
        nilaiAkhir.toFixed(2);

    document.getElementById("grade").textContent = grade;

    document.getElementById("hasil").classList.remove("hidden");
}