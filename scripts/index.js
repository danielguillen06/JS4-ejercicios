///EJERCICIO 1
/*
1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', 
pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
*/
// let age = prompt("Ingrese su edad");
// if(age >= 18){
//     console.log("Tiene la edad suficiente para conducir");
// }else{
//     console.log(`te faltan ${18-age} años para conducir`);
// }


/*
2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, 
registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
*/

// let myAge = prompt("ingresa tu edad (sebasian)");
// let yourAge = prompt("ingresa la edad de la otra persona");

// if (myAge > yourAge) {
//     console.log(`sebastian es mayor por ${myAge - yourAge} años`);
// }else if( myAge == yourAge){
// console.log("tienen la misma edad");
// } else{
//     console.log(`la otra persona es mayor por ${yourAge- myAge} años`);
// }


/*
3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferente
*/

// let a = prompt("ingresenel valor de a");
// let b = prompt("ingrese el valor de b");

// if(a > b){
// console.log("a es mayor quen b");
// } else if ( a == b){
// console.log("a es igual b");
// } else{
//     console.log("b es mayor que a");
// }

// let a = prompt("ingresenel valor de a");
// let b = prompt("ingrese el valor de b");

// (a > b) ? console.log("a es mayor que b."):((a = b) ? console.log(" a es igual b") :console.log("b es mayor que a."));

/*
4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

*/

// let num = prompt("ingrese un numero")

// if( num % 2 == 0){
//     console.log("el numero es par");
// }else{
//     console.log("el numero es impar");
// }

//////////////////////////////////////////////////////
//Ejercicios: Nivel 2
/*
1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

// let calf = prompt("ingrese la calificacion del estudiante en numero");
// if(calf>= 80 && calf <= 100){
// console.log("su calificacion es A");
// }else if(calf>=70 && calf <=79){
//     console.log("su calificacion es B");
// }else if(calf >= 60 && calf <=69){
//     console.log("su calificacion es C");
// }else if(calf >=50 && calf <=59){
//     console.log("su calificacion es D");
// }else if(calf >=0 && calf <= 49){
//     console.log("su calificacion es F");
// }

/*
2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
Septiembre, Octubre o Noviembre, la temporada es Otoño.
Diciembre, Enero o Febrero, la temporada es Invierno.
Marzo, Abril o Mayo, la temporada es Primavera
Junio, Julio o Agosto, la temporada es Verano
*/

// let season = prompt("ingrese el mes en que se encuentra");

// if(season == "Septiembre"){
//     console.log("la temporada es Otoño");
// }else if(season == "Octubre"){
//     console.log("la temporada es Otoño");
// }else if(season =="Noviembre"){
//     console.log("la temporada es Otoño");
// }else if (season == "Diciembre") {
//     console.log("La temporada es Invierno");
// }else if (season == "Enero") {
//     console.log("La temporada es Invierno");
// }else if (season == "Febrero") {
//     console.log("La temporada es Invierno");
// }else if (season == "Marzo") {
//     console.log("La temporada es Primavera");
// }else if (season == "Abril") {
//     console.log("La temporada es Primavera");
// }else if (season == "Mayo") {
//     console.log("La temporada es Primavera");
// }else if (season == "Junio") {
//     console.log("La temporada es Verano");
// }else if (season == "Julio") {
//     console.log("La temporada es Verano");
// }else if (season == "Agosto") {
//     console.log("La temporada es Verano");
// }else{
//     console.log("ingrese un mes correcto");
// }

// let season = prompt("ingrese ingrese el mes en que se encuentra")
// switch (season) {
//     case "enero":
//         console.log("La temporada es Invierno");
//         break;
//     case "febrero":
//         console.log("La temporada es Invierno");
//         break;
//     case "marzo":
//         console.log("La temporada Primavera");
//         break;
//     case "abril":
//         console.log("La temporada es Primavera");
//         break;
//     case "mayo":
//         console.log("La temporada es Primavera");
//         break;
//     case "junio":
//         console.log("La temporada verano");
//         break;
//     case "julio":
//         console.log("La temporada es verano");
//         break;
//     case "agosto":
//         console.log("La temporada es verano");
//         break;
//     case "septiembre":
//         console.log("La temporada es otoño");
//         break;
//     case "octubre":
//         console.log("La temporada es otoño");
//         break;
//     case" noviembre":
//         console.log("La temporada es otoño");
//         break;
//     default:
//         console.log("ingrese un mes correcto");
//         break;
// }

/*
3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
*/
// let day= prompt("ingrese un dia de la semana")
// switch (day) {
//     case "lunes":
//         console.log("dia laborable");
//         break;
//     case "martes":
//         console.log("dia laborable");
//         break;
//     case "miercoles":
//         console.log("dia laborable");
//         break;
//     case "jueves":
//         console.log("dia laborable");
//         break;
//     case "viernes":
//         console.log("dia laborable, casi finde");
//         break;
//     case "sabado":
//         console.log("fin de semana");
//         break;
//     case "domingo":
//         console.log("fin de semana, mañana se curra");
//         break;
//     default:
//         console.log("ingrese un dia correcto de la semana");
//         break;
// }

/////////////////////////////////////////////////////////////////
///Ejercicios: Nivel 3
/*
1.Escribe un programa que diga el número de días en un mes.
*/

