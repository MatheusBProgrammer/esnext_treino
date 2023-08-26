// Criando um novo Map
const mapa = new Map();

// Adicionando pares chave-valor ao Map
mapa.set("chave1", "valor1");
mapa.set("chave2", "valor2");
mapa.set("chave3", "valor3");

// Acessando valores usando as chaves
console.log(mapa.get("chave1")); // Saída: "valor1"
console.log(mapa.get("chave2")); // Saída: "valor2"

// Verificando se uma chave existe no Map
console.log(mapa.has("chave3")); // Saída: true
console.log(mapa.has("chave4")); // Saída: false

// Obtendo o número de pares chave-valor no Map
console.log(mapa.size); // Saída: 3

// Iterando sobre as chaves do Map
for (const chave of mapa.keys()) {
  console.log(chave);
}

// Iterando sobre os valores do Map
for (const valor of mapa.values()) {
  console.log(valor);
}

// Iterando sobre pares chave-valor do Map
for (const [chave, valor] of mapa.entries()) {
  console.log(`${chave}: ${valor}`);
}

// Removendo um par chave-valor do Map
mapa.delete("chave2");

// Verificando o tamanho atual do Map após a remoção
console.log(mapa.size); // Saída: 2

// Limpando todos os pares chave-valor do Map
mapa.clear();

// Verificando o tamanho após a limpeza
console.log(mapa.size); // Saída: 0
