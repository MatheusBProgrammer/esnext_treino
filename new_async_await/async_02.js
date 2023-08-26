// Função que gera um número aleatório entre um intervalo, evitando números indesejados
function gerarNumeroAleatorio(min = 1, max = 99, numerosIndesejados) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosIndesejados.includes(aleatorio)) {
      reject("Numero Repetido"); // Rejeita a Promise se o número gerado estiver na lista de indesejados
    } else {
      resolve(aleatorio); // Resolve a Promise com o número gerado aleatoriamente
    }
  });
}

// Função assíncrona que gera um conjunto de números da Mega Sena
async function gerarMega(qtDeNumeros) {
  try {
    const numeros = [];

    for (let _ of Array(qtDeNumeros).fill()) {
      let novoNumero;
      do {
        try {
          novoNumero = await gerarNumeroAleatorio(1, 60, numeros);
          // Tenta gerar um novo número, evitando repetições
          numeros.push(novoNumero);
        } catch (e) {
          console.error("Erro ao gerar número:", e);
          // Trata o erro gerado por gerarNumeroAleatorio
          // Pode ser uma boa ideia aqui adicionar lógica para contornar o erro, como gerar um novo número
        }
      } while (!novoNumero); // Repete o loop até um novo número válido ser gerado

      // Aguarda a resolução da Promise gerarNumeroAleatorio e adiciona o número à lista
    }

    return numeros; // Retorna a lista de números gerados
  } catch (e) {
    console.error("Erro ao gerar números:", e);
    // Tratar erros gerais que possam ocorrer dentro do loop ou da função
  }
}

// Função principal que chama a função gerarMega e trata erros
async function main() {
  try {
    const numerosGerados = await gerarMega(6);
    console.log("Números da Mega Sena:", numerosGerados);
  } catch (err) {
    console.error("Erro na geração da Mega Sena:", err);
    // Captura erros gerais que possam ocorrer durante a chamada de gerarMega
  }
}

// Inicia a execução chamando a função principal
main();
