 var v1 = document .getElementById("var_Texto");
 var v2 = document .getElementById("var_Entera");
 var v3 = document .getElementById("var_Booleana");


// Tipo String (Texto) 
 var nombre = "edwin";

// Tipo Number (Numerico) 
 var edad = 50.2;

// Tipo  Boolean (Booleano)
 var vive = true;


// Tipo Array (Arreglo - Vector)

var vector = ['juan','pedro','manuel',true,13.37]

//Operaciones
var opNombre = 'Colegio' + ' ET Nro 12'
var opEdad = 12.2 + 12.3
var opVive = false + false;




// Muestro las variables en los respectivos elementos html
 v1.innerText +=  ' ' + opNombre  ;
 v2.innerText +=  ' ' + opEdad  ;
 //v3.innerText +=  ' ' + vector  ;

 
 for (var i=0; i<=4 ; i++){

    v3.innerText += '[' + vector[i] + ']' + ', ';
 }