async function buscar() {
var nomeCarta = document.getElementById('pesquisa').value;
var apiKey = '1e9da96c-6f8e-4c91-8706-f9764654cdb0';
var url = 'https://api.pokemontcg.io/v2/cards?q=name:' + nomeCarta + apiKey;
var resposta = fetch(url);
var dados = await resposta.json();
var resultado = document.getElementById('resultado');
resultado.innerHTML = '';

if (dados.data.length === 0) {
resultado.innerHTML = 'Nenhuma carta encontrada.';
} else {
dados.data.forEach(function(carta) {
var cartaDiv = document.createElement('div');

cartaDiv.innerHTML = '<h2>' + carta.name + '</h2><img src="' + carta.images.small + '"><p>Raridade: ' + carta.rarity + '</p>';
resultado.appendChild(cartaDiv);
});
}
}
