// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nomeProfile = document.getElementById("nomeProfile");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        nomeProfile.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login/login.html";
}

function listarPiratas() {
    fetch('/piratas/listar').then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {

                console.log('Dados:', JSON.stringify(resposta))
                var spanNumeroRegistro = document.getElementById('countRegistro')
                spanNumeroRegistro.innerHTML = resposta.length
                containerCards.innerHTML = ''

                for (let i = 0; i < resposta.length; i++) {
                    var item = resposta[i]

                    containerCards.innerHTML +=
                        `<div id="card" class="card">
                        <img src="${item.caminhoImagem}" alt="">
                        <button class="btn-add" id="btnAdd"onclick="adicionarPirata(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">+</button>
                        <div class="info">
                            <div class="header-info">
                                <p class="tag-tripulacao">${item.nomeBando}</p>
                               
                                
                            </div>
                            <h4>${item.nomePirata}</h4>
                        </div>
                    </div>`
                }
            })
        }

    })

}

function listarPorUsuario() {
    var idUsuario = sessionStorage.ID_USUARIO;
    fetch(`/piratas/listarPorUsuario/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log('Dados:', JSON.stringify(resposta))
                var spanNumeroRegistro = document.getElementById('countRegistro')
                spanNumeroRegistro.innerHTML = resposta.length

                containerCards.innerHTML = ''

                for (let i = 0; i < resposta.length; i++) {
                    var item = resposta[i]

                    containerCards.innerHTML +=
                        `<div id="card" class="card card-small">
                    <img src="${item.caminhoImagem}" alt="">
                    <button class="btn-add" id="btnAdd" onclick="adicionarPirata(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">+</button>
                            <button class="btn-remove" id="btnDelete" onclick="deletarDeck(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">-</button>
                    <div class="info">
                        <div class="header-info">
                            <p class="tag-tripulacao">${item.nomeBando}</p>
                            
                            
                        </div>
                        <h4>${item.nomePirata}</h4>
                    </div>
                </div>`
                }
            })
        }
    })
}

function escolherPirata() {
    var selectExibirPiratas = selectFiltro.value;

    if (selectExibirPiratas == '*') {
        fetch('/piratas/listar').then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {

                    console.log('Dados:', JSON.stringify(resposta))
                    var spanNumeroRegistro = document.getElementById('countRegistro')
                    spanNumeroRegistro.innerHTML = resposta.length
                    containerCards.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        containerCards.innerHTML +=
                            `<div id="card" class="card">
                            <button class="btn-add" id="btnAdd"onclick="adicionarPirata(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">+</button>
                        <img src="${item.caminhoImagem}" alt="">
                        <div class="info">
                            <div class="header-info">
                                <p class="tag-tripulacao">${item.nomeBando}</p>
                                
                                
                                
                            </div>
                            <h4>${item.nomePirata}</h4>
                        </div>
                    </div>`
                    }
                })
            }
        })
    } else if (selectExibirPiratas == '1') {

        fetch(`/piratas/listarPorBando/${selectExibirPiratas}`).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {

                    console.log('Dados:', JSON.stringify(resposta))
                    var spanNumeroRegistro = document.getElementById('countRegistro')
                    spanNumeroRegistro.innerHTML = resposta.length
                    containerCards.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        containerCards.innerHTML +=
                            `<div id="card" class="card">
                            <button class="btn-add" id="btnAdd"onclick="adicionarPirata(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">+</button>
                        <img src="${item.caminhoImagem}" alt="">
                        <div class="info">
                            <div class="header-info">
                                <p class="tag-tripulacao">${item.nomeBando}</p>
                                
                                
                            </div>
                            <h4>${item.nomePirata}</h4>
                        </div>
                    </div>`
                    }
                })
            }
        })
    } else if (selectExibirPiratas == '2') {
        fetch(`/piratas/listarPorBando/${selectExibirPiratas}`).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {

                    console.log('Dados:', JSON.stringify(resposta))
                    var spanNumeroRegistro = document.getElementById('countRegistro')
                    spanNumeroRegistro.innerHTML = resposta.length
                    containerCards.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        containerCards.innerHTML +=
                            `<div id="card" class="card">
                        <img src="${item.caminhoImagem}" alt="">
                        <button class="btn-add" id="btnAdd"onclick="adicionarPirata(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">+</button>
                        <div class="info">
                            <div class="header-info">
                                <p class="tag-tripulacao">${item.nomeBando}</p>
                                
                                
                            </div>
                            <h4>${item.nomePirata}</h4>
                        </div>
                    </div>`
                    }
                })
            }
        })
    } else if (selectExibirPiratas == '3') {
        fetch(`/piratas/listarPorBando/${selectExibirPiratas}`).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {

                    console.log('Dados:', JSON.stringify(resposta))
                    var spanNumeroRegistro = document.getElementById('countRegistro')
                    spanNumeroRegistro.innerHTML = resposta.length
                    containerCards.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        containerCards.innerHTML +=
                            `<div id="card" class="card">
                        <img src="${item.caminhoImagem}" alt="">
                        <button class="btn-add" id="btnAdd"onclick="adicionarPirata(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">+</button>
                        <div class="info">
                            <div class="header-info">
                                <p class="tag-tripulacao">${item.nomeBando}</p>
                                
                                
                            </div>
                            <h4>${item.nomePirata}</h4>
                        </div>
                    </div>`
                    }
                })
            }
        })
    } else if (selectExibirPiratas == '4') {
        fetch(`/piratas/listarPorBando/${selectExibirPiratas}`).then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {

                    console.log('Dados:', JSON.stringify(resposta))
                    var spanNumeroRegistro = document.getElementById('countRegistro')
                    spanNumeroRegistro.innerHTML = resposta.length
                    containerCards.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        containerCards.innerHTML +=
                            `<div id="card" class="card">
                        <img src="${item.caminhoImagem}" alt="">
                        <button class="btn-add" id="btnAdd"onclick="adicionarPirata(${sessionStorage.ID_USUARIO},${item.idBando},${item.idPirata})">+</button>
                        <div class="info">
                            <div class="header-info">
                                <p class="tag-tripulacao">${item.nomeBando}</p>
                                
                            </div>
                            <h4>${item.nomePirata}</h4>
                        </div>
                    </div>`
                    }
                })
            }
        })
    }
}
function adicionarPirata(idUsuario, idBando, idPirata) {

    fetch('/piratas/adicionarPirata', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            idBandoServer: idBando,
            idPirataServer: idPirata,
        }),
    }).then(function (resposta) {
        console.log('resposta: ', resposta);
        if (resposta.ok) {
            alert(`Carta Cadastrada em seu Deck`)
        } else {
            alert('Carta já Cadastrada')
            throw 'Houve um erro ao tentar realizar o cadastro!';
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}

function deletarDeck(idUsuario, idBando, idPirata) {
    fetch('/piratas/deletarDeck', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            idBandoServer: idBando,
            idPirataServer: idPirata,
        }),
    }).then(function (resposta) {
        console.log('resposta: ', resposta);
        if (resposta.ok) {
            alert('Carta removida do seu deck')
            window.location = "deck.html";
        } else {
            alert('Erro ao Cadastrar')
            throw 'Houve um erro ao tentar realizar o cadastro!';
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
    return false;
}

function metricas() {
    fetch('/usuarios/numeroUsuario').then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {

                console.log('Dados:', JSON.stringify(resposta))
                numeroUsuarios.innerHTML = resposta[0].qtdUsuarios

            })
        }

    })
    fetch('/piratas/numeroPirata').then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {

                console.log('Dados:', JSON.stringify(resposta))
                numeroCartas.innerHTML = resposta[0].qtdPirata

            })
        }

    })
}



// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.innerHTML = texto;
//     }
// }


// // modal
// function mostrarModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "flex";
// }

// function fecharModal() {
//     var divModal = document.getElementById("div_modal");
//     divModal.style.display = "none";
// }

