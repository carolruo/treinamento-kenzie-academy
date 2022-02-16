const Lista = [
    `Lol`,
    `Lul`
];

console.log(Lista);

// INTEIRO num, i, res

// ESCREVA "Digite um número inteiro: "
// LEIA num

// i <- 1
// res <- 0

// ENQUANTO  i <= num FAÇA
//     SE (num % i == 0) ENTAO FAÇA
//         res <- res + 1
//     FIM_SE
//     i <- i + 1
// FIM_ENQUANTO

// ESCREVA res
let num = 16
let i = 0
let res = 0
while (i <= num) {
    if (num % i == 0) {
        res += 1
    }
    i++
}
console.log(res)