let contador = 0;

function aumentar(){
    contador++
    const contadorElemento = document.getElementById("container");
    contadorElemento.textContent = contador;

}

function disminuir(){
    contador--
    const contadorElemento = document.getElementById("container");
    contadorElemento.textContent = contador;

}