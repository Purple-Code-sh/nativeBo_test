import { useEffect, useState, useRef } from 'react'
import { fetchPokemons } from '../services/pokemonService'
import PokemonCard from '../components/PokemonCard'

export default function HomePage() {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const loadMoreRef = useRef(null);

    const loadPokemons = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const newData = await fetchPokemons(offset, 20);
            setPokemonList((prev) => [...prev, ...newData]);
            setOffset((prev) => prev + 20);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Load the first 20 pokemons
    useEffect(() => {
        loadPokemons();
    }, []);

    useEffect(() => {
        if (pokemonList.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    loadPokemons();
                }
            },
            { rootMargin: '-30px' }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [pokemonList, loading]);


    return (
        <div className=' w-screen px-4 py-6'>

            {/* Pokemon Cards render */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                {pokemonList.map((pokemon) => (
                    < PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types}
                        stats={pokemon.stats}
                    />
                ))}
            </div>


            {/* Once it enters the viewport, we load 20 pokemons more */}
            <div ref={loadMoreRef} className="py-4" />


            {/* Loading indicator */}
            {loading && <p className="text-center text-yellow-400 font-bold mt-4 text-lg">Loading Pokemons...</p>}

        </div>
    )
}