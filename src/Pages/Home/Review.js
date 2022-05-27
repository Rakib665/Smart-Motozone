import React from 'react';
import ReactStars from "react-rating-stars-component";
const firstExample = {
    size: 30,
    value: 2.5,
    edit: false
  };

const Review = () => {
    return (
        <div>
            <h2>Review page</h2>
            <ReactStars {...firstExample} />
        </div>
    );
};

export default Review;