// pegar o valor do input (pergunta) --- DOM
// swtich com as possíveis respostas
// gerar um número aleatório para obter uma resposta aleatória
// imprimir a resposta na bola -- DOM

//extra
//aplicar animacao css na bola no event listener - click
// css: hover no botao e input


function magicBall() {
    
    let ball = document.getElementById('ballText')

    let number = Math.floor(Math.random() * 8 + 1)
    
    switch (number) {
        case 1:
            ball.innerHTML = 'Com certeza!!!'
            break;
        case 2:
            ball.innerHTML = 'O Dracula adoraria'
            break;
        case 3:
            ball.innerHTML = 'Sem dúvidas'
            break;
        case 4:
            ball.innerHTML = 'Vai fundo nessa ;)'
            break;
        case 5:
            ball.innerHTML = 'Não conte com isso'
            break;
        case 6:
            ball.innerHTML = 'Dracula não acha isso uma boa ideia'
            break;
        case 7:
            ball.innerHTML = 'Você tem certeza disso??'
            break;
        case 8:
            ball.innerHTML = 'Quem sabe talvez em outra vida??'
            break;
    }
}

let button = document.getElementById('botaoBall')

button.addEventListener('click', magicBall)


// Para resetar
function reset(){
    const ball = document.getElementById('ballText')

    ball.innerHTML = ''
}

const resetMagicBall = document.getElementById('reset-magic-ball')

resetMagicBall.addEventListener('click', reset)