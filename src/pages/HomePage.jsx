import PokemonCard from '../components/PokemonCard'
import { fetchPokemons } from '../services/pokemonService'

export default function HomePage() {

    const pokemonsInfo = fetchPokemons(0);
    console.log(pokemonsInfo);

    return (
        <div className=' bg-blue-400 w-screen'>
            This is home page

            <PokemonCard />
        </div>
    )
}
