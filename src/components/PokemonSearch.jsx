import { useState } from 'react'
import PokemonCard from '../components/PokemonCard'

export default function PokemonSearch() {

    async function fetchSinglePokemon(searchTerm) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        if (!res.ok) throw new Error("Pokemon not found");
        // Return same shape as your "fetchPokemons" detail
        const detailData = await res.json();
        return {
            id: detailData.id,
            name: detailData.name,
            image: detailData.sprites.front_shiny || detailData.sprites.front_default,
            types: detailData.types.map((t) => t.type.name),
            stats: detailData.stats.slice(0, 4).map((stat) => ({
                name: stat.stat.name,
                base: stat.base_stat,
            })),
        };
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [pokemonFounded, setPokemonFounded] = useState(null);
    const [isError, setIsError] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsError(false);
        setPokemonFounded(null);

        if (!searchTerm) return;

        try {
            const singlePokemon = await fetchSinglePokemon(searchTerm);
            console.log(singlePokemon);
            setPokemonFounded(singlePokemon);
            setIsError(false);
        } catch (err) {
            console.error("Single Pokemon search error:", err);
            setIsError(true);
        }
    };

    const handleClearSearch = () => {
        setSearchTerm("");
        setIsError(false);
        setPokemonFounded(null);
    };

    return (
        <div className='flex flex-col mb-4 '>

            <form onSubmit={handleSearch} className="flex flex-col md:flex-row text-center mb-4">
                <div className='flex'>
                    <input
                        type="text"
                        placeholder="Name or Number"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className=" grow border -mr-10 py-3 px-5 rounded-l-xl border-gray-700 focus:outline-none focus:border-yellow-500 bg-gray-800 text-gray-200"
                    />
                    <button
                        type="submit"
                        className="w-fit bg-blue-heart text-slate-900 px-4 rounded-r-xl font-semibold flex-none"
                        disabled={!searchTerm}
                    >
                        Search
                    </button>
                </div>
                {searchTerm && (
                    <button
                        type="button"
                        onClick={handleClearSearch}
                        className="w-fit mt-4 md:mt-0 ml-2 px-6 py-2 bg-gray-800 rounded-xl text-gray-300 font-semibold flex-none self-center md:self-auto"
                    >
                        Clear
                    </button>
                )}
            </form>
            {pokemonFounded &&
                <div className='w-full'>
                    <PokemonCard
                        key={pokemonFounded.id}
                        id={pokemonFounded.id}
                        name={pokemonFounded.name}
                        image={pokemonFounded.image}
                        types={pokemonFounded.types}
                        stats={pokemonFounded.stats}
                    />
                </div>
            }
            {isError && searchTerm &&
                <p className='w-full text-center my-6'>Pokemon not founded 😞</p>
            }

        </div>
    )
}
