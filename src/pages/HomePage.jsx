import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { fetchPokemons } from '../services/pokemonService'

export default function HomePage() {

    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0)
    const loadPokemons = async () => {
        try {
            const newData = await fetchPokemons(offset);
            setPokemonList(newData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadPokemons();
    }, []);


    return (
        <div className=' bg-blue-400 w-screen'>
            This is home page

            {pokemonList.map((pokemon) => {
                console.log(pokemon);
                return (

                    < PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                        stats={pokemon.stats}
                    />
                )
            }
            )}

        </div>
    )
}
