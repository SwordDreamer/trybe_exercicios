// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// //Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
// }

// //Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum += numbers[index]
// }
// console.log(sum)

// //Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let sum2 = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum2 += numbers[index];
// }

// let media = sum2 / numbers.length

// console.log(media)

// //Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let sum2 = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum2 += numbers[index];
// }

// let media = sum2 / numbers.length

// if (media > 20) {
//     console.log('Valor maior que 20')
// } else {
//     console.log('Valor menor ou igual a 20')
// }

// //Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maior = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (maior < numbers[index]) {
//         maior = numbers[index]
//     }
// }
// console.log(maior)

// //Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let isOdd = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         isOdd += 1;
//     }
// }
// if (isOdd === 0) {
//     console.log("Nenhum valor ímpar encontrado");
// } else {
//     console.log(isOdd)
// }

// //Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let menor = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < menor) {
//         menor = numbers[index]
//     }
// }
// console.log(menor)

// //Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// let array = [];
// for (let index = 1; index <= 25; index += 1) {
//     array.push(index)
// }
// console.log(array)

// //Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// let divisor = 0;
// let array = [];
// let array2 = [];

// for (let index = 1; index <= 25; index += 1) {
//     array.push(index)
// }

// for (let index2 = 1; index2 <= array.length; index2 += 1){
// array2.push(index2/2)
// }

// console.log(array2)

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);