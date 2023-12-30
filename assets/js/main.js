//document responsible with managing general data and keeping the general functions

//base information
let itensLista = document.getElementById("poke-lista").innerHTML
let off = 0;
let lim= 24;


//function that receives an json element of a pokemon and uses as parameters its name, id and type, then send it to the writeTypeLi method and add to the list variable
const convertPokeLi = ({name, id, types, height, weight, stats}) => {
    types = types.map(pokeAPI.getTypeList)
    stats = stats.map(pokeAPI.getStats)
    itensLista += writeHTML.writePokemonLi(name, id, types[0], writeHTML.writeTypeLi(types), height, weight, writeHTML.writeStatLi(stats))
}

//function responsible for add more pokemons, it's essentially the one that starts everything
//note: it is limited for the first 151 for challange purposes, but can be changed by changing the two "151" values inside the .getPokemons method call
const loadPokemons = ()=>{
    pokeAPI.getPokemons(off, off+lim>151?151-off:lim).then(lista=>{
        lista.forEach(poke => convertPokeLi(poke))
    document.getElementById("poke-lista").innerHTML = itensLista
    off += lim
})}

//First execution of the loadPokemons function so the page doesnt appear blank at first
loadPokemons()

//function that inserts the content of the #poke-info aside element and organize the classes of the elements affected by it
const showInfo = (pokeInfoHtml)=>{
    document.getElementById("poke-info").innerHTML = pokeInfoHtml
    document.getElementById("poke-lista").classList.add("poke-info-active")
    document.getElementById("go-down-button").classList.add("poke-info-active")
    document.getElementById("sec-lista").classList.add("poke-info-active")
    document.getElementById("poke-info").classList.remove('invisible')
    document.getElementById('flexer').classList.add('flexer')
}

//function that clears the content of the #poke-info aside element and organize the classes of the elements affected by it
const closeInfo = ()=>{
    document.getElementById("poke-info").innerHTML = ''
    document.getElementById("poke-lista").classList.remove("poke-info-active")
    document.getElementById("go-down-button").classList.remove("poke-info-active")
    document.getElementById("sec-lista").classList.remove("poke-info-active")
    document.getElementById("poke-info").classList.add("invisible")
    document.getElementById("flexer").classList.remove("flexer")
}