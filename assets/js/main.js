
let itensLista = document.getElementById("poke-lista").innerHTML

const convertPokeLi = ({name, url}) => {
    const reg = /\/(\d+)\/$/
    const id = url.match(reg)[1]
    itensLista +=
        `<li class="pokemon">
        <span class="poke-name">${name}</span>
        <span class="poke-id">#${id}</span>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}" style="width:auto; height: 100%;" class="pokemon-image">
        <ol class="lista tipos">
            <li class="poke-tipo">Grass</li>
            <li class="poke-tipo">Poison</li>
        </ol>
        </li>
    `
}

pokeAPI.getPokemons().then(lista=>{
    lista.forEach(poke => convertPokeLi(poke))
    document.getElementById("poke-lista").innerHTML += itensLista
})