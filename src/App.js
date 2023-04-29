import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import { ReactDOM } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import CreatePin from './components/createpin/createpin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/createpin' element={<CreatePin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
