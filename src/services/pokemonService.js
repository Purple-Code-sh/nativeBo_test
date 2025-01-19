const LIMIT = 20;

async function fetchPokemons(offset = 0) {
    // 1. Fetch a list of basic Pokemon info (name + URL)
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch Pokemon list");
    }
    const data = await response.json();
    console.log(data.results);



    // 2. For each Pokemon, fetch its full detail (stats, sprites, etc)


    // 3. Wait until all requests finish and return the array of Pokémon details.
}