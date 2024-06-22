// - Fecha de publicación: [18/06/2024]
// - Número de la tarea: [1]
// - Hora: [10:00]PM
// - Versión de la tarea: [01]
// - Autores: [Todos los ingenieros del grupo (39)]
// - Nombre del lenguaje utilizado: [Javascript]
// - Versión del lenguaje utilizado: [“ECMASCRIPT 6.0”]
// - Presentado a: [Doctor Ricardo Moreno Laverde]

// ------- | Universidad Tecnológica de Pereira |-------------
// --- | Programa de Ingeniería de Sistemas y Computación |---

// - Descripción:
// El programa muestra los términos de la seria de Perrin hasta el término deseado

const prompt = require('prompt-sync')(); // Importa prompt-sync
const nTermino = parseInt(prompt("Ingrese el termino para la serie: ")); //Solicita el termino deseado para la serie de Perrin
 
// Función recursiva para calcular el termino de la serie de Perrin
const terminoPerrin = (termino) => {
  //Usamos termino como el numero del termino que se quiere hallar en la serie de Perrin
  if (termino === 0) return 3; // Primer término de la serie de Perrin
  if (termino === 1) return 0; // Segundo término de la serie de Perrin
  if (termino === 2) return 2; // Tercer término de la serie de Perrin

  // Calcula el término actual como la suma del doble del anterior termino más el que está dos terminos anteriores
  return terminoPerrin(termino - 2) + terminoPerrin(termino - 3);
};//Fin función

//Funcion principal que escribe en consola el numero de terminos que se hallaran en la serie de Perrin
function seriePerrin (nTerm, n) {
  //Usamos nTerm como el numero de terminos que se quiere hallar y n como contador
  if (n < nTerm - 1) {
    process.stdout.write(terminoPerrin(n) + ", ");//Mostramos el termino de Perrin sin hacer salto de linea usando la función terminoPerrin
    seriePadovan(nTerm, (n + 1));//Llamada recursiva a la función principal
  } else {
    process.stdout.write(terminoPerrin(n) + ".");//Mostramos el ultimo termino de la serie y un punto al final/ Salida de la función principal
  }
};//Fin función

seriePerrin(nTermino, 0);//Llamada a la función principal.