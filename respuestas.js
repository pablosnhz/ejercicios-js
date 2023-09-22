/* 

//  1

 document.write('Hola mundo!'); 

//  2

function sumaNumeros(){
    let num1 = 5;
    let num2 = 10;

    document.write(num1 + num2);
}   onload=sumaNumeros en el donde muestra el resultado 

function sumaNumeros(){
    let num1 = 5;
    let num2 = 10;

    document.write(num1 + num2);

//  3
console.log('sumaNumeros'); 

// 4 

function muestraOpcion(){
  // toma el name="eleccion" teniendo un onclick="muestraOpcion"
    var opciones = document.getElementsByName("eleccion");
    console.log(opciones);
    for(let i=0; i < opciones.length;i++){
        
        if(opciones[i].checked){
            alert(opciones[i].value);
        }
       }
} // y por consola muestra que se selecciono  

// 5 

function anadirTexto(){
   var texto = document.getElementById("texto");
   var mostrar = document.getElementById("mostrar_texto");

   mostrar.innerHTML += texto.value; 
}  */

// 6