//document responsible with managing general data and keeping the general functions

//base information
let itensLista = document.getElementById("poke-lista").innerHTML
let off = 0;
let lim= 20;

//function that receives an json element of a pokemon and uses as parameters its name, id and type, then send it to the writeTypeLi method and add to the list variable
const convertPokeLi = ({name, id, types}) => {
    types = types.map(pokeAPI.getTypeList)
    itensLista += writeHTML.writePokemonLi(name, id, types[0], writeHTML.writeTypeLi(types))
}

//function responsible for add more pokemons, it's essentially the one that starts everything
//note: it is limited for the first 151 for challange purposes, but can be changed by changing the two "151" values inside the .getPokemons method call
const loadPokemons = ()=>{
    pokeAPI.getPokemons(off, off+lim>151?151-off:lim).then(lista=>{
        lista.forEach(poke => convertPokeLi(poke))
    document.getElementById("poke-lista").innerHTML = itensLista
    off += lim
})}

loadPokemons()