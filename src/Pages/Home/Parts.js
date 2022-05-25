import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts,setParts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res=>res.json())
        .then(data=> setParts(data))
    },[])
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-2'>
            {
                parts.slice(0,3).map(part => <Part
                key={part._id}
                part={part}
                ></Part>)
            }
        </div>
    );
};

export default Parts;