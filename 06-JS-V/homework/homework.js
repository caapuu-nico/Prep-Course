// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
   function Usuario (opciones){ 
            this.usuario = opciones.usuario;
            this.nombre = opciones.nombre;
            this.email =  opciones.email;
            this.password = opciones.password;
            }
            Usuario.prototype.saludar = function() {
              return "Hola, mi nombre es " + this.nombre;
            };
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () {
    return "Hello World!"
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
String.prototype.reverse = function(){             // Pababra Hola que tiene largo de 4
     var invertida =" ";                            //                       THIS.LENGHT             0   1   2   3
     for(var i = this.length - 1 ; i >= 0; i--){     //THIS ===> ES ""  HOLA ""                      H   O   L   A                                      
      invertida = invertida + this.charAt[i];                     //    I = 0 - 1  = ( A ) PREGUTA ¡ ¿[I]? ES >= a 0, NO POR QUE [I] VALE 3   ES LA LETRA (A) DE "HOLA" ENTONCES VUELVE A HACER EL BUCLE                      
                                                      //  I = 2  =  ( L ) PREGUNTA   ¿[I]?ES >= a 0 , NO POR QUE [I] VALE 2  ES LA LETRA (L) DE "HOLA"  ENTONCES VUELVE A HACER EL BUCLE            
                                                     // [I] VA CAMBIANADO SU VALOR DE ATRAS PARA DELANTE  HASTA QUE CUMPLA SU PROPOSITO   ( I --) 
  }                                                 // INVERTIDA +- THIS[i]  QUEREMOS QUE CADA VES QUE SE CUMPLE EL BUCLE COMPLETA INVERTIDA DICHA POSICION ESTE [i]
  return invertida;
};
}
 // OTRO METODO SERIA        return this.split("").reverse().join("");


// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio){
      // Crea el constructor:
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.domicilio = domicilio;}
    detalle = function  (){
      return{
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.nombre,
      Domicilio: this.domicilio,
    }
}}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  return new Persona (nombre, apellido, edad, dir);
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {

   var nombre = this.nombre;
   var edad = this.edad;
   return nombre + ", "+edad+" años";
  }                              // otro metodo seria       Persona.prototype.datos = function() { return this.nombre + ", " + this.edad + " años";   }
}                                 // otro metodo             Persona.prototype.datos = function() {return ${this.nombre}, ${this.edad} años ;
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
