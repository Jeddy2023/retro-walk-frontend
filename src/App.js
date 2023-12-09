import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;