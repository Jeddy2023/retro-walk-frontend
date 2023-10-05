import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav bar/Nav';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/nav' element={<Nav/>}></Route>
        <Route path='/footer' element={<Footer/>}></Route>
     </Routes>
    </>
  );
}

export default App;
