/**setTimeout(()=>{

console.log('teste'),2000
setTimeout(()=>{
    console.log('teste2')
},1000)

}) */
function esperarPor(segundos = 2) {
    return new Promise(res => {
        setTimeout(() => {
            console.log('printado')
            res(`esperei por ${segundos} segundos`)
        }, (segundos * 1000))
    })
}
//console.log(esperarPor(4).then(console.log))
esperarPor(2).then(x=>esperarPor().then(console.log))
