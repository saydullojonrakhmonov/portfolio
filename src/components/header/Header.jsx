import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='flex justify-between items-center px-8 py-4 shadow bg-gray-900 text-white relative'>
            <img src={'/logo.svg'} alt="Logo" className='cursor-pointer h-8' />
            <ul className='hidden md:flex gap-6'>
                <li className='cursor-pointer'><a href="#projects">Works</a></li>
                <li className='cursor-pointer'><a href="https://www.linkedin.com/in/saydullojon-rahmonov/" target='_blank' rel="noopener noreferrer">Blog</a></li>
                <li className='cursor-pointer'><a href="#contact">Contact</a></li>
            </ul>
            <div className='md:hidden'>
                {menuOpen ? (
                    <FiX size={28} className="cursor-pointer" onClick={() => setMenuOpen(false)} />
                ) : (
                    <FiMenu size={28} className="cursor-pointer" onClick={() => setMenuOpen(true)} />
                )}
            </div>
            {menuOpen && (
                <ul className='absolute top-full right-0 bg-gray-800 text-white flex flex-col gap-4 p-6 w-48 md:hidden shadow-lg'>
                    <li className='cursor-pointer' onClick={() => setMenuOpen(false)}>
                        <a href="#projects">Works</a>
                    </li>
                    <li className='cursor-pointer' onClick={() => setMenuOpen(false)}>
                        <a href="https://www.linkedin.com/in/saydullojon-rahmonov/" target='_blank' rel="noopener noreferrer">Blog</a>
                    </li>
                    <li className='cursor-pointer' onClick={() => setMenuOpen(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Header;
