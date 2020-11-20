function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev){
    // ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}

let cerita = 0;
function next() {
}
let paragraf1 = cerita.paragraf1

let paragraph1 = document.getElementById("paragraph1")
paragraph1.innerHTML = "enji merasa terpukul setelah mengetahui anak sulungnya masih hidup dan menjadi penjahat"

function ubahWarna() {
paragraph1.setAttribute("class", "warna-kuning")
}