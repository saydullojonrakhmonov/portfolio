import React from 'react'

function Header() {
    return (
        <div className='flex justify-between items-center px-8 py-4 shadow bg-stone-300'>
            <img src={'/logo.svg'} alt="" />
            <ul className='flex gap-4' >
                <li className='cursor-pointer'>Works</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
        </div>
    )
}

export default Header
