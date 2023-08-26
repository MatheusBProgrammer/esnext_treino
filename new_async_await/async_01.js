function esperarPor(segundos = 2) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("printado");
      res(`esperei por ${segundos} segundos`);
    }, segundos * 1000);
  });
}

async function executar() {
  await esperarPor(1);
  console.log("Async1");

  await esperarPor(2);
  console.log("Async2");

  await esperarPor(3);
  console.log("Async3");

  await esperarPor(4);
  console.log("Async4");
}

async function segundoExecutar() {
  const p = await executar();
  console.log(p);
}

segundoExecutar();
