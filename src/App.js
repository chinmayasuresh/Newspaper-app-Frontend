import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './COMPONENTS/Add';
import Delete from './COMPONENTS/Delete';
import View from './COMPONENTS/View';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<View/>}/>
    <Route path='/' element={<Delete/>}/>
  </Routes>
  
  
  
  
  </BrowserRouter>








  );
}

export default App;
