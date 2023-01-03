import * as React from 'react';
import {FaBars } from "react-icons/fa"

const Navbar = () => {
    return (
        <div className='flex text p-3 '>
            <div className='w-1/4 text-3xl font-bold text-left px-2'>
                <span className='text-veryLightGrey'>&#123;</span>
                <span>J</span>
                <span className='text-veryLightGrey'>&#125;</span>
            </div>
            <div className='w-3/4 '>

                <ul className='hidden lg:flex lg:flex-row-reverse justify-content items-center'>
                    <li className='p-2 mx-4  hover:bg-white hover:bg-opacity-20 rounded-sm'>Home</li>
                    <li className='p-2  mx-4  hover:bg-white hover:bg-opacity-20 rounded-sm'>Home</li>
                    <li className='p-2 mx-4  hover:bg-white hover:bg-opacity-20 rounded-sm'>Home</li>
                </ul>
                <div className='lg:hidden flex flex-row-reverse'>
                    <span >
                    <FaBars/>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Navbar;