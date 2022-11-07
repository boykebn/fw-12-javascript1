function hitung() {
    const mtk = 80;
    const bahasaIndonesia = 90;
    const bahasaInggris = 90;
    const ipa = 90;
    let jumlah = parseInt(mtk) + parseInt(bahasaIndonesia) + parseInt(bahasaInggris) + parseInt(ipa);
    let rataRata = (jumlah / 4); 

    if (rataRata >= 90) {
        console.log("Rata- Rata : " + rataRata + " Grade : A");
    }else if (rataRata >= 80) {
		console.log("Rata- Rata : " + rataRata + " Grade : B");
    }else if (rataRata >= 70) {
        console.log("Rata- Rata : " + rataRata + " Grade : C");
    }else if (rataRata >= 60) {
        console.log("Rata- Rata : " + rataRata + " Grade : D");
    }else if (rataRata >= 56) {
        console.log("Rata- Rata : " + rataRata + " Grade : E");
    }else {
        console.log("Nilai Harus Terisi Semua")
    }
	return hitung;
}

hitung();