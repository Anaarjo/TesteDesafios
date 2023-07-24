// Criando uma lista de nomes de pets

const pets = ["Katarina", "Snoop", "Oliver", "Julie"];

// Criando uma variável para pegar um nome aleatório da lista

/*Math.floor() serve para arredondar o número, tirando a sua parte decimal. 
E o Math.Random() serve para gerar números aleatórios  */

// Aqui é como se fosse de 0 até o último índice do vetor pets [0,3]
const aleatorio = Math.floor(Math.random() * pets.length);

//Printando na tela o nome que foi gerado e a sua posição(índice)
console.log(aleatorio, pets[aleatorio]);


