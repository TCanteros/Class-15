document.addEventListener(`DOMContentLoaded`, () => {
    const agregarForm = document.getElementById(`agregarForm`);
    const tarea = document.getElementById(`tarea`);
    const tareasListas =  document.getElementById(`tareasListas`);
    const  eliminarTarea = document.getElementById(`eliminarCompletadas`);

    agregarForm.addEventListener(`submit`, (e) =>{
        e.preventDefault();

        const tareaTexto = tarea.value;

        const tareaNueva = document.createElement(`li`);
        tareaNueva.textContent = tareaTexto;
        tareasListas.appendChild(tareaNueva);

    })

    tareasListas.addEventListener(`click`, (e) =>{
        if (e.target.tagName === `LI`){
            e.target.classList.toggle(`completada`);
            e.target.style.textDecoration = `line-through`
        }
    })

    eliminarTarea.addEventListener(`click`, (e) =>{
        const tareasCompletadas  = tareasListas.querySelectorAll(`li.completada`);
        tareasCompletadas.forEach((tarea) => {
            tarea.remove();
    })
})}
)
