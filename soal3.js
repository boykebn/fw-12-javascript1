    // variabel dengan berisikan nilai
    const mtk = 200;
    const bahasaIndonesia = 90;
    const bahasaInggris = 90;
    const ipa = 90;
    
    // validasi untuk menyatakan jika salah satu nilai tidak terisi
    if(!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) { 
        console.log("Nilai harus terisi semua!")
    }else {
        // menhitung jumlah nilai dari variabel di atas
        let jumlah = mtk + bahasaIndonesia + bahasaInggris + ipa;
        // menjumlahkan hasil dari jumlah di bagi 4 untuk mendapatkan rata-rata
        const rataRata = (jumlah / 4); 
    
        // pengkondisian untuk menampilkan rata rata dan grade
        if (rataRata >= 90 && rataRata <= 100) {
            console.log("Rata- Rata : " + rataRata + "\n" + "Grade : A");
        }else if (rataRata >= 80 && rataRata <= 89) {
            console.log("Rata- Rata : " + rataRata + "\n" +"Grade : B");
        }else if (rataRata >= 70 && rataRata <= 79) {
            console.log("Rata- Rata : " + rataRata + "\n" +"Grade : C");
        }else if (rataRata >= 60 && rataRata <= 69) {
            console.log("Rata- Rata : " + rataRata +"\n" + "Grade : D");
        }else if (rataRata >= 0 && rataRata <= 59) {
            console.log("Rata- Rata : " + rataRata + "\n" +"Grade : E");
        }else {
            console.log("Nilai yang diisi salah!")
        }
    }