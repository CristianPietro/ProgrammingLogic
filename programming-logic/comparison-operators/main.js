/*
 Pedir para o usuario digitar dois numeros e mostrar um boolean indicando se a media for maior que 5
 */


// pedir para o usuario digitar um numero
var nota1 = prompt('Digite um numero aqui');
//converter para um numero float
nota1 = parseFloat(nota1);
//pedir para digitar outro numero
var nota2 = prompt('Digite outro numero aqui');
//converter em numero float
nota2 = parseFloat(nota2);
//caucular a media das notas
var media = (nota1 + nota2) / 2; 
// mostrar um boolean se a media for maior ou menor que 5

alert(media > 5)