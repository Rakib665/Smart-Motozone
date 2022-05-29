import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero  bg-base-200">
                <div class=" text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold text-gray-600">MY PORTFOLIO</h1>
                        <h1 class="text-2xl font-bold text-gray-400">islammdr@gmail.com</h1>
                    </div>
                    <div class="overflow-x-auto mb-2">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th>Educational</th>
                                    <th>Website Link</th>
                                    <th>List of Technologies</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SSC</td>
                                    <td><a href="https://new-motozone.web.app/">Motozone</a></td>
                                    <td>html</td>
                                </tr>
                                <tr class="active">
                                    <td>JSC</td>
                                    <td><a href="Desktop Support Technician">Bd wedding Photographer</a></td>
                                    <td>css</td>
                                </tr>
                                <tr>
                                    <td>HSC</td>
                                    <td><a href="https://ema-john-simple-8a327.web.app/">Ema John</a></td>
                                    <td>Bootstrap</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;