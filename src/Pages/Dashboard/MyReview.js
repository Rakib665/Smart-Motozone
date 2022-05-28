import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';


const MyReview = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
        console.log(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        stars: {
            display: "flex",
            flexDirection: "row",
        },
        textarea: {
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            padding: 10,
            margin: "20px 0",
            minHeight: 100,
            width: 300
        },
        button: {
            border: "1px solid #a9a9a9",
            borderRadius: 5,
            width: 300,
            padding: 10,
        }

    };
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"

    };
    // const submit_review = (event) =>{
    //     const description = event.target.textReview.value;
    //     console.log(description)

    // }

    const reviewSubmit = (event) => {
        const review = event.target.textReview.value;
        const rating = currentValue;

        const setReview = {
            rating: rating,
            review: review
        }
        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(setReview)
        })
        .then(res => res.json())
        .then(data => {
            toast('your review submit successfully')
        })

    }

    return (
        <div>
            <h2>My Review</h2>
           <form onSubmit={reviewSubmit} >
           <div style={styles.container}>
                <h2>Ratings </h2>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (

                            <FaStar
                                key={index}
                                size={24}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                            />
                        )
                    })}
                </div>
                <input name='textReview' style={styles.textarea} type="What's your experience" placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs" />


                {/* <button
                    style={styles.button}
                // onClick={submit_review}
                >
                    Submit
                </button> */}
                <input type="submit" value='submit' style={styles.button} />

            </div>
           </form>
        </div>
    );
};

export default MyReview;