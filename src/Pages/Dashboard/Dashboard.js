import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
            <h2 className='text-2xl text-center mt-5 font-bold text-gray-500 text-5xl '>Welcome to your Dashboard</h2>

                {/* <!-- Page content here --> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                   {/* {admin || <li><Link to="/dashboard">My Orders</Link></li>} */}
                   {admin || <li className='font-bold text-gray-400'><Link to="/dashboard/myOrder">My Order</Link></li>}
                    {admin || <li className='font-bold text-gray-400'><Link to="/dashboard/review">Add A Review</Link></li>}
                    <li className='font-bold text-gray-400'><Link to="/dashboard/profile">My Profile</Link></li>
                    {admin && <li className='font-bold text-gray-400'><Link to="/dashboard/manageOrder">Manage All Order</Link></li>}
                    {admin && <li className='font-bold text-gray-400'><Link to="/dashboard/addProduct">Add Product</Link></li>}
                    {admin && <li className='font-bold text-gray-400'><Link to="/dashboard/manageProduct">Manage Product</Link></li>}
                    {admin && <li className='font-bold text-gray-400'><Link to="/dashboard/makeAdmin">Make Admin</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;