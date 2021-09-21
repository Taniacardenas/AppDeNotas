const fs = require ("fs")
const tareas = require("./tareas.json")




//crea y agrega una nueva tarea
const crearTarea = genero => {
    const nuevaTarea = {
        genero: genero,
        estado: "Pendiente"
    }
    guardarTarea(nuevaTarea)
}

//Nos agrega la nueva la tarea  al array de tareas.Json 
const guardarTarea = nuevaTarea => {
    const listaTareas = tareas
    listaTareas.push(nuevaTarea)
    escribirJson(listaTareas)
}

//Nos convierte el array de objetos literales en formato Json y nos escribe en el archivo tareas.Json 
const escribirJson = (listaTareas)=>{
    const listaTJson = JSON.stringify(listaTareas,null,4)
  fs.writeFileSync("./tareas.json",listaTJson)
}

//Nos filtra  el array según el estado y nos muestra los elementos que ci¿umplan con el requerimiento.
const filtrarPorEstado = (estado)=>{
    const listaTareas = tareas
    return console.log(listaTareas.filter(item =>item.Estado == estado))
}

  

module.exports = {crearTarea, filtrarPorEstado }
