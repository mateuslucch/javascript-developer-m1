
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

let numeros = gets();

let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {
        if (numeros[i] > maiorPar) {
            maiorPar = numeros[i];
            menorImpar = maiorPar;
        }
    }
}

numeros = gets();

for (let i = numeros.length; i > 0; i--) {

    if (numeros[i] % 2 != 0) {
        if (numeros[i] < menorImpar) {
            menorImpar = numeros[i];
        }
    }
}

print(`Maior número par: ${maiorPar}`);
print(`Menor número ímpar: ${menorImpar}`);