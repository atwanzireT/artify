import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import { ReactDOM } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home';
import CreatePin from './components/createpin/createpin';
import { StoreProvider } from './context/store';
import Login from './components/welcome/login';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/createpin' element={<CreatePin />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
