import { useFavoritePokemons } from '../store/favoritePokemons';
import PokemonCard from '../components/PokemonCard';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
    // Access the store
    const { favoritePokemons, removeFavorite } = useFavoritePokemons();

    const handleRemove = (id) => {
        removeFavorite(id);
    };
    return (
        <div className='w-screen px-4 py-6'>
            <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">My Favorite Pokemons</h1>

            {favoritePokemons.length === 0 ? (
                <div className='text-center '>
                    <p className='text-center text-yellow-600 mt-20 mb-10 text-lg sm:text-xl font-semibold'>No favorites yet 😓</p>

                    <Link to="/" className="rounded-2xl px-8 py-4  hover:text-white bg-blue-800 hover:bg-blue-600 active:bg-yellow-400 active:text-black font-bold">
                        <span className=' text-lg md:text-xl'>🕵️</span> Find some!
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {favoritePokemons.map((poke) => (
                        <PokemonCard
                            key={poke.id}
                            {...poke}
                            onAddToFavorites={() => handleRemove(poke.id)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
