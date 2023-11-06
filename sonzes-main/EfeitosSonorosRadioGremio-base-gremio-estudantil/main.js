function tocaSomVaca(){
    document.querySelector("#som_tecla_vaca").play();
}
const listadeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < 9 ){
    listadeTeclas[contador].onclick = tocaSomVaca;
    contador = contador + 1;
    console.log(contador);
}