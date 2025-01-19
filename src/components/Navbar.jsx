import { useState } from 'react'
import pokemonLogo from '../assets/pokemonLogo.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu on hamburger click
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className=' bg-gray-800 w-full px-'>
            <div className="flex items-center justify-between px-4 py-3">
                <div className='flex items-center space-x-2'>
                    <img src={pokemonLogo} alt="Pokemon Logo" className='h-8 w-auto' />
                </div>

                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md 
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
            </div>
        </nav>
    )
}
