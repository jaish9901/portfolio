import React from 'react';
import Footer from '../footer';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Skills from '../Skills';
import Component2 from '../Component2';

const Landingpage = () => {
    return (
        <>
            <div className='h-[900px]'>
<div className='bg-landingPageBg bg-100 bg-no-repeat '>

                {/* <Navbar /> */}
                {/* <Component2/> */}
                <Banner/>
</div>
                <Skills/>
            </div>
            <Footer />
        </>

    );
}
export default Landingpage;