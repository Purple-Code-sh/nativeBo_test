import PokemonCard from '../components/PokemonCard'

export default function HomePage() {
    const LIMIT = 20;

    async function fetchPokemons(offset = 0) {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`
        );
        if (!response.ok) {
            throw new Error("Failed to fetch Pokemon list");
        }
        const data = await response.json();
        console.log(data.results);
    }

    fetchPokemons();

    return (
        <div className=' bg-blue-400 w-screen'>
            This is home page

            <PokemonCard />
        </div>
    )
}
