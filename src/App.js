import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="">

      <HeaderTop></HeaderTop>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
