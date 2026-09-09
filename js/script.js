let form = document.getElementById("formPendaftaran");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let kelas = document.getElementById("kelas").value;
    let jurusan = document.getElementById("jurusan").value;
    let kegiatan = document.getElementById("kegiatan").value;
    let syarat = document.getElementById("syarat").checked;

    console.log("Nama:", nama);
    console.log("Email:", email);
    console.log("Kelas:", kelas);
    console.log("Jurusan:", jurusan);
    console.log("Kegiatan:", kegiatan);
    console.log("Syarat:", syarat);

    document.getElementById("errorNama").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorKelas").innerHTML = "";
    document.getElementById("errorJurusan").innerHTML = "";
    document.getElementById("errorKegiatan").innerHTML = "";
    document.getElementById("errorSyarat").innerHTML = "";

    if (nama == "") {
        document.getElementById("errorNama").innerHTML = "Wajib diisi!";
        console.log ("nama nya ga boleh kosong ya sayang");
    }

    if (email == "") {
        document.getElementById("errorEmail").innerHTML = "Wajib diisi!";
        console.log ("email nya di isi ya sayang");
    }

    if (kelas == "") {
        document.getElementById("errorKelas").innerHTML = "Wajib dipilih!";
        console.log ("kelas nya di isi ya beb");
    }

    if (jurusan == "") {
        document.getElementById("errorJurusan").innerHTML = "Wajib dipilih!";
        console.log ("jurusan kamu juga di isi ya");
    }

    if (kegiatan == "") {
        document.getElementById("errorKegiatan").innerHTML = "Wajib diisi!";
        console.log ("kegiatan kamu apa aja?");
    }

    if (syarat == false) {
        document.getElementById("errorSyarat").innerHTML =
            "Wajib menyetujui syarat!";
            console.log ("syarat wajib di setujui!");
            
    }

    if (
        nama != "" &&
        email != "" &&
        kelas != "" &&
        jurusan != "" &&
        kegiatan != "" &&
        syarat == true
    ) {

        document.getElementById("hasil").innerHTML =
            "<h3>Pendaftaran Berhasil!</h3>" +
            "<p>Nama: " + nama + "</p>" +
            "<p>Email: " + email + "</p>" +
            "<p>Kelas: " + kelas + "</p>" +
            "<p>Jurusan: " + jurusan + "</p>" +
            "<p>Kegiatan: " + kegiatan + "</p>";

        console.log("Pendaftaran berhasil!");
    }

});