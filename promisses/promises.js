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

// Promise.all recebe um array de Promises e aguarda todas serem resolvidas
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas)) // Concatena os arrays de turmas em um só
    .then(alunos => alunos.map(aluno => aluno.nome)) // Mapeia os alunos para obter somente os nomes
    .then(nomes => console.log(nomes)); // Mostra os nomes dos alunos no console
