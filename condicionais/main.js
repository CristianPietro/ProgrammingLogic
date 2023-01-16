let nota1 = prompt('digite a nota')
let notaA = parseFloat(nota1)

let nota2 = prompt('digite a segunda nota')
let notaB = parseFloat(nota2)

let media = (notaA + notaB) / 2;

if(media >= 5){
  alert('Nota: ' + media + ' APROVADO')
}else{
  alert('Nota: ' + media + ' REPROVADO')
}