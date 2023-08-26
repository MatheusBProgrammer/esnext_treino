function gerarNumeroAleatorio(min = 1, max = 99) {
    if (min > max) {
        [min, max] = [max, min]
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}


function gerarTodos() {
    return Promise.all([
        gerarNumeroAleatorio(1, 30),
        gerarNumeroAleatorio(31, 60),
        gerarNumeroAleatorio(61, 90),
        gerarNumeroAleatorio(91, 120),
        gerarNumeroAleatorio(121, 150),]
    )
}
gerarTodos().then(numeros=>console.log(numeros))

Promise.all([
    gerarNumeroAleatorio(1, 30),
    gerarNumeroAleatorio(31, 60),
    gerarNumeroAleatorio(61, 90),
    gerarNumeroAleatorio(91, 120),
    gerarNumeroAleatorio(121, 150),]
).then(console.log)