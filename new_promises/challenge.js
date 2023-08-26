// Importação das bibliotecas 'fs' e 'path'
const fs = require("fs"); // 'fs' significa File System e é usada para interagir com arquivos no sistema.
const path = require("path"); // 'path' é usado para lidar com caminhos de arquivos e diretórios no sistema.

// Construção do caminho completo para o arquivo 'dados.txt' usando o diretório atual (__dirname)
const caminho = path.join(__dirname, "dados.txt"); // Isso cria um caminho completo para o arquivo 'dados.txt' no diretório atual.

// Definição de uma função chamada 'lerArquivo' que recebe um caminho como argumento.
function lerArquivo(caminho) {
  return new Promise((resolve) => {
    // Retorna uma nova Promise que encapsula uma operação assíncrona.
    fs.readFile(caminho, (_, conteudo) => {
      // Lê o conteúdo do arquivo no caminho especificado.
      resolve(conteudo.toString()); // Resolve a Promise com o conteúdo do arquivo convertido para string.
    });
  });
}

lerArquivo(caminho)
  .then((conteudo) => conteudo.split("\n")) // Divide o conteúdo do arquivo em linhas.
  .then((conteudo) => console.log(conteudo[1])); // Imprime a segunda linha do conteúdo do arquivo no console.
