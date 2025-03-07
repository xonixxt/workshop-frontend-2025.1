async function buscar() {
    nomeCarta = document.getElementById('pesquisa').value.toLowerCase();
    url = `https://api.pokemontcg.io/v2/cards?q=name:${nomeCarta}`
    resposta = await fetch(url)
    dados = await resposta.json()
    resultado = document.getElementById(`resultado`)
    resultado.innerHTML = ``
    
    if (dados.data.length == 0) {   
        let cartaDiv = document.createElement('div')
        cartaDiv.innerHTML = `Nenhuma carta encontrada`
        resultado.appendChild(cartaDiv)
    } else {
        let cartaDiv = document.createElement('div')
        carta = dados.data[0]
        
        cartaDiv.innerHTML = 
        `<h2>${carta.name}</h2>
        <img src="${carta.images.small}"/>`
        resultado.appendChild(cartaDiv)
    }
    
    }
    