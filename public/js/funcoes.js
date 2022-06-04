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
    window.location = "../login.html";
}

function listarPiratas() {
    fetch('/avisos/listar').then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log('Dados:', JSON.stringify(resposta))
                containerCards.innerHTML = ''
                for (let i = 0; i < resposta.length; i++) {
                    var item = resposta[i]
                    containerCards.innerHTML +=
                        `<div id="card" class="card">
                        <img src="${item.caminhoImagem}" alt="">
                        <div class="info">
                            <div class="header-info">
                                <p class="tag-tripulacao">${item.nomeBando}</p>
                                <h4>${item.nomePirata}</h4>
                            </div>
                        </div>
                    </div>`
                }
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

