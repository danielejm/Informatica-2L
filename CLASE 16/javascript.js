let tareas = [ ]
let tabla = document.querySelector('#work')

function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha de Entrega</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.materia}</td><td>${tarea.desc}</td>
        <td>${tarea.fecha}</td></tr>`
    }
    tabla.innerHTML = contenidoTabla;
}


let form = document.querySelector("#formularioAdd");

function addNota(){

    let materiaNueva = document.querySelector("input[name=materia]").value
    let descNueva = document.querySelector("input[name=desc]").value
    let fechaNueva = document.querySelector("input[name=fecha]").value
    let tareaNueva = {materia:materiaNueva, desc:descNueva, fecha:fechaNueva}
    console.log("Ahora voy a añadir el siguiente planeta");
    console.log(tareaNueva)


    tareas.push(tareaNueva)
    llenarTabla();
    return false;
}

form.onsubmit = addNota;


llenarTabla();