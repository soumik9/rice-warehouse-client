import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
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
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
