/*Analise os trechos de código em cada exercício e escreva o que ele faz, 
como faz e qual será o valor impresso no `console`.
1= o exemplo me retorna o valor da conversão do valor de acordo com a cotação
colocade de R$ 5,08, onde sera impress 100 vezes da cotação informada

2= Ele vai imprimir a mensagem de alerta informado, 
caso não tivessemos a função alert, seria imprimido somente o 
novo montante, porque no segundo montante de 165, tem o tesouro direto
que não foi declarado acima, então setia undefined.

3= o codigo volta a quantidade de numeros no array,
a quantidade de numeros dividos por 2, no caso par
e a quantidade de numeros que não são inteiros, impar 
Ela declara o array principal, usa o push para puxar as informações 
de divisão de sim ou não, e usa o length que retorna a "quantidade" pedida,não sera impresso 
nada no console

4= a variavel numero 1 e infinto que começa no 0, e a numero 2 e 0, se o numero da array for menor
que o infinito, ou seja o menor numero que tive na array ele vai recebe -10, e a outta
diz que se o numero da array for maior que zero vai ser recebido 283 que e o que esta 
na array

Exercícios de Lógica de Programação

function Lista1() {
  let array = ["1", "2", "3", "4", "5"]

  
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }

  
  for (const element of array) {
    console.log(element)
  }

  
  let i = 0
  while (i < array.length) {
    console.log(array[i])
    i++
}
```jsx
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2
const booleano4 = !booleano3 
```

Sem rodar nenhum código,
 diga quais são os valores das expressões lógicas abaixo:*/


 /*b) `(booleano1 && booleano2) || !booleano3`
 true
booleano1 && booleano2) || !booleano3`
 false
  c) (booleano2 || booleano3) && (booleano4 || booleano1)
 true
 d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
 true
 e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
 true*/

 3.
 /*const quantidadeDeNumerosPares
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
}

Este código funciona? 
Por quê? Caso não funcione, corrija a implementação dele.
Res. O loop nunca vai parar de rodar, pois nao tem nenhun codigo que vai 
atualizar o valor da variavel declarada no let

uma das formas pode ser :

function Pares(){
    const quantidadeDeNumerosPares
    let i = 0
    while(i <= quantidadeDeNumerosPares) {
        console.log(i*2)
        i++
}*/

//5.

function DoisNumeros (a,b) {
    let maiorNumero = 0
    let menorNumero = 0

if( a > b){
    maiorNumero = 30
    menorNumero = 15
} else {
    maiorNumero = 15
    menorNumero = 30
}

console.log("o maior numero é", maiorNumero)

}
