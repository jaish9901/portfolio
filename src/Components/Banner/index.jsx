import * as React from 'react';
import patternBg from "../../images/patternBg.png"
const Banner=()=>{
    return (
        <div className=''>
            <img src={patternBg} alt=""  className='h-32 w-32 fill-veryLightGrey'/>
            <span className='m-32 absolute top-10 left-0'>
                <span className='text-themeGreen'>Hey there!, I'm-</span>
            </span>
        </div>        
    )
}

export default Banner;