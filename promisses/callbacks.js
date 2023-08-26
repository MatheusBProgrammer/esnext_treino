const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, (res) => {
        let response = '';
        res.on('data', data => response += data)
        res.on('end', () => callback(JSON.parse(response)))
    })
}

let nomes = [];
//getTurma('A', alunos => {    console.log(alunos) })
getTurma('C', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
    console.log(nomes)
})