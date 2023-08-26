function tag(partes,...valores){
    console.log(partes);
    console.log(valores);
    return 'Função tag executada'
}

const valor1 = "valor1";
const valor2 = "VALOR2";
console.log(tag`${valor1} PARTES ${valor2} PARTES AGRUPADAS`)