const http = require('http'); // Importando o módulo http para fazer requisições web

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    // Retornando uma nova Promise para buscar os dados da turma
    return new Promise((resolve, reject) => {
        // Fazendo uma requisição HTTP para a URL especificada
        http.get(url, res => {
            let resultado = '';

            // Evento 'data' é disparado quando os dados da resposta estão chegando
            res.on('data', data => {
                resultado += data; // Acumula os dados da resposta
            });

            // Evento 'end' é disparado quando a resposta foi completamente recebida
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado)); // Resolve a Promise com os dados parseados
                } catch (e) {
                    reject(e); // Em caso de erro no parse, rejeita a Promise
                }
            });
        });
    });
};

const getAlunos = async () => {
    const a = await getTurma('A')
    const b = await getTurma('B')
    const c = await getTurma('C')
    return [].concat(a, b, c)

}
getAlunos().then(objeto=> objeto.map(objeto=>objeto.nome)).then(objeto=>console.log(objeto))