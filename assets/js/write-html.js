//document responsible for receiving information and putting it in html code

const writeHTML = {};

//method that returns an html list item containing all the informations of the pokemon that it refers to
//note: the image property isnt required, since all the pokemon images urls have the same id as then
writeHTML.writePokemonLi =(name, id, type, typeLi, height, weight, statsLi)=>
`<li class="pokemon ${type}">
    <button type="button" class="grider" onclick="showInfo(${writeHTML.writePokeInfo(name, id, type, typeLi, height, weight, statsLi)})">
        <span class="poke-name">${name}</span>
        <span class="poke-id">#${id}</span>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}" style="width:auto; height: 100%;" class="pokemon-image">
        <ol class="lista tipos">
            ${typeLi}
        </ol>
    </button>
</li>

`;

//method that return one or two list item corresponding with the types of the pokemon
writeHTML.writeTypeLi = types => types.map(type=>`<li class='poke-tipo ${type}'>${type}</li>`).join('')

//
writeHTML.writeStatLi = stats => stats.map(stat=>`<li class='poke-atribute'>${stat} |</li>`)

//
writeHTML.writePokeInfo = (name, id, type, typeLi, height, weight, statsLi)=>`
    <header>
        <h2>Pokemon Info</h2>
        <button id='close' class='close' onclick='close()' type='button'>X</button>
    </header>
    <section class='pokemon-info-general ${type}'>
        <h3 class='poke-name'>${name}</h3>
        <span class='poke-id'>#${id}</span>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png' alt='${name}' style='width:auto; height: 100%;' class='pokemon-image'>
        <ol class='lista tipos'>
            ${typeLi}
        </ol>
    </section>
    <section>
        <ul class='lista atributos'>
            <li class='poke-atribute'>height: ${height} |</li>
            <li class='poke-atribute'>weight: ${weight} |</li>
            ${statsLi}
        </ul>
    </section>`