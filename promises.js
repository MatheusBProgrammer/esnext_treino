// Definindo uma função chamada falarDepoisDe que retorna uma Promise
function falarDepoisDe(fala, segundos) {
    return new Promise((resolve, reject) => {
        // Dentro da Promise, usamos o setTimeout para simular um atraso
        setTimeout(() => {
            // Após o atraso, a Promise é resolvida com o valor 'fala'
            resolve(fala);
        }, segundos * 100); // Multiplicamos por 1000 para converter segundos em milissegundos
    });
}

// Chamando a função falarDepoisDe com a frase 'Objeto digitado' e 1 segundo de atraso
falarDepoisDe('Objeto digitado', 1)
    // O método then é usado para manipular o valor resolvido da Promise
    .then(valor => {
        console.log(valor); // Aqui, o valor 'fala' é impresso
    })
    // O método catch é usado para lidar com erros caso ocorra algum reject na Promise
    .catch(erro => {
        console.log(erro); // Aqui, imprimiríamos o erro caso ocorresse um reject
    });
