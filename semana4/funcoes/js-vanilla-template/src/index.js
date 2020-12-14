//EXERCICIO 1
//a. O que vai ser impresso no console?
/*10
50*/

/*b. O que aconteceria se retirasse os dois console.log e simplesmente
 invocasse a função minhaFuncao(2) e minhaFuncao(10)? 
 O que apareceria no console?*/

 //EXERCICIO 2
 //a. Explicite quais são as saídas impressas no console
 //O Item 0 e o itme 1

 //b. Se arrayDeNomes mudasse de valor para ["Amanda", "Caio"], o que vai ser impresso no console?
 //Amanda, Caio 

 
 //EXERCÍCIO 4
  /*a. A função não deve receber nenhum parâmetro e deve imprimir 
  uma mensagem falando algumas informações sobre você, como: 
  
  function dizSobremim() 
  {
      console.log("Eu sou Ana Paula, tenho 28 anos, moro em Curitiba e sou estudante")
  }
  dizSobremim() */
/*b.
function soma1(somaA,somaB,somaC,somaD){
    const soma = somaA + somaB + somaC + somaD
    console.log(soma)
}

const primeiro = "Eu sou Ana Paula,"
const segundo = 'tenho 28 anos,'
const terceiro = "moro em Curitiba e"
const quarto = " sou estudante."

soma1(primeiro, segundo, terceiro, quarto)*/

//EXERCÍCIO 6
 /*a. Escreva uma função que receba um array de números e devolva a quantidade de elementos nele*/
 /*const meuArray = (nossoArray) => {
     for(let i = 0; i < nossoArray. length; i++){
         console.log(nossoArray[i])
     }
     return nossoArray.length
 }

 const imprimeMensagem = (mensagem) =>{
     console.log(mensagem)
 }

 const arrayDeNumero = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
 const quantidade2 = meuArray(arrayDeNumero)
  console.log("quantidade: ", quantidade2)*/


  /*function conversorDeMoeda(valorEmDolar){
      const cotacao = Number(prompt("Informe o valor da cotação do dolar"));

      return "R$" + (valorEmDolar* cotacao);

  }

  const meuDinheiro = conversorDeMoeda(100);
  
  console.log(meuDinheiro);

  const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283];
  const array1 = [];
  const array2 = [];

  for(let numero of numeros){
      if(numero % 2 === 0){
          array1.push(numero);
      } else {
          array2.push(numero);
      }
  }

  console.log("Quantidade total de numeros", numeros.length)
  console.log(array1.length)
  console.log(array2.length)*/

  const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99,13,31,83,131,1,1.1,-10,25,1590];

  let numero1 = Infinity;
  let numero2 = 0;

  for(let numero of numeros){
      if(numero < mumero1){
          numero1 = numero;
      }
      
      if(numero > numero2){
          numero2 = numero;
      }
  }

  console.log(numero1);
  console.log(numero2);



 