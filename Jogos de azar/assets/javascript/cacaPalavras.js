const containerSopaLetras = document.getElementById('sopaLetras')

const totalPalavras = ["dentes", "sangue", "vampiro", "assombrado", "dracula",
    "estaca", "sombra", "fantasma", "medo", "terror",
    "castelo", "gotico", "conde", "vanhelsing", "europa",
    "literatura", "vampira", "morcegos", "vlad", "monstros"
]
const str = totalPalavras.toString();
const strUpper = str.toUpperCase();
const backToArr = strUpper.split(',');

//Selecionar 3 palavras aleatórias dentro do array de 20 palavras totais
function selectWords (totalPalavras) {
  amount = 3;
  arrayWithObjects = [];
  random = 0;

      for(let i = 1; i <= amount; i++){
          random = Math.floor(Math.random() * totalPalavras.length); // indice aleatório do array.                     
              if (arrayWithObjects.includes(totalPalavras[random]) === false){
                arrayWithObjects.push(totalPalavras[random].toLocaleUpperCase());

                const li = document.getElementById(`palavra${i}`) //palavras do enunciado dinâmicas
                li.innerHTML = totalPalavras[random].toLocaleUpperCase()
              }               
      }
      return arrayWithObjects;
}
selectWords(backToArr)


// Coloca letrinhas dentro do array e também as palavras. 
function wordPuzzle(wordsArray) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

    let grid = []
    for (let iLine = 0; iLine < 10; iLine++) {
        let line = [];
        for (let iColumn = 0; iColumn < 10; iColumn++) {
            const randomLetters = Math.floor(Math.random() * letters.length);
            const lettersRandom = letters[randomLetters];
            line.push(lettersRandom)
        }
        if (wordsArray.length > 0) {
            let wordToBeInserted = wordsArray.pop();
            let lineAvailable = Math.floor((1 + 10 - wordToBeInserted.length) * Math.random())
            for (let i = 0; i < wordToBeInserted.length; i++) {
                if (i + lineAvailable < 10) {
                    line[i + lineAvailable] = wordToBeInserted[i];
                }
            }
        }

        grid.push(line)
            // console.table(grid)
    }
    grid.sort(() => Math.random() - 0.5);


    return grid
}
// wordPuzzle()


// Mostrar o caça palavras na tela: 
function buildLine(currentLine, line) {
    for (let column = 0; column < currentLine.length; column++) {
        const currentBox = currentLine[column]
        const div = document.createElement('div')
        div.setAttribute('column', column)
        div.setAttribute('line', line)
        div.classList.add('box-sopa')
        div.innerText = currentBox

        containerSopaLetras.appendChild(div)

    }
}

function buildSopaLetras(array) {
    for (let line = 0; line < array.length; line++) {
        const currentLine = array[line]
        buildLine(currentLine, line)
    }
}

buildSopaLetras(wordPuzzle(selectWords(backToArr)))

// Resetando o caça palavras ao clicar no botão de reset: 

function reset () {
    const sopaLetras = document.querySelector('#sopaLetras')

    sopaLetras.innerHTML = ''
    buildSopaLetras(wordPuzzle(selectWords(backToArr)))  
}

const resetButton = document.getElementById('reset-caca-palavra')

resetButton.addEventListener('click', reset)