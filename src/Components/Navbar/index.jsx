import React from 'react';
import Avtar from '../Avtar';
import Logo from '../logo';
import avtarLogo from "../../images/3551739.jpg"

const Navbar = () => {
    return (
        <div className='bg-black text-white bg-opacity-30 flex px-4 sticky top-0'>
            <div className='p-4 flex ml-2 '>
                <Avtar imgUrl={avtarLogo} />
                <Logo  />
            </div>
            <div className='p-4'>
                <ul className='flex mx-32'>
                    <li className='px-4 py-2 m-1'>Home</li>
                    <li className='px-4 py-2 m-1'>Skills</li>
                    <li className='px-4 py-2 m-1'>Projects</li>
                    <li className='px-4 py-2 m-1'>About Me</li>
                    <li className='px-4 py-2 m-1'>Skills</li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar;