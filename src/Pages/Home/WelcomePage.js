import React from 'react';

const WelcomePage = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/S3VvL1P/welcome.jpg" class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 class="text-5xl text-gray-600 font-bold">Welcome Who we are!</h1>
                    <p class="py-6  ">We will Get You the Best Vehicle Parts Within Your Budgets. Call Now & Save More. Free Delivery! Open 24 hours, get in your dream car whenever you need it. ‎Rent Lamborghini Dubai. Rent Luxury Cars Dubai.</p>
                    <button class="btn btn-secondary bg-gray-300">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;