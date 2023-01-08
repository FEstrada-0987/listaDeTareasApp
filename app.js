// //Crear una variable llamado tareas y dentro de ella guardar un array de objetos literales. 
// Cada objeto literal deberá tener las propiedades: titulo y estado.
// En donde el título podrá ser cualquier cadena de texto, sin embargo 
// el estado sólo podrá tomar los siguientes valores: “terminada”, “en progreso” o “pendiente”.
//  Para que tenga una idea de lo que le solicita, aquí le dejamos un ejemplo:
//
            //1. Generar un archivo app.js que tenga el array de tareas.
            //2. Mostrar el listado de tareas existente por la terminal.

            
const tareas = [
    {
        Titulo: "Estudiar HTML",
        Estado: "Terminado"
    },
    {
        Titulo: "Estudiar CSS",
        Estado: "En progreso"
    },
    {
        Titulo: "Estudiar JS",
        Estado: "Pendiente"
    },
    {
        Titulo: "Practicar JS",
        Estado: "En progreso"
    },       

]

 for (let i = 0; i < tareas.length; i++){
//    // console.log(tareas[i])   // aca va me muestra en consola toda la estructura del array con su informacion
   console.log(tareas[i].Titulo + " " + tareas[i].Estado)   // aca me muestra en consola el cotenido que hay en el titulo y Estado
 } 
 

//2da forma de iterar con un FOR OF
        // for ( obj of tareas) {
        //     console.log(obj.Estado + " " + obj.Titulo) }

//3era forma de iterar con el METODO MAP()
   //tareas.map(  (obj)=> console.log(obj.Titulo + " " + obj.Estado)  )

// 4ta forma de iterar es con un forEach
  //  tareas.forEach((obj)=> console.log(obj.Titulo + " " + obj.Estado)  )

//-------Desafío 2 -----------------------------------------------------------------------------------//
                // Agregar tarea:
                // Para agregar la tarea debemos crear una función que realizara el trabajo, recibira los parametros necesarios para la creacion de la tarea.
                // Agregara la tarea al final del array de tareas.
                // Al finalizar mostrar nuevamente el array de tareas
