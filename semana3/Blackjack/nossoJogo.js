/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackack")


if(confirm("pergunta de sim ou não")) {
   // o que fazer se o usuário clicar "ok"
   const cartaUsuarioA = comprarCarta()
   const cartaUsuarioB = comprarCarta()
   const cartaPc1 = comprarCarta()
   const cartaPc2 = comprarCarta()
   const somaUsuario = cartaUsuarioA.valor + cartaUsuarioB.valor
   const somaPc = cartaPc1.valor + cartaPc2.valor

   console.log('Usuario - cartas: ${cartaUsuarioA.texto} ${cartaUsuarioB.texto} - pontuação = ${somaUsuario}') 
   console.log('computador - cartas: ${cartaPc1.texto} ${cartaPc2.texto} - pontuação = ${somaPc}')
} else {
   // o que fazer se o usuário clicar "cancelar"
   console.log("o jogo acabou")
}