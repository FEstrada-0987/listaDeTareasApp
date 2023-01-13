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
//console.log(tareas)

                                // CUATRO MANERAS DE ITERAR CON EN UN ARRAY DE OBJETOS

                                //  for (let i = 0; i < tareas.length; i++){
                                //      console.log(tareas[i])   // aca va me muestra en consola toda la estructura del array con su informacion
                                //     // console.log(tareas[i].Titulo + " " + tareas[i].Estado)   // aca me muestra en consola el cotenido que hay en el titulo y Estado
                                //   } 
                                

                                //2da forma de iterar con un FOR OF
                                        // for ( obj of tareas) {
                                        //     console.log(obj.Estado + " " + obj.Titulo) }

                                //3era forma de iterar con el METODO MAP()
                                //tareas.map(  (obj)=> console.log(obj.Titulo + " " + obj.Estado)  )

                                // 4ta forma de iterar es con un forEach
                                //  tareas.forEach((obj)=> console.log(obj.Titulo + " " + obj.Estado)  )

//-------Desafío 2 -----------------------------------------------------------------------------------//
                // Agregar tarea:
                // Para agregar la tarea debemos crear una función que realizara el trabajo,
                // recibira los parametros necesarios para la creacion de la tarea.
                // Agregara la tarea al final del array de tareas.
                // Al finalizar mostrar nuevamente el array de tareas

// const crearTarea = (titulo,estado) =>{

//          tareas.push({Titulo: titulo, Estado: estado})
//                  return tareas
// } 
//               console.log(crearTarea("Estudiar React", "Empezando"))
//               console.log(tareas)




// ------------------Desafio 3-------------------------------------------------------
                    // Listar tareas
                    // Crear una funcion que mostrara las tareas solo del parametro dado.
                    // Ejemplo:
                    // mostrarTareas(“en progreso”) //Debera solo mostrar el array de objetos con tareas en progreso
                    // Si la palabra ingresada en el parametro no coincide con ninguno de los 3 estados debera mostrar todas las tareas sin importar su estado. EjemploÑ mostrarTareas(“dujshadhasik”)
                    // Comprobar el correcto funcionamiento con console.log
                   


//  const filtrarTareas = (estado) => {
//    for(const tarea of tareas){ // itero para que busque el estado --- mi constante tarea 
//          if (tarea.Estado ===  estado) {  // Si el estado de todos los parametros es igual a estado 
//                 tareas.filter(tar => tar.Estado === estado)  // le pido que me filtre por todas esas tareas q estoy buscando
//                      return  tarea        
//          }
//     }
//         return tareas
//  } 
//         console.log(filtrarTareas("En progreso"))
//         //console.log(filtrarTareas("Pendiente"))
       // console.log(filtrarTareas("lalala"))



                                                    // const progreso = tareas.filter(element => element.Estado === `En progreso`)
                                                    //  console.log(progreso)
                                                    
                                                    //  const noProgreso = tareas.filter(element => element.Estado != `En progreso`)
                                                    // console.log(noProgreso)
                                                
                                                    //      const crearTarea = tareas.filter(function (elemento){
                                                            
                                                    //         if (elemento.Estado === "En progreso") {
                                                    //                 return true                         
                                                    //             } 
                                                    //             else {
                                                    //                 return 
                                                    //         }  
                                                    // })
                                                    //  console.log(crearTarea);                   

                                                                // let fn = (e) => e.Estado === "En progreso";
                                                                // return tareas.some(fn)
                                                // console.log(tareas.some(fn)) // some se va a fijar q por lo menos uno cumpla con la condicion
                                                                            









// Desafio 4
// Agregar Verificacion
// Modificar la funcion del desafio 2, 
//ya que si el titulo de la tarea que se desea ingresar //necesito un if igualando al titulo q me retorne un mensaje de error
//ya existe en el array, debera devolvernos un mensaje de error, avisandonos que ya existe esa tarea.
// En el caso de no existir, agregarlo normalmente // el else seria pushear

    //  const modificare =      
     
    //  tareas.map(tarea =>{
    //     return tarea.Titulo = alert('existo')            
    //  }) //NO SE COMO METER ESTO DENTRO DEL IF
       
    
      

// Desafio 5
// Existe tarea?

// Crear una funcion que devolvera las tareas en donde el titulo coincida con el parametro dado. 
// Ejemplo: existeTarea(“js”) // Devera devolver el array con los objetos que coincidan con el string sin importar su estado

const existo = (obj,algo) =>{
        if (obj.Titulo != " "){
           const guardo = tareas.filter( elem => elem.Titulo.includes(obj.Titulo))
           return guardo
        }
} 
console.log(existo("Estudiar CSS"))