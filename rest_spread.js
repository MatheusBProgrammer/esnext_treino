//Objeto
const teste = {nome:"Matheus",idade:26, curso:"ADS"}
const clone = {status:"ativado",...teste}// adiciona uma cópia de teste
console.log(Object.entries(clone))

//Array
const grupoA = ['Matheus','Luciana','Marianna']
const cloneGrupo = ['clone',...grupoA,'clone']
console.log(...cloneGrupo)