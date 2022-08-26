// No cambies los nombres de las funciones.
// ARRAY: UN CONJUNTO DE ELEMENTOS QUE SE PUEDEN ACCEDER A TRAVES DE UN INDICE   



function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // array  ["tomate" , 1 , 2 "caca"]
//array [0];


return array [0] ;

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const devolverUltimoElemento = (array);
  return (devolverUltimoElemento[devolverUltimoElemento.length  -1]);
}// tambien podesmos usar 
//return array.pop();
//return array.shift();


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;

}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  // array = [1 ,2 ,3 ,4]
  // i = 0
for(let i= 0 ; i < array.length ; i++)
{array[i] += 1}
return array;


}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
  //primero se agrega el elemento luego se retorna el arreglo con el elemento dentro ya
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;   // igual que con push y pop se agrega el elemento luego devuelta el array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let string = (palabras.join(" "));
  return string;
  //let string = palabras[0];
  //for (let i = 1 ; i < palabras.length ; i ++){
  //string = string + " " + palabras [i]
  //}return string;
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  

if(array.includes(elemento)){
return true;
}
else{
return false;
}
// for (var i = 0 ; i < array.lenght; i ++)
//if ( array[i]  ===== elemento ){
//return true} 
//return false



}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

let sum = 0
for (let i = 0 ; i < numeros.length ; i++ )
{sum += numeros[i]};
return sum;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
 var i = 0 , summ = 0 , array = resultadosTest.length;
 while ( i < array){
  summ = summ + resultadosTest [i++];
 }return summ / array
}
  /* var suma  = 0;
      var promedio = 0
      for(var i = 0 ; i < resultadosTest.lenght ; i++){
        suma = suma + resultadosTest[i]}
        promedio = suma / resultadosTest.lenght;
        return promedio */
      

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
let grande = numeros[0]
for (let i = 0 ; i < numeros.length ; i++)
if(numeros[i] > grande){
  grande  = numeros[i]}
  return grande 
}
// return Math.max(...numeros);          forma mas facil y rapida de devolver mayor numero

  



function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
// cuando no aparacen datos hay que poner 
//console.log(arguments);
//multiplicarArgumentos();
if (arguments.length === 0){
  return 0}

  let producto = arguments[0]
  for (let i = 1 ; i < arguments.length ; i++ )
  
  {producto =producto*arguments[i]}
  return producto;

}




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

var mayor = 0;
  for (let i = 0 ; i < arreglo.length ; i++)
  if( arreglo[i] > 18){
    mayor = mayor + 1 ;
  }

    return mayor;



}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 ||  numeroDeDia === 7 ){
  return "Es fin de semana";}

  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var  string = n.toString();   // parameTro para convert numeros en "STRING"
 if (string[0] === "9"){
  return true
 }else{
  return false
 }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
   //     arreglo = [2 ,3, 5, 2]
  var arrayigual = arreglo[0]    //arreglo[0]   =   1  ( busca en el arreglo el punto 0 osea 1  )     


  for (var i = 1 ; i < arreglo.length ; i++){
          
    if ( arrayigual !== arreglo[i]){
        // 1     si es diferente se usa !==                      // seria inutil comparar     arrayigual con arreglo[1](si tienen el mismo valor de inicio)
     
     
        return false
    }return true;

  }// recorre todo el arreglo hasta encontrar una distintinta y tira false 
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray =[] // avisa que vamos a crear un nuevo array "[]"
  for(var i = 0 ; i < array.length ; i++){
  if(array[i] === "Enero" ||     array[i] === "Marzo" ||  array[i] === "Noviembre" )
  nuevoArray.push(array[i])}
  if(nuevoArray.length !==  3 ){
  
  return "No se encontraron los meses pedidos"}
  else{

  }return nuevoArray;

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray =[];
  for(var i = 0   ; i < array.length ; i++){
    if (array[i] > 100){
    nuevoArray.push(array[i])
    }
  }
    return nuevoArray
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var cont = 0
  var array = [];                       //        i=   0  1   2  3   4  5  6  7  8
  for(let i= 1 ; i <= 10 ; i++)  //   numero == [ 1, 2 , 3 ,4  ,4 ,5 ,6, 4, 5]
  {numero = numero + 2;
  cont = i;
  array.push(numero);

  if(numero === cont){
    break; 
  }
}
 if(numero === cont)
  {return "Se interrumpió la ejecución"}else{
    return array;
  }
} 



 //numero = numero + 2 ---> hasta 10 veces
// cont = cont + 1 
// array .push (numero)
// retornar array
// numero == cont ---> break 
// retorna "Se interrumpio la ejecución"





function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
var nuevoarray = []
var cont = 0
for (let i = 1 ; i < 10 ; i++)
  if(cont=== 5){
    continue  }
    else { 
numero = numero+2;
nuevoarray.push(numero);
}

return nuevoarray}

                       // si no cumple con lo dicho continua con la iteracion en ves de cortarse como el break




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
