function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev){
    var data = ev.dataTransfer.getData("Text");
    var classDiv = ev.target.getAttribute("class");
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).setAttribute("draggable", false);
    ev.target.setAttribute("ondragover", "");
    document.getElementById(classDiv).setAttribute("value", data);
}

function check(){
    for (let i = 1; i <= 9; i++) {
        var jawaban= document.getElementById(`id${i}`).value;
        if(jawaban.replace(/^\s+|\s+$/g, '')===''){
            alert('Silakan tempel semua pecahan gambar terlebih dahulu!');
            return false;
        } else if (jawaban !== `drag${i}`){
            alert('Pupuup.. Salah! Hasil tidak sesuai.');
            return false;
        }
    }
    alert('Jawaban benar, lanjut ke gambar berikutnya~');
    return true
}


let cerita = 0;
function next() {
}
let paragraf1 = cerita.paragraf1

let paragraph1 = document.getElementById("paragraph1")
//dibawah untuk ganti tulisan didalam syntax html
paragraph1.innerHTML = "enji merasa terpukul setelah mengetahui anak sulungnya masih hidup dan menjadi penjahat"

//display='none' untuk menclose/ menghilangkan element

function ubahWarna() {
paragraph1.setAttribute("class", "warna-kuning")
}