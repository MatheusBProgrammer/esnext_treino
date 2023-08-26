function inverterObjeto(objeto){
    objetoInvertido = {}
    for(const[chave,valor] of Object.entries(objeto)){
        objetoInvertido[valor]=chave
    }
    return objetoInvertido
}

console.log(inverterObjeto({x:8,y:2,z:5}))