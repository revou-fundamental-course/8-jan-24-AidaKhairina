function luas(){
    var sisi = document.getElementById('luas').value;
    var rumus = "L = S x S";
    var teks = "L = " + sisi + " x " + sisi;
    var jumlah = parseInt(sisi)*parseInt(sisi);
    document.getElementById('rumusluas').innerHTML = rumus;
    document.getElementById('nilailuas').innerHTML = teks;
    document.getElementById('hasil').innerHTML = "L = " + jumlah ;
                            
     }

function keliling(){
        var nilai = document.getElementById('kel').value;
        var rumuskel = "K = 4 x S";
        var tekskel = "K = 4 x " + nilai;
        var jumlahkel = parseInt(nilai)* parseInt(4) ;
        document.getElementById ('rumuskeliling').innerHTML = rumuskel;
        document.getElementById ('nilaikeliling').innerHTML = tekskel;
        document.getElementById('keliling').innerHTML = "K = " + jumlahkel;
                                
         }

function hapus() {
    var sisi = document.getElementById('luas');
    sisi.value = null;
    document.getElementById('rumusluas').innerHTML = "";
    document.getElementById('nilailuas').innerHTML = "";
    document.getElementById('hasil').innerHTML = "";

}
function hapuss() {
    var nilai = document.getElementById('kel');
    nilai.value = null;
    document.getElementById('rumuskeliling').innerHTML = "";
    document.getElementById('nilaikeliling').innerHTML = "";
    document.getElementById('keliling').innerHTML = "";

}
