var pirataModel = require("../models/pirataModel");

function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}
function listar(req, res) {
    pirataModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listarBando(req, res) {
    pirataModel.listarBando().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function numeroPirata(req, res) {
    pirataModel.numeroPirata().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    pirataModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function verificarPirataDeck(req, res) {
    var idUsuario = req.params.idUsuario;
    var idBando = req.params.idBando;
    var idPirata = req.params.idPirata;
    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (idBando == undefined) {
        res.status(400).send("Seu bando está undefined!");
    } else if (idPirata == undefined) {
        res.status(400).send("Sua pirata está undefined!");
    } else {
        pirataModel.verificarPirataDeck(idUsuario, idBando, idPirata)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!");
                    }
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "Houve um erro ao buscar os avisos: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function listarPorBando(req, res) {
    var idBando = req.params.idBando;

    pirataModel.listarPorBando(idBando)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function adicionarPirata(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo dashboard.html
    var idUsuario = req.body.idUsuarioServer;
    var idBando = req.body.idBandoServer;
    var idPirata = req.body.idPirataServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (idBando == undefined) {
        res.status(400).send("Seu bando está undefined!");
    } else if (idPirata == undefined) {
        res.status(400).send("Sua pirata está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pirataModel.adicionarPirata(idUsuario, idBando, idPirata)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function deletarDeck(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo dashboard.html
    var idUsuario = req.body.idUsuarioServer;
    var idBando = req.body.idBandoServer;
    var idPirata = req.body.idPirataServer;

    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (idBando == undefined) {
        res.status(400).send("Seu bando está undefined!");
    } else if (idPirata == undefined) {
        res.status(400).send("Sua pirata está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pirataModel.deletarDeck(idUsuario, idBando, idPirata)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    testar,
    listar,
    listarPorUsuario,
    listarPorBando,
    adicionarPirata,
    verificarPirataDeck,
    deletarDeck,
    numeroPirata,
    listarBando


}