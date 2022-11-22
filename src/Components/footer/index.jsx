import React from 'react';
import {FaFacebook,FaLinkedinIn} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import {GrMail} from "react-icons/gr"
import Logo from '../logo';
import { Button, TextField } from '@mui/material';

const Footer = ()=>{
    return (
        <div className='  bg-darkBg text-white w-full md:flex'>
            <div className='md:w-1/2 md:float-left  m-2 '>
                <div className='p-4 m-4'>
                <Logo/>
                </div>
                <div className='m-2 p-2  '>
                Discuss A Project Or Just Want To Say Hi? My Inbox Is Open For All.
                </div>
                <div className=''>

                <TextField className='bg-white rounded  m-2' id='outlined-basic' label='Send me a message.' variant='filled' color='secondary' />
                <Button className='!m-3' variant="outlined" color='secondary'>Send</Button>
                </div>
            </div>
            <div className='md:w-1/2 md:float-right md:  m-2 '>
                <ul className='flex m-6 justify-center'>
                    <li className='text-3xl p-2 m-2 rounded-full  text-black bg-white hover:bg-themeColor hover:text-white  cursor-pointer'><FaFacebook/></li>
                    <li className='text-3xl p-2 m-2 rounded-full text-black bg-white  hover:bg-themeColor  hover:text-white cursor-pointer'><FaLinkedinIn/></li>
                    <li className='text-3xl p-2 m-2 rounded-full  text-black bg-white  hover:bg-themeColor hover:text-white cursor-pointer'><AiFillGithub/></li>
                    <li className='text-3xl p-2 m-2 rounded-full  text-black bg-white  hover:bg-themeColor hover:text-white  cursor-pointer'><GrMail/></li>
                </ul>
                <div className='p-2'>abcd</div>
                <div className='m-2 '>Copyright 2022. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer;