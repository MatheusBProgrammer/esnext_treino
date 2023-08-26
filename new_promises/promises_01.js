let p = new Promise(function (resolve) {
    resolve(['Matheus', 'Marianna', 'Luciana'])
});

function primeiroElemento(array) {
    return array[0];
};

function primeiraLetra(string) {
    return string[0];
};

function minusculo(string) {
    return string.toLowerCase()
}

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(minusculo)
    .then(console.log)
