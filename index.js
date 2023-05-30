//Números
let numero1
numero1=50
console.log(numero1);
document.getElementById("numeros").innerHTML = numero1;

let numero2
numero2=20

//Operación suma
let suma=(numero1 + numero2);
console.log(suma);
document.getElementById("sumar").innerHTML = "Suma " +suma;

//Operación resta
let resta=(numero1-numero2);
console.log(resta);
document.getElementById("restar").innerHTML = "Resta " +resta;

//Operación multiplicacion
let multiplicacion=numero1*numero2;
console.log(multiplicacion);
document.getElementById("multip").innerHTML = "Multiplicación " +multiplicacion;

//Operación división
let division=numero1/numero2;
console.log('Su división es ' +division);
document.getElementById("divi").innerHTML = "División " +division;


//Cadenas de texto
let frase="Buenas tardes";
let nombre="Libertad";
let apellido="Lorda";

//Concatenación
console.log(`${frase}, ${nombre}${apellido}`);
document.getElementById("cadena de texto").innerHTML = `${frase}, ${nombre}  ${apellido}`;

//Dato booleano
let verdadero=true;
let falso=false
console.log(verdadero);
console.log(falso);
document.getElementById("booleanTrue").innerHTML = verdadero;
document.getElementById("booleanFalse").innerHTML = falso;

//Para saber el tipo de dato de una variable --> Typeof
console.log(typeof numero2);
document.getElementById("tipo de variable").innerHTML = "Tipo de dato: " +typeof numero2;



//Función Saludo 
function saludo(nombre){
    console.log("Hola " +nombre);
    document.getElementById("saludar").innerHTML = "Hola " +nombre;  
}

//Función suma
function sumar(num1, num2){
    let resultado=num1 + num2;
    console.log(`La suma de ${num1} y ${num2} es ${resultado}`);
    document.getElementById("funcionsuma").innerHTML = `La suma de ${num1} y ${num2} es ${resultado}`;
}

//Función par/impar
function parimpar(numero1){
    if (numero1%2==0){
        console.log(`El numero ${numero1} es par`);
        document.getElementById("funcionparimpar").innerHTML = `El numero ${numero1} es par`;
    }
    else{
        console.log('Es impar');
        document.getElementById("funcionparimpar").innerHTML = `El numero ${numero1} es impar`;
    }
    }


//Objeto coche, con otro objeto anidado
var coche ={
    marca:'alfa romeo',
    puertas:4,

    deposito:{
        tipo:'diesel',
        tamaño:'70litros',
    } 
}

//Función que devuelve la marca del carro
function logotipo(marca){
    console.log(`La marca del coche es ${coche.marca}`);
    document.getElementById("marcacoche").innerHTML = `La marca del coche es ${coche.marca}`;
}

//Función que devuelve la cantidad de puertas del coche
function numpuertas(puertas){
    console.log('El coche ', coche.marca , 'tiene', coche.puertas ,'puertas');
    document.getElementById("numerodepuertas").innerHTML = 'El coche ' +coche.marca+ ' tiene ' +coche.puertas +  ' puertas';
}

//Funcion que devuelve un atributo del objeto anidado
function combustible(){
    console.log(`El tipo de combustible es ${coche.deposito.tipo}`);
    document.getElementById("atributoanidado").innerHTML = `El tipo de combustible es ${coche.deposito.tipo}`;
}

//Array de 10 números
let arraynumeros=[1,3,5,6,8,22,35,12,89,230];
console.log(arraynumeros);
document.getElementById("array").innerHTML = arraynumeros;

//Funcion que imprima los valores del array
function imprimirfor(){
    let imprime="";
    for (let i = 0; i < arraynumeros.length; i++) {
        imprime += arraynumeros[i] + " ";
      }
    console.log(imprime);
}

//Función que añada un número al array
function añade(){
    arraynumeros.push(numero1);
    console.log(arraynumeros);
    document.getElementById("añadirelemento").innerHTML = arraynumeros;
}

//Función que elimine los elementos pares del array
function elimina(){
    for (let i = 0; i < arraynumeros.length+1; i++) {
        if(arraynumeros[i]%2==0){
            delete(arraynumeros[i]);       
        }
        else{
            console.log (arraynumeros);
        }
      }
    document.getElementById("eliminarpares").innerHTML = arraynumeros;
}
    
//Función que devuelva el número mayor
function numMayor(){
    let mayor=0;
    for (let i = 0; i < arraynumeros.length; i++) {
        let num=arraynumeros[i];
        if(i==0){
            mayor=num;     
        }
        else{
            if(num>mayor)
                mayor=num;
        }
      }
    console.log(`El numero mayor es ${mayor}`);
    document.getElementById("mayor").innerHTML = `El numero mayor es ${mayor}`;
}

//Función que devuelve el número menor
function numMenor(){
    let menor=0;
    for (let i = 0; i < arraynumeros.length; i++) {
        let num=arraynumeros[i];
        if(i==0){
            menor=num;     
        }
        else{
            if(num<menor)
                menor=num;
        }
      }
    console.log(`El numero menor es ${menor}`);
    document.getElementById("menor").innerHTML = `El numero menor es ${menor}`;
}

//Función que convierta a minúsculas una cadena de texto
function minusculas(){
    let textMin= document.getElementById("fraseMinusculas").innerHTML = frase.toLowerCase();
    console.log(textMin);
}

//Función que convierta a mayúsculas una cadena de texto
function mayusculas(){
    let textMay= document.getElementById("fraseMayusculas").innerHTML = frase.toUpperCase();
    console.log(textMay);
}

//Función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula
let anombres=["maria", "pepe", "berta", "anton"];
function letraMayuscula(anombres){
    for (let i = 0; i < anombres.length; i++) {
        anombres[i] = anombres[i].charAt(0).toUpperCase() + anombres[i].substr(1);
      }
    console.log(anombres);
}

//Función mensaje en botón hecho en el HTML
function mensaje(){
    window.alert("Ten buen día!");
}

//Cambiar el contenido de un elemento HTML mediante JavaScript
function cambio(){
document.getElementById("titulo").innerHTML = "Taller 5: Primeros pasos con JavaScript";
}

//Ocultar y mostrar elemento HTML 
function ocultarMensaje(){
	document.getElementById("parrafo").style.display="none";
}
function mostrarMensaje(){
    document.getElementById("parrafo").style.display="block";
	
}

//Crear un array de 10 nombres. Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
const arraynombres=["Maria", "Pepe", "Berta", "Anton", "Jesus","Ana","Eli","Jose","Luisa","Marga"];
function imprimir(arraynombres){
    for(let i=0; i<arraynombres.length; i++){
        console.log(arraynombres[i]);
    }
    document.getElementById("imprimirArray").innerHTML = arraynombres;
}

//Array de numeros y cuantos números tiene el array
const numarray=[1,5,34,600,36];
function cuantos(numarray){
    
    document.getElementById("totalArray").innerHTML =`El numero total del array es ${numarray.length}`;
	
}

//Crear formulario

var formulario = document.createElement("form");

var Nombre = document.createElement("label");
Nombre.innerHTML = "Nombre:";
formulario.appendChild(Nombre);

var nombreintro = document.createElement("input");
nombreintro.type = "text";
nombreintro.name = "nombre";
formulario.appendChild(nombreintro);

var Apellido = document.createElement("label");
Apellido.innerHTML = "Apellido:";
formulario.appendChild(Apellido);

var apellidointro = document.createElement("input");
apellidointro.type = "text";
apellidointro.name = "apellido";
formulario.appendChild(apellidointro);

var email = document.createElement("label");
email.innerHTML = "Email:";
formulario.appendChild(email);

var emailintro = document.createElement("input");
emailintro.type = "email";
emailintro.name = "email";
formulario.appendChild(emailintro);

var enviar = document.createElement("button");
enviar.type = "submit";
enviar.innerHTML = "Enviar";
formulario.appendChild(enviar);

document.body.appendChild(formulario);


//Creación de una tabla
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

let fila1 = document.createElement('tr');
let titulo1= document.createElement('th');
titulo1.innerHTML = "Id";
let titulo2= document.createElement('th');
titulo2.innerHTML = "Nombre";
let titulo3= document.createElement('th');
titulo3.innerHTML = "Apellidos";
let titulo4= document.createElement('th');
titulo4.innerHTML = "Species";
let titulo5= document.createElement('th');
titulo5.innerHTML = "Type";
let titulo6= document.createElement('th');
titulo6.innerHTML = "Gender";

fila1.appendChild(titulo1);
fila1.appendChild(titulo2);
fila1.appendChild(titulo3);
fila1.appendChild(titulo4);
fila1.appendChild(titulo5);
fila1.appendChild(titulo6);
thead.appendChild(fila1);

let fila2 = document.createElement('tr');
let fila2Datos1 = document.createElement('td');
fila2Datos1.innerHTML = "1";
let fila2Datos2 = document.createElement('td');
fila2Datos2.innerHTML = "Libertad";
let fila2Datos3 = document.createElement('td');
fila2Datos3.innerHTML = "S";
let fila2Datos4 = document.createElement('td');
fila2Datos4.innerHTML = "M";
let fila2Datos5 = document.createElement('td');
fila2Datos5.innerHTML = "123";
let fila2Datos6 = document.createElement('td');
fila2Datos6.innerHTML = "F";

fila2.appendChild(fila2Datos1);
fila2.appendChild(fila2Datos2);
fila2.appendChild(fila2Datos3);
fila2.appendChild(fila2Datos4);
fila2.appendChild(fila2Datos5);
fila2.appendChild(fila2Datos6);
tbody.appendChild(fila2);


document.body.appendChild(table);

//Crea array de objetos 10 objetos con su respectivos key:value. 
const arrayDatos = [
    
    { id: 2, name: "Pepe", status: "Medio", species: "kaju", type: 2, gender: "F"},
    { id: 3, name: "Mariam", status: "Alto", species: "koki", type: 3, gender: "M"},
    { id: 4, name: "Paco", status: "Bajo", species: "pilu", type: 4, gender: "F"},
    { id: 5, name: "Lia", status: "Medio", species: "kaju", type: 2, gender: "M"},
    { id: 6, name: "Mario", status: "Alto", species: "mirria", type: 2, gender: "F"},
    { id: 7, name: "Maho", status: "Medio", species: "bila", type: 3, gender: "F"},
    { id: 8, name: "Jennifer", status: "Medio", species: "kaju", type: 4, gender: "F"},
    { id: 9, name: "Vairon", status: "Alto", species: "tori", type: 3, gender: "M"},
    { id: 10, name: "Guia", status: "Medio", species: "mirria", type: 2, gender: "F"},
]
console.log(arrayDatos);

//Imprimir el array de objetos en la tabla ya hecha
for(var i = 0; i < arrayDatos.length; i++) {
    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = arrayDatos[i].id;
    cell2.innerHTML = arrayDatos[i].name;
    cell3.innerHTML = arrayDatos[i].status;
    cell4.innerHTML = arrayDatos[i].species;
    cell5.innerHTML = arrayDatos[i].type;
    cell6.innerHTML = arrayDatos[i].gender;
}


