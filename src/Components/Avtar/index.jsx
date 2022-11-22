import React from 'react';

const Avtar=({imgUrl})=>{
    return (
        <div className='h-14 w-14 '>
            <img src={imgUrl} alt="" className='rounded-full' />
        </div>
    )   
}

export default Avtar;