import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Navbar from './SharedPages/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/purchase' element={<Purchase></Purchase>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </div>
  );
}

export default App;
