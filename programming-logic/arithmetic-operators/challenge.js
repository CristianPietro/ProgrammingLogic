// Pedir para o usuario digitar um numero
var user1 = prompt('Digíte um número');
//converter um um numero intero
user1 = parseInt(user1);
//pedir para o usuario digitar outro numero
var user2 = prompt('Digíte outro número');
//converter em numero inteiro
user2 = parseInt(user2);
/**
 Mostrar  num alert o seguinte texto
  o resto da divisao de (n1) por (n2) é: resultado;
 */
var rest = user1 % user2;
alert(`O resto da divisão entre ${user1} e ${user2} é: ${rest}`);
  /*
  mostrar um alert com o segundo texto
  o numero n1 elevado a n2 é : resultado
  */
  var expo = user1 ** user2;
  alert(`o número elevado entre ${user1} e ${user2} é: ${expo}`);