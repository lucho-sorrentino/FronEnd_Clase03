/* ################ EJERCICIO 0 #########################*/

// let nombre = prompt("Ingrese su nombre");
// console.log(nombre);
// alert("Hola" + " " + (nombre));
// let apellido = prompt("Ingrese su apellido");
// alert("Hola" + " " + (nombre) + " " + (apellido));





/* ################ EJERCICIO 1 #########################*/

// let numeroA = prompt("Ingrese un número");
// let numeroB = prompt ("Ingrese otro número"); 
// console.log(parseInt(numeroA) + parseInt(numeroB));





/* ################ EJERCICIO 2 #########################*/

// let age = prompt("Cuántos años cumple o cumplirá este año");
// console.log("Usted nació en" + " " + (parseInt(2021)-parseInt(age)));






/* ################ EJERCICIO 3 #########################*/

// let balance = 10000.59;
// alert("Usted tiene en su cuenta" + " " + (balance));
// let extraccion = prompt("Ingrese el monto que desde retirar");
// alert("Su nuevo balance es de" + " " + (parseFloat(balance) - parseFloat(extraccion)));





/* ################ EJERCICIO 4 #########################*/

// let nota1 = prompt("Ingrese la primer nota");
// let nota2 = prompt("Ingrese la segunda nota");
// let nota3 = prompt("Ingrese la tercer nota");
// let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
// console.log(parseInt(promedio));






/* ################ EJERCICIO 5 #########################*/

// let valorMetro = prompt("Por favor ingrese el valor que desea convertir a metros");
// let pies = parseFloat(valorMetro) * parseFloat(3.28);
// let cms = parseFloat(valorMetro) * parseInt(100);
// let pulgadas = parseFloat(valorMetro) * parseFloat(39.38);
// console.log((pies) + " " + "ft");
// console.log((cms) + " " + "cms");
// console.log((pulgadas) + " " + "in");




/* ################ EJERCICIO 6 #########################*/
// 6) Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

// let number1 = prompt("Ingrese un número");
// let number2 = prompt("Ingrese un número nuevamente");
// let suma = alert(parseInt(number1) + parseInt(number2));
// let number3 = prompt("Vuelva a ingresar un número");
// alert((parseInt(number1) + parseInt(number2)) * parseInt(number3));




/* ################ EJERCICIO 7 #########################*/
// 7) Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.

// let mins = prompt("Ingrese el valor de minutos que desea pasar a segundos");
// alert(parseInt(mins) * parseInt(60));




/* ################ EJERCICIO 8 #########################*/
// 8) Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.

// let base = prompt("Ingrese el valor de la base en cms");
// let altura = prompt("Ingrese el valor de la altura en cms");
// alert("El área del rectángulo es de" + " " + (parseInt(base) * parseInt(altura)) + " " + "cms");




/* ################ EJERCICIO 9 #########################*/
// 9) Solicitar al usuario la medida de la base y de la altura de un triángulo equilatero y devolver el área.

// let base = prompt("Ingrese el valor de la base del triángulo en cms");
// let altura = prompt("Ingrese el valor de la altura del triángulo en cms");
// alert("El área del triángulo es de" + " " + (parseInt(base) * parseInt(altura) / parseInt(2)) + " " + "cms");





/* ################ EJERCICIO 10 #########################*/
// 10) Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.
// let monto = prompt("Ingrese el monto al que se le va a aplicar el descuento");
// let descuento = prompt("Ingrese el valor del porcentaje de descuento");
// alert("El monto final con el descuento es de" + " " + (parseInt(monto) - ((parseInt(descuento) / parseInt(100)) * parseInt(monto))));





/* ################ EJERCICIO 11 #########################*/
// Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"

// let nombre = prompt("Ingrese su nombre");
// let age = prompt("Cuántos años cumple o cumplirá este año");
// alert("Hola" + " " + (nombre) + " " + "Usted nació en" + " " + (parseInt(2021)-parseInt(age)));




/* ################ EJERCICIO 12 #########################*/
// Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por consola su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 

// let nombre = prompt("Ingrese su nombre");
// let tempCelsius = prompt("Ingrese un valor de temp en Celsius");
// console.log("Su nombre es" + " " + (nombre) + " " + "y la temperatura es" + " " + (parseFloat(tempCelsius) * (parseFloat(9/5)) + parseFloat(32)) + "F");




/* ################ EJERCICIO 13 #########################*/
// Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.

// let nombre = prompt("Ingrese su nombre");
// let tempFar = prompt("Ingrese un valor de temp en Fahrenheit");
// console.log("Su nombre es" + " " + (nombre) + " " + "y la temperatura es" + " " + ((parseFloat(tempFar) - 32) / (parseFloat(9/5))) + "F");





/* ################ EJERCICIO 14 #########################*/
// Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5, multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.

// let num = prompt("Ingresar número");
// alert(((parseFloat(num) + parseInt(5)) * parseInt(10)) % parseInt(3));

// Para que no se vean los decimales se puede usar Math.trunc()?
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc




/* ################ BONUS 0 #########################*/
// Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529).

// let numA = prompt("Ingrese un número entero");
// let numB = prompt("Ingrese otro número entero");
// alert(numA + numB);




/* ################ BONUS 1 #########################*/
// Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por consola o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo).

// let numDias = prompt("Ingrese cantidad de días");
// alert((parseFloat(numDias)* 31536000) / 365);




/* ################ BONUS 2 #########################*/
// Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos. A tener en cuenta: la velocidad se calcula en metros sobre segundos!).

// let dist = parseFloat(prompt("Ingrese la distancia en kms que desea recorrer"));
// let vel = parseFloat(prompt("Ingrese la velocidad promedio en kms/h"));
// alert("El recorrido le tomará" + " " + ((dist * 1000) / ((vel * 1000) / 3600)) / 60 + " " + "minutos");




/* ################ BONUS 3 #########################*/
// Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
// Ejemplo: 
// Sueldo bruto: $70.000
// Deducciones:
// Obra social: $2100
// Ley 19032: $2100
// Jubilación: $7700
// Neto a pagar: $58100

// let bruto = prompt("Ingrese el salario bruto");
// let OS = (parseInt(bruto) * 0.03);
// let jubilacion = (parseInt(bruto) * 0.11);
// let ley = (parseInt(bruto) * 0.03);
// alert("Las deducciones son:");
// alert("Obra social:" + " " + parseInt(OS));
// alert("Jubilación:" + " " + parseInt(jubilacion));
// alert("Ley 19032:" + " " + parseInt(ley));
// alert("El salario neto es de:" + " " + (parseInt(bruto) - (parseInt(OS) + parseInt(jubilacion) + parseInt(ley)))); 

// *********** Agrego saltos de línea *******************
// let bruto = prompt("Ingrese el salario bruto");
// let OS = (parseInt(bruto) * 0.03);
// let jubilacion = (parseInt(bruto) * 0.11);
// let ley = (parseInt(bruto) * 0.03);
// alert("Las deducciones son:" + "\n" + 
//     "Obra social:" + " " + "$" + parseInt(OS) + "\n" +
//     "Jubilación:" + " " + "$" + parseInt(jubilacion) + "\n" +
//     "Ley 19032:" + " " + "$" + parseInt(ley) + "\n" + 
//     "El salario neto es de:" + " " + "$" + (parseInt(bruto) - (parseInt(OS) + parseInt(jubilacion) + parseInt(ley)))); 

// ********** Parseo en el prompt y agrego variable total deducciones **********
let bruto = parseFloat(prompt("Ingrese el salario bruto"));
let OS = bruto * 0.03;
let jubilacion = bruto * 0.11;
let ley = bruto * 0.03;
let totalDeducciones = OS + jubilacion + ley;
alert("Las deducciones son:" + "\n" + 
    "Obra social:" + " " + "$" + OS + "\n" +
    "Jubilación:" + " " + "$" + jubilacion + "\n" +
    "Ley 19032:" + " " + "$" + ley + "\n" + 
    "El salario neto es de:" + " " + "$" + (bruto - totalDeducciones)); 



























