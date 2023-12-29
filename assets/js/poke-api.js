//document responsible with dealing with data provinient from pokeAPI

const pokeAPI = {}

//method responsible for getting the the json file from the an url
pokeAPI.getResults = (link) =>{
    return fetch(link)
        .then((response)=>response.json())
        .then((jsonBody)=>jsonBody)
        .catch((error)=>console.error(error))

}

//method responsible to receive the offset and limit values and return a list containing the json elements of the nex pokemons
pokeAPI.getPokemons = (offset = 0, limit = 10)=>{
    const urlPokeAPI = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return pokeAPI.getResults(urlPokeAPI)
        .then((listUrls)=>{
            let promiseList = listUrls.results.map(nameUrl=>pokeAPI.getResults(nameUrl["url"]))
            return Promise.all(promiseList).then(list=>list)
        })
        .then(lista=>lista)
}

//method that return the type of the pokemon
pokeAPI.getTypeList = type=>type.type.name;