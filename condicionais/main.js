var n1 = prompt("digite um valor")
n1 = parseFloat(n1)

var n2 = prompt("digite um numero")
n2 = parseFloat(n2)

var media = ( n1 + n2  ) / 2; 

if(media >= 5){
  alert(media + " Você foi aprovado")
}else{
  alert(media +" Você foi reprovado")
}