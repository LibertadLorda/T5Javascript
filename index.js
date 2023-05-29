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

//Ocultar y mostrar elemento HTML 
function ocultarMensaje(){
    let	desaparece;

	desaparece = document.getElementById("ocultar");
	console.log(desaparece);
	if (desaparece.style.display === "none")
	{
		desaparece.style.display = "block";
	}
	else
	{
		desaparece.style.display = "none";
	}
}

//Crear un array de 10 nombres. Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
const arraynombres=["Maria", "Pepe", "Berta", "Anton", "Jesus","Ana","Eli","Jose","Luisa","Marga"];
function imprimir(arraynombres){
    for(let i=0; i<arraynombres.length; i++){
        console.log(arraynombres[i]);
        document.getElementById("imprimirArray").innerHTML = arraynombres;
       }
}

//Array de numeros
const numarray=[1,5,34,600,36];
function cuantos(numarray){
    
    document.getElementById("totalArray").innerHTML =`El numero total del array es ${numarray.length}`;
	
}
