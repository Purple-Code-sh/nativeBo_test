import { useEffect, useState, useRef } from 'react'
import { fetchPokemons } from '../services/pokemonService'
import PokemonCard from '../components/PokemonCard'
import PokemonSearch from '../components/PokemonSearch'
import ScrollToTopButton from '../components/ScrollToTopButton'

const generationOffsets = [
    { id: 1, label: "Generation 1", region: "(Kanto)", offset: 0 },
    { id: 2, label: "Generation 2", region: "(Johto)", offset: 151 },
    { id: 3, label: "Generation 3", region: "(Hoenn)", offset: 251 },
    { id: 4, label: "Generation 4", region: "(Sinnoh)", offset: 386 },
    { id: 5, label: "Generation 5", region: "(Unova)", offset: 493 },
    { id: 6, label: "Generation 6", region: "(Kalos)", offset: 649 },
    { id: 7, label: "Generation 7", region: "(Alola)", offset: 721 },
    { id: 8, label: "Generation 8", region: "(Galar)", offset: 809 },
    { id: 9, label: "Generation 9", region: "(Paldea)", offset: 905 },
];


export default function HomePage() {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(generationOffsets[0].offset);
    const [loading, setLoading] = useState(false);
    const [selectedGenIndex, setSelectedGenIndex] = useState(0);

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
    }, [selectedGenIndex]);

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


    // Handle generation select
    const handleGenChange = (e) => {
        const genIndex = parseInt(e.target.value);
        //console.log("genIndex: ", genIndex, typeof genIndex);
        setSelectedGenIndex(genIndex);

        // Reset offset to that generation's start
        const newOffset = genIndex;
        setOffset(newOffset);

        setPokemonList([]);
    };

    return (
        <div className=' w-screen px-4 py-6'>

            {/* Pokemon Cards render */}
            <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto'>
                <PokemonSearch />
            </div>

            <h1 className="capitalize text-center font-bold text-xl my-4 opacity-85">All pokemons</h1>

            {/* Generation SELECT */}
            <div className="mb-4 text-center">
                <label htmlFor="genSelect" className="mr-2 text-slate-400">
                    Start from:
                </label>
                <select
                    id="genSelect"
                    value={selectedGenIndex}
                    onChange={handleGenChange}
                    className="p-2 bg-slate-900 rounded-xl text-slate-400 font-bold focus:outline-none 
                    focus:border focus:border-yellow-600 "
                >
                    {generationOffsets.map((generation) => (
                        <option key={generation.id} value={generation.offset}>
                            {generation.label} {generation.region}
                        </option>
                    ))}
                </select>
            </div>

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


            {/* The floating scroll-to-top button */}
            <ScrollToTopButton />
        </div>
    )
}