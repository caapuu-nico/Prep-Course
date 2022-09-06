// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 // var array = Object.keys(objeto).map(function (key) {return[number(key), objeto[key]];});

  
  var array = Object.entries(objeto);
return array;
  }
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
                            //          
                       //        [i]    0    1      2      3     4      5
                                 //   ["a", "a"  , "d " , "f" , "f" ,  "x"]
                                    //  i
  var nuevoObj = {};
  for(var i = 0 ;  i < string.length ; i++){
    if(!nuevoObj.hasOwnProperty(string[i])){
    nuevoObj[string[i]] = 1;
  }else
  {
     nuevoObj[string[i]]++ ;
    }
  } 
    return nuevoObj;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
//                 s  o  y   H   E  N   R  Y
// [I]             0  1   2  3   4  5   6  7  
let mayus = ""
let min = ""
for(var i = 0 ; i< s.length   ; i++){
if(s[i] === s[i].toUpperCase()){
mayus += s[i];
} else {
  min +=  s[i];
}
}
  var nuevapalabra = mayus + min;
  return nuevapalabra;
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //   frase   "    "HOLA" "COMO  "
  //        I =     0123 4 5678   "caca con meo" (string)
//          I  =    
var nuevaPalabra =str.split(" "); // "caca"  "con"  "meo"   (split) (" ")       ==> [array]      
for(let i =0 ; i < nuevaPalabra.length; i++)
{//["caca"] ==>   [c,a,c,a](split) , "a","c" "a","c" (reverse),    "acac" (Join), 
  nuevaPalabra[i]  = nuevaPalabra [i]. split("").reverse().join("");
//variable        <= ¿que quiero guardar aca dentro?

}return nuevaPalabra.join(" ");



} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
//                                               i

  var str = numero.toString();               
 if(str.split("").reverse().join("") === str){
 return  "Es capicua"}else
 { return "No es capicua";
 }

 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
 /*var Nuevacadena = cadena.split("");
 for(i = 0; i < Nuevacadena.lenght ; i++ );
 if(Nuevacadena[i] === "a" && Nuevacadena[i] ==="b" && Nuevacadena[i] === "c" );
 return Nuevacadena */
  var nuevacadena = cadena.replace("a", "").replace("b", "").replace("c", "");
  return nuevacadena;
    
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí                                               [i]   0
 arr.sort(function(a, b){
 if(a.length > b.length){
 return 1;}
 if (a.length < b.length){
  return -1;}
  return 0;
 })
return arr 

}
//   retorna -1 ---> a , b   primero va a
//    retorna  1---> b, a     primero va b
//     retorna 0 ---- >  a, b   quedan igual



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
//  arreglo1 [1 , 2 , 3 , 4 , 5 ] ------  arregrlo 2 [1, 7 , 3 , 4 , 5]     ====> nuevoarray [ 3,  4,   5 ] 
 //           i                                       j
 //               i                                      j
 //                                                          j
 //cuando [j] cumple su ciclo y termino [i]cambia                j                                  
  //    y [j] vuelve a iniciar el bucle                              j                        
//                                                               
//                                                                    

 var numerosencomun = [];
 for (var i=0 ; i < arreglo1.length ; i++)
 //tiene prioridad el primer for [i] hasta que no cumple su proposito el segundo for [J](que termine el circuito)  el primero [i] no cambia su valor                                             
 {         
 for (var j=0; j < arreglo2.length ; j ++){
 if(arreglo1[i]  === arreglo2[j]){
 numerosencomun.push(arreglo1[i]);
}
}
}
return numerosencomun ;
  }






// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

