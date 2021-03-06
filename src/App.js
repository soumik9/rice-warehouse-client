import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import RequiredAuth from './pages/Auth/RequiredAuth/RequiredAuth';
import Reset from './pages/Auth/Reset/Reset';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import AddItem from './pages/Inventory/AddItem/AddItem';
import InventoryAll from './pages/Inventory/AllItems/InventoryAll';
import MyItems from './pages/Inventory/MyItems/MyItems';
import InventorySingle from './pages/Inventory/SingleItem/InventorySingle';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import HeaderTop from './pages/Shared/HeaderTop/HeaderTop';

function App() {
  return (
    <div className="">

      <HeaderTop></HeaderTop>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        {/* Required auth routes */}
        <Route path='/inventory' element={
          <RequiredAuth>
            <InventoryAll></InventoryAll>
          </RequiredAuth>
        }></Route>

        <Route path='/inventory/:productId' element={
          <RequiredAuth>
            <InventorySingle></InventorySingle>
          </RequiredAuth>
        }></Route>

        <Route path='/add-product' element={
          <RequiredAuth>
            <AddItem></AddItem>
          </RequiredAuth>
        }></Route>

        <Route path='/my-products' element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        {/* Required auth routes */}

        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset-password' element={<Reset></Reset>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
