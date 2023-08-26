//função para personalizar um valor específico
function real(partes, ...valores) {
    const resultado = [];
    valores.forEach((valor, indice) => {
        valor = isNaN(valor)
            ? valor
            : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('');
}

const preco = 24.99
const preco2 = 10
console.log(real `1x de ${preco} ou 3x de ${preco2}`)