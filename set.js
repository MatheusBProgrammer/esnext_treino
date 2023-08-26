// Criando um novo Set
const conjunto = new Set();

// Adicionando valores ao Set
conjunto.add("valor1");
conjunto.add("valor2");
conjunto.add("valor3");
conjunto.add("valor1"); // Não terá efeito, pois "valor1" já está no conjunto

// Verificando o tamanho do Set (quantidade de valores únicos)
// Mesma função que um length teria em uma lista
console.log(conjunto.size); // Saída: 3

// Verificando se um valor específico existe no Set
console.log(conjunto.has("valor2")); // Saída: true
console.log(conjunto.has("valor4")); // Saída: false

// Iterando sobre os valores do Set
for (const valor of conjunto) {
  console.log(valor);
}

// Removendo um valor do Set
conjunto.delete("valor2");

// Verificando o tamanho após a remoção
console.log(conjunto.size); // Saída: 2

// Limpando todos os valores do Set
conjunto.clear();

// Verificando o tamanho após a limpeza
console.log(conjunto.size); // Saída: 0
