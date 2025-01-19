import PokemonCard from '../components/PokemonCard'
import { fetchPokemons } from '../services/pokemonService'

export default function HomePage() {

    fetchPokemons(0);

    return (
        <div className=' bg-blue-400 w-screen'>
            This is home page

            <PokemonCard />
        </div>
    )
}
