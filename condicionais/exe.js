let player1 = prompt('Digite um numero')
player1 = parseInt(player1)

let player2 = prompt('Digite um numero')
player2 = parseInt(player2)

if(player1 === player2){
    alert('empate')
}else{
    let sorteio = parseInt(Math.random() * 2);

    if(sorteio === 0){

        if(player1 < player2){
            alert('ganhou o jogador 1')
        }else{
            alert('ganhou o jogador 2')
        }

    }else{

        if(player1 > player2){
            alert('ganhou o jogador 1')
        }else{
            alert('ganhou o jogador 2')
        }


    }
}



