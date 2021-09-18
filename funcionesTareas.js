const fs = require ("fs")
const tareas = require("./tareas.json")

const ejecutarTareas = (opciones)=>{
    switch (opciones) {

        //aqui va mi forEach
        case "listar":
            console.log(tareas)
            break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción" )
            break;
    
        default:
            console.log("No entiendo qué quieres hacer." )
            break;
    }

}

module.exports = ejecutarTareas
