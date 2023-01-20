let usuario1 = prompt('digite um numero');
usuario1 = parseFloat(usuario1);

let usuario2 = prompt('digite um numero');
usuario2 = parseFloat(usuario2);

let media = (usuario1 + usuario2) /2;

if(media > 5 && usuario1 > 0 && usuario2 > 0){
    alert('APROVADOS')
}else{
    alert('reprovados')
}