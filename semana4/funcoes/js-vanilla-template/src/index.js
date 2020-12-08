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

  function minhaFuncao(quantidade) {
      const container = document . getElementById("main-container")

      for (let i = i; i <= quantidade; i++) {
          if(i%2===0){
              container.innerHTML += "<div>" + i + "</div>"
          }else {
              container.innerHTML += "<span>" + i + "</span>"
          }
      }
  }
  minhaFuncao(5)