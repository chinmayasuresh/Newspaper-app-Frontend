import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './COMPONENTS/Add';
import Delete from './COMPONENTS/Delete';
import View from './COMPONENTS/View';
import Search from './COMPONENTS/Search';
import Home from './COMPONENTS/Home';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/view' element={<View/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
  
  
  
  
  </BrowserRouter>








  );
}

export default App;
