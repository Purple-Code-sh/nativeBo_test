import { useState } from 'react'
import { Link } from 'react-router-dom';
import pokemonLogo from '../assets/pokemonLogo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu on hamburger click
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=' bg-gray-800/70 w-full px-2 sticky top-0 z-20 backdrop-filter backdrop-blur-lg'>
            <div className="flex items-center justify-between px-4 py-3">

                <Link to="/">
                    <div className='flex items-center space-x-2'>
                        <img src={pokemonLogo} alt="Pokemon Logo" className='h-8 w-auto z-30' />
                    </div>
                </Link>

                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md z-30
                     text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none"
                    onClick={handleToggle}
                >
                    {/* Icon: Hamburger / Close depending on state */}
                    {isOpen ? (
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>

                <div className="hidden z-30 md:flex md:items-center space-x-6">
                    <Link to="/" className="rounded-xl px-3 py-2 text-gray-200 hover:text-white hover:bg-slate-700/60 active:text-yellow-400">
                        Home
                    </Link>
                    <Link to="/favorites" className="rounded-xl px-3 py-2 text-gray-200 hover:text-white hover:bg-slate-700/60 active:text-yellow-400">
                        Favorites
                    </Link>
                    <a
                        href="https://pokeapi.co/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl px-3 py-2 text-gray-200 hover:text-white hover:bg-slate-700/60 active:text-yellow-400"
                    >
                        PokeAPI
                    </a>
                </div>
            </div>
            {isOpen && (
                <div className=' md:hidden px-4 pb-3 space-y-2 z-30 text-center'>
                    <Link to='/' onClick={() => setIsOpen(false)} className=' block rounded px-2 py-1 text-gray-200 hover:text-white hover:bg-slate-700/60 active:text-yellow-400'>
                        Home
                    </Link>
                    <Link to='/favorites' onClick={() => setIsOpen(false)} className=' block rounded px-2 py-1 text-gray-200 hover:text-white hover:bg-slate-700/60 active:text-yellow-400'>
                        Favorites
                    </Link>
                    <a href="https://pokeapi.co/"
                        target="_blank"
                        rel="noreferrer" onClick={() => setIsOpen(false)} className=' block rounded px-2 py-1 text-gray-200 hover:text-white hover:bg-slate-700/60 active:text-yellow-400'>
                        PokeAPI
                    </a>
                </div>
            )}
        </nav >
    )
}
