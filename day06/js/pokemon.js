const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

// getASinglePokemon(4);
// getASinglePokemon(25);
// getASinglePokemon();

getManyPokemon(0, 5);

function getManyPokemon(offset, limit, url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5` ) {
    fetch(url ? url : `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}` ).then(res => res.json())
    .then(data => {
        console.log(data);
     
        handleManyPokemon(data);

    })
}

function handleManyPokemon(many) {

    // document.body.innerHTML = '';

    many.results.forEach( (pokemon, index) => {
        if (index % 2 === 1) {
               getASinglePokemon(pokemon.name);
        } 
     
    })
    const nextButton = document.createElement('button');
    document.body.append(nextButton);
    nextButton.innerHTML = 'Next';
    nextButton.addEventListener('click', function() {
        getManyPokemon(0, 5, many.next);
    })
}

function getASinglePokemon(pokemonName) {
    fetch(baseUrl + (pokemonName ? pokemonName : ''))
    .then(function(result) {
        return result.json();
    })
    .then((result) => {
        console.log(result);
        handleSinglePokemon(result);
    });
}

function handleSinglePokemon(pokemon) {
    const div = document.createElement('div');
    document.body.append(div);
    const h2 = document.createElement('h2');
    div.append(h2);
    h2.innerText = pokemon['name']; 
    h2.innerText += ' - ' + pokemon.id;
    const img = document.createElement('img');
    div.append(img);
    img.src = pokemon.sprites.front_default;
    img.style.width = '200px';
}