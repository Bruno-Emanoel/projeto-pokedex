const pokeAPI = {}
//olha esse negocio  \/aqui
pokeAPI.getResults = (link) =>{
    return fetch(link)
        .then((response)=>response.json())
            .then((jsonBody)=>jsonBody)
        .catch((error)=>console.error(error))

}

pokeAPI.getPokemons = (offset = 0, limit = 10)=>{
    const urlPokeAPI = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return pokeAPI.getResults(urlPokeAPI)
        .then((listUrls)=>{
            let promiseList = listUrls.results.map((nameUrl)=>{
                return pokeAPI.getResults(nameUrl["url"])
            })
            return Promise.all(promiseList).then(list=>list)
        })
            .then(lista=>lista)
}