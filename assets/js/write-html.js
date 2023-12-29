//document responsible for receiving information and putting it in html code

const writeHTML = {};

//method that returns an html list item containing all the informations of the pokemon that it refers to
//note: the image property isnt required, since all the pokemon images urls have the same id as then
writeHTML.writePokemonLi =(name, id, type, typeLi)=>`<li class="pokemon ${type}">
<span class="poke-name">${name}</span>
<span class="poke-id">#${id}</span>
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}" style="width:auto; height: 100%;" class="pokemon-image">
<ol class="lista tipos">
    ${typeLi}
</ol>
</li>
`;

//method that return one or two list item corresponding with the types of the pokemon
writeHTML.writeTypeLi = types => types.map(type=>`<li class="poke-tipo ${type}">${type}</li>`).join('')