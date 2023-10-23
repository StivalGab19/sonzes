function tocasomvaca(){
    document.querySelector("som_tecla_vaca").play();
}
const listadeTeclas = document.querySelectorAll(".tecla");

listadeTeclas[2].onlick = tocasomvaca;