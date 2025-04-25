
fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response=>{
    if(!response.ok){
        throw new Error('Network response was not ok' + response.statusText)}
        return response.json();
    }).then(data=>{
      console.log(data.results);

        return data.results
    })

.then(data=>{
    const pokecontainer=document.getElementById('poke-container');
    data.forEach((pokemon)=>{
        fetch(pokemon.url)
        .then(response=>{
            if(!response.ok){
                throw new Error('Network response was not ok' + response.statusText)}
                return response.json();
            })
        .then(pokemonData=>{
            const pokeCard=document.createElement('div');
            pokeCard.classList.add('poke-card');
            pokeCard.innerHTML=`
            <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>Height: ${pokemonData.height}</p>
            <p>Weight: ${pokemonData.weight}</p>
            <p>Base Experience: ${pokemonData.base_experience}</p>
            <p>Abilities:${pokemonData.abilities[0].ability.name}</p>
            <p>Types:${pokemonData.types[0].type.name}</p>
            `;
            pokecontainer.appendChild(pokeCard);
        })
    });
})


    .catch(error=>{
        console.error('There was a problem with the fetch operation:', error);
    });


