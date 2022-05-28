import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
            <h2 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h2>

                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    <li><Link to="/dashboard/manageOrder">Manage All Order</Link></li>
                    <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                    <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;