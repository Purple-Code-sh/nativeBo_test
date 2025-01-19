const LIMIT = 20;

export async function fetchPokemons(offset = 0) {
    // 1. Fetch a list of basic Pokemon info (name + URL)
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch Pokemon list');
    };
    const data = await response.json();
    // console.log(data.results);


    // 2. For each Pokemon, fetch its full detail (stats, sprites, etc)
    const pokemonsDetailRequests = data.results.map(async (pokemon) => {

        //Get url from the pokemon to do a request of its detailed information

        //console.log(pokemon.url);
        const detailsResponse = await fetch(`${pokemon.url}`);
        if (!detailsResponse.ok) {
            throw new Error('Failed to fetch pokemon detail')
        };
        const detailData = await detailsResponse.json();
        //console.log(detailsData);

        // Extract info to display:

        return {
            id: detailData.id,
            name: detailData.name,

            // Shiny sprite if available, else default
            image:
                detailData.sprites.front_shiny ||
                detailData.sprites.front_default ||
                "",

            // Extract types (just their names)
            types: detailData.types.map((t) => t.type.name),

            // Extract stats. The full array has 6 stats. You can pick the first 4 or specifically named stats.
            stats: detailData.stats.slice(0, 4).map((stat) => ({
                name: stat.stat.name,
                base: stat.base_stat,
            })),
        };
    })

    // 3. Wait until all requests finish and return the array of Pokémon details.
    const results = await Promise.all(pokemonsDetailRequests);
    return results;
}
