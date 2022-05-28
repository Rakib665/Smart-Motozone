import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './SharedPages/Navbar';
import RequiredAuth from './SharedPages/Required';
import 'react-toastify/dist/ReactToastify.css';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Blogs from './Pages/Blogs/Blogs';
import ManageProducts from './Pages/Dashboard/ManageProducts';


function App() {
  return (
    <div >
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/purchase/:id' element={<RequiredAuth>
        <Purchase></Purchase>
      </RequiredAuth>}></Route>
      <Route path='/dashboard' element={<RequiredAuth>
        <Dashboard></Dashboard>
      </RequiredAuth>}>
        {/* <Route index element={<MyOrders></MyOrders>}></Route> */}
        <Route path='myOrder' element={<MyOrders></MyOrders>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='profile' element={<MyProfile></MyProfile>}></Route>
        <Route path='manageOrder' element={<ManageAllOrders></ManageAllOrders>}></Route>
        <Route path='addProduct' element={<AddAProduct></AddAProduct>}></Route>
        <Route path='manageProduct' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>

      </Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
