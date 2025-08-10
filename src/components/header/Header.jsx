import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center px-8 py-4 shadow bg-gray-900 text-white'>
            <img src={'/logo.svg'} alt="" className='cursor-pointer' />
            <ul className='flex gap-4' >
                <li className='cursor-pointer'><a href="#projects">Works</a></li>
                <li className='cursor-pointer'><a href="">Blog</a></li>
                <li className='cursor-pointer'><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Header
