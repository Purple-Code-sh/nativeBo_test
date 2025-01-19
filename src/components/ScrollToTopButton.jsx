import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show or hide the button depending on scroll position
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="
        fixed top-20 left-1/2 -translate-x-1/2 z-50 font-bold py-2 px-6 rounded-xl shadow text-sm lg:text-base
        bg-cyan-600/50 hover:bg-cyan-600/80 backdrop-filter backdrop-blur-md
        text-white active:text-black active:bg-yellow-600
      "
            aria-label="Scroll to top"
        >
            Go to Start 👆
        </button>
    );
}
