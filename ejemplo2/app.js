function obtenerHoraActual(){
    let ahora = new Date();
    let horas = ahora.getHours().toString().padStart(2, `0`);
    let minutos = ahora.getMinutes().toString().padStart(2, `0`);
    let segundos = ahora.getSeconds().toString().padStart(2, `0`);
    return `${horas}:${minutos}:${segundos}`
}

function actualizarReloj(){
    let reloj = document.getElementById(`reloj`);
    reloj.innerHTML = obtenerHoraActual();
}

actualizarReloj();

setInterval(actualizarReloj , 1000);
