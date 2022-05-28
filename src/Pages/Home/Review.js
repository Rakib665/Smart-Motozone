import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";


const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://rocky-bayou-52722.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
   
    const firstExample = {
        size: 30,
       
        edit: false
    };
    return (

        // <div>
        //     <h2>Review page</h2>
            
        // </div>
        <div className='grid lg:grid-cols-3 gap-2 p-5'>
            {
                review.map(r =>  <div class="card w-96 bg-gray-400	 text-neutral-content">
                <div class="card-body items-center text-center">
                <ReactStars {...firstExample} value={r.rating} />
                    <p className='text-white'>{r.review}</p>
                   
                </div>
            </div>)
            }
           
        </div>
    );
};

export default Review;