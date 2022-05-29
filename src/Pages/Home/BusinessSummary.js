
import React from 'react';

const BusinessSummary = () => {
    return (
        // 
        <div class="stats stats-vertical lg:stats-horizontal shadow p-8 text-center flex justify-center">

            <div class="stat">
                <div class="stat-title">Countries</div>
                <div class="stat-value">100+</div>
                <div class="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div class="stat">
                <div class="stat-title">Happy Clients</div>
                <div class="stat-value">10K</div>
                <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
                <div class="stat-title">New Client</div>
                <div class="stat-value">3K</div>
                <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>

        </div>
    );
};

export default BusinessSummary;