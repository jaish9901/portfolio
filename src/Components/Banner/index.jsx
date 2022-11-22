import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import profileImg from '../../images/myPic.jpg'
import cropImg from '../../images/cropImg.png'
const Banner = () => {
    return (
        <>
            <div className='  text-white '>
                <div className=' flex p-28 '>
                    {/* <div className=' px-10'> */}
                        {/* // picture portion */}
                        {/* <img src={profileImg} alt="" className='h-[490px] w-[450px] rounded-full object-cover' /> */}

                    {/* </div> */}
                    <div>
                        {/* Hello portion in white */}
                        {/* <div className=' overflow-hidden text-opacityHeading font-bold text-slate-200 opacity-[0.15] hidden lg:block absolute -right-10 -top-10'>
                            Hello
                        </div> */}
                    </div>
                    <div className='text-left pl-8 pt-36 bg-white '>
                        {/* content  */}
                        <span className='m-2 p-2 from-themeColor rounded bg-gradient-to-r to-gradientColor '>
                            Welcome to my Portfolio
                        </span>
                        <p className='m-2 text-3xl text-black '>
                            Every person has their own unique profile. <br />
                            Here is a glimpse to mine.I'm a Full-stack Developer from Agra, <br />
                            Uttar Pradesh. <br />
                            I aim to make a difference through my creative solution.
                        </p>
                        <ul className='flex m-2 '>
                            <li className='text-3xl p-2 m-2 rounded-full  bg-blue-600  cursor-pointer'><FaFacebook /></li>
                            <li className='text-3xl p-2 m-2 rounded-full bg-blue-500  cursor-pointer'><FaLinkedinIn /></li>
                            <li className='text-3xl p-2 m-2 rounded-full  text-black bg-white   cursor-pointer'><AiFillGithub /></li>
                            <li className='text-3xl p-2 m-2 rounded-full  text-rose-600 bg-white  cursor-pointer'><GrMail /></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Banner;