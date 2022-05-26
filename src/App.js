import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './SharedPages/Navbar';
import RequiredAuth from './SharedPages/Required';

function App() {
  return (
    <div >
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/purchase/:id' element={<RequiredAuth>
        <Purchase></Purchase>
      </RequiredAuth>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
    </div>
  );
}

export default App;
