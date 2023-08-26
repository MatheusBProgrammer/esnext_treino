function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro");
      } else {
        resolve(valor);
      }
    } catch (e) {
      resolve(e);
    }
  });
}
funcionarOuNao("testando", 0.2)
  .then(console.log)
  //tratamento de exceção
  .catch((erro) => console.log(`Erro: ${erro}`));
