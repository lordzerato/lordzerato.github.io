function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev){
    var data = ev.dataTransfer.getData("Text");
    var namaDiv = ev.target.getAttribute("name");
    document.getElementById(data).removeAttribute("class")
    ev.target.appendChild(document.getElementById(data));
    document.getElementById(data).setAttribute("draggable", false);
    document.getElementById(data).setAttribute("width", "110px");
    document.getElementById(data).setAttribute("height", "110px");
    ev.target.removeAttribute("ondragover");
    document.getElementById(namaDiv).setAttribute("value", data);
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
    return true;
}

let arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function random (arr) {
    let tmp = 0;
    for (let i = 0; i < arr.length; i++) {
        let acakNomer = Math.floor(Math.random()*9);
        tmp = arr[i];
        arr[i] = arr[acakNomer];
        arr[acakNomer] = tmp;
    }

    return arr;
}

function resetForm(str) {
    var arrayBaru = random(arrayAngka);
    console.log(arrayBaru)
    for (let i = 0; i < arrayBaru.length; i++) {
        document.getElementById(`drag${arrayBaru[i]}`).outerHTML = "";
        document.getElementById(`id${arrayBaru[i]}`).removeAttribute("value");
        var gambar = document.createElement("img");
        var targetPindah = document.getElementById("tempatAnswer");
        targetPindah.appendChild(gambar);
        gambar.setAttribute("id", `drag${arrayBaru[i]}`);
        gambar.setAttribute("src", `./img/${str}${arrayBaru[i]}.PNG`);
        gambar.setAttribute("class", "answer");
        gambar.setAttribute("draggable", "true");
        gambar.setAttribute("ondragstart", "drag(event)");
        var tabel = document.getElementById(`tab${arrayBaru[i]}`);
        tabel.setAttribute("ondragover", "allowDrop(event)");
    }
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