import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import { ReactDOM } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
