// const n = 9

// let resultado = 100;


// for (let i = 0; i <= n; i += 1) {
//     resultado -= i;
// }
// console.log(resultado)

//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. 
// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fatorial *= index;
// }
// console.log(fatorial)

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let inverso = '';

// for (let index = 0; index < word.length; index += 1) {
//     inverso += word[word.length - 1 - index]
// }
// console.log(inverso)

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > maiorPalavra.length) {
//         maiorPalavra = array[index];
//     }
// }

// for (let index = 0; index < array.length; index += 1){
//     if (array[index].length < menorPalavra.length){
//         menorPalavra = array[index]
//     }
// }

// console.log(maiorPalavra);
// console.log(menorPalavra);

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let biggestOdd = 0;

// for (let index = 0; index <= 50; index += 1) {
//     let isPrime = true;
//     for (let divisores = 2; divisores < index; divisores += 1) {
//         if (index % divisores === 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime) {
//         biggestOdd = index;
//     }
// }

// console.log(biggestOdd)

//


let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};


//Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

//Faça um programa que diz se um número definido numa variável é primo ou não.
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.


let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');