//for in
const lista = [10, 20, 30, 40, 50]
for (i in lista) {
    console.log(`o resultado do For in é um índice: ${i}`)
}

//for of
for (i of lista) {
    console.log(`o for of atua diretamente em cima do valor: ${i}`)
}
// Utilizando for of para iterar sobre os caracteres da string
for (const char of frase) {
    console.log(char);
}

// Exemplo de uso do for of com Map.entries e destructuring
const mapa = new Map();
mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");
mapa.set("chave3", "valor3");

// Utilizando for of com Map.entries e destructuring
for (const [chave, valor] of mapa.entries()) {
    console.log(`Chave: ${chave}, Valor: ${valor}`);
}

// Exemplo de uso do for of com um array de objetos
const pessoas = [
    {
        nome: "João",
        idade: 25
    }, {
        nome: "Maria",
        idade: 30
    }, {
        nome: "Carlos",
        idade: 22
    }
];

// Utilizando for of com destructuring em um array de objetos
for (const {nome, idade}
of pessoas) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

// Exemplo de uso do for of com uma string
const frase = "Olá, como vai você?";
