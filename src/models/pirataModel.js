var database = require("../database/config");

function listar() {
    console.log("ACESSEI O PIRATA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `select * from Pirata join Bando on fkBando = idBando;
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarBando() {
    console.log("ACESSEI O PIRATA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `select Bando.*,count(fkBando) as 'qtdAdicoes' from Pirata join Bando on fkBando = idBando group by Bando.nomeBando;
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function numeroPirata() {
    console.log("ACESSEI O PIRATA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `select count(*) as 'qtdPirata' from Pirata;
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    select * from Pirata join Bando on Pirata.fkBando = Bando.idBando join
     Deck on Deck.fkPirata = Pirata.idPirata join
      Usuario on fkUsuario = idUsuario where Usuario.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function verificarPirataDeck(idUsuario, idBando, idPirata) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verificarPirataDeck()");
    var instrucao = `
    select * from Pirata join Bando on Pirata.fkBando = Bando.idBando join
     Deck on Deck.fkPirata = Pirata.idPirata join
      Usuario on fkUsuario = idUsuario where Usuario.idUsuario = ${idUsuario} and Bando.idBando = ${idBando} and Pirata.idPirata = ${idPirata};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarPorBando(idBando) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    select * from Pirata join Bando on fkBando = idBando where idBando = ${idBando};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function adicionarPirata(idUsuario, idBando, idPirata) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario, idBando, idPirata);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into Deck (fkUsuario,fkBando,fkPirata,statusPirata) values
(${idUsuario},${idBando},${idPirata},'cadastrado');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function deletarDeck(idUsuario, idBando, idPirata) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario, idBando, idPirata);
    var instrucao = `
        DELETE FROM Deck WHERE fkUsuario = ${idUsuario} and fkBando = ${idBando} and fkPirata = ${idPirata};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar,
    listarPorUsuario,
    listarPorBando,
    adicionarPirata,
    verificarPirataDeck,
    deletarDeck,
    numeroPirata,
    listarBando
}