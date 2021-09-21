const tareas = require("./tareas.json")
const logic = require ("./funcionesTareas.js")


let opciones = process.argv[2]
let genero = process.argv[3]

switch (opciones) {
    case "listar":
        tareas.forEach((item, index)=>{ 
            console.log(tareas[index])
        })
        break;
    case "crear":
        logic.crearTarea(genero)
        break;
    case "filtrar":
        const estado = genero
        logic.filtrarPorEstado(estado)
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción")
        break;

    default:
        console.log("No entiendo qué quieres hacer.")
        break;
}

