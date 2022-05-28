import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts,setParts] = useState([])
    useEffect(()=>{
        fetch('https://rocky-bayou-52722.herokuapp.com/parts')
        .then(res=>res.json())
        .then(data=> setParts(data))
    },[])
    return (
        <div>
           <div className='p-3 mt-3'>
           <h2 className='uppercase text-3xl text-center font-bold text-gray-600' >Available for sell</h2>
            <h2 className='uppercase text-xl text-center font-bold text-gray-400' >Don't late to buy</h2>
           </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-2 p-6'>
            {
                parts.slice(0,3).map(part => <Part
                key={part._id}
                part={part}
                ></Part>)
            }
        </div>
        </div>
    );
};

export default Parts;