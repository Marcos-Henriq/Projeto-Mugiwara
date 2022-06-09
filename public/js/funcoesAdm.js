function listarPiratasTabela() {
    fetch('/piratas/listar').then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {

                console.log('Dados:', JSON.stringify(resposta))
                var spanNumeroRegistro = document.getElementById('countRegistro')
                spanNumeroRegistro.innerHTML = resposta.length
                tabelaCartas.innerHTML = ''

                for (let i = 0; i < resposta.length; i++) {
                    var item = resposta[i]

                    tabelaCartas.innerHTML +=
                        ` <tr>
                            <td> <img class="img-table" src="${item.caminhoImagem}"> </td>
                            <td>${item.nomePirata}</td>
                            <td>${item.nomeBando}</td>

                        </tr>`
                }
            })
        }

    })

}
function escolherPirataTabela() {
    var selectExibirPiratas = selectFiltro.value;

    if (selectExibirPiratas == '*') {
        fetch('/piratas/listar').then(function (resposta) {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {

                    console.log('Dados:', JSON.stringify(resposta))
                    var spanNumeroRegistro = document.getElementById('countRegistro')
                    spanNumeroRegistro.innerHTML = resposta.length
                    tabelaCartas.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        tabelaCartas.innerHTML +=
                            ` <tr>
                            <td> <img class="img-table" src="${item.caminhoImagem}"> </td>
                            <td>${item.nomePirata}</td>
                            <td>${item.nomeBando}</td>

                        </tr>`
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
                    tabelaCartas.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        tabelaCartas.innerHTML +=
                            ` <tr>
                            <td> <img class="img-table" src="${item.caminhoImagem}"> </td>
                            <td>${item.nomePirata}</td>
                            <td>${item.nomeBando}</td>

                        </tr>`
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
                    tabelaCartas.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        tabelaCartas.innerHTML +=
                            ` <tr>
                            <td> <img class="img-table" src="${item.caminhoImagem}"> </td>
                            <td>${item.nomePirata}</td>
                            <td>${item.nomeBando}</td>

                        </tr>`
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
                    tabelaCartas.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        tabelaCartas.innerHTML +=
                            ` <tr>
                                <td> <img class="img-table" src="${item.caminhoImagem}"> </td>
                                <td>${item.nomePirata}</td>
                                <td>${item.nomeBando}</td>
    
                            </tr>`
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
                    tabelaCartas.innerHTML = ''

                    for (let i = 0; i < resposta.length; i++) {
                        var item = resposta[i]

                        tabelaCartas.innerHTML +=
                            ` <tr>
                            <td> <img class="img-table" src="${item.caminhoImagem}"> </td>
                            <td>${item.nomePirata}</td>
                            <td>${item.nomeBando}</td>

                        </tr>`
                    }
                })
            }
        })
    }
}



