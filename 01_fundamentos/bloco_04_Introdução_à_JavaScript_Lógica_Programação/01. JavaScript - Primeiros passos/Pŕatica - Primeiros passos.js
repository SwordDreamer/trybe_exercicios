//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

const a = 10;
const b = 7;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let modulo = a % b;
let divisao = a / b;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(modulo);
console.log(divisao);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const c = 20;
const d = 25;

if (c > d) {
    console.log("C é maior")
} else {
    console.log("D é maior")
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const e = 10;
const f = 11;
const g = 8;

if (e > f && e > g) {
    console.log("E é o maior dos 3")
} else if (f > e && f > g) {
    console.log("F é o maior dos 3")
} else {
    console.log("G é o maior dos 3")
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const h = 10;

if (h > 0) {
    console.log("Positive")
} else if (h < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const anguloA = 60;
const anguloB = 30;
const anguloC = 90;

let sumOfAng = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos) {
    if (sumOfAng === 180) {
        console.log("true")
    } else {
        console.log("false")
    };
} else {
    console.log("Erro: ângulo inválido!")
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const pecaXadrez = 'Rei';

switch (pecaXadrez.toLowerCase()) {
    case 'rainha':
        console.log('Rainha: anda pelas diagonais e horizontais.');
        break;
    case 'torre':
        console.log("Torre: anda pels horizontais.");
        break;
    case 'bispo':
        console.log("Bispo: anda pelas diagonais");
        break;
    case 'cavalo':
        console.log('Cavalo: anda em "L"');
        break;
    case 'peao':
        console.log('Peão: anda apenas uma casa pra frente');
        break;
    case 'rei':
        console.log('Rei: pode se movimentar apenas uma casa em qualquer direção');
        break;
    default:
        console.log('Erro: peça inválida!');
        break;
};

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
let nota = 508;

if (nota < 0 || nota > 100) {
    console.log('Erro: nota inválida')
} else if (nota >= 90) {
    console.log('Conceito A')
} else if (nota >= 80) {
    console.log('Conceito B')
} else if (nota >= 70) {
    console.log('Conceito C')
} else if (nota >= 60) {
    console.log('Conceito D')
} else if (nota >= 50) {
    console.log('Conceito D')
} else {
    console.log('Conceito F')
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const g = 3;
const y = 4;
const i = 1;

let par = false;

if (g % 2 === 0 || y % 2 === 0 || i % 2 === 0) {
    par = true
}

console.log(par)

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
const r = 20;
const t = 25;
const p = 79;

let impar = false;

if (r % 2 !== 0 || t % 2 !== 0 || p % 2 !== 0) {
    impar = true
}

console.log(impar)

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const valorVenda = 26;
const valorCusto = 20;


if (valorCusto >= 0 && valorVenda >= 0) {
    let impostoSobreOCusto = valorCusto * 0.20;
    let valorCustoTotal = valorCusto + impostoSobreOCusto;
    let lucro = valorVenda - valorCustoTotal;
    console.log(lucro)
} else {
    console.log('Erro nos valores')
}

//Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.
let aliquotaINSS;
let aliquotaLeao;

const salarioBruto = 3500.00;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

const salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaLeao = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaLeao = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaLeao = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaLeao = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaLeao = (salarioBase * 0.275) - 869.36;
};

console.log("Salário líquido igual a " + (salarioBase - aliquotaLeao));