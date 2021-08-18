import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'
import Routes from './components/Routes'
import './App.css';
import Footer from './components/Footer/Footer'
import { useMediaQuery } from 'react-responsive'

function App() {

  const noFooter = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <div className="App">
      <BrowserRouter>
        <div className="Container">
          <NavBar />
          <div className="content-wrap">
            <Route path='/' component={Routes} />
          </div>
          {noFooter && window.location.pathname === 'cart' ? <Footer /> : <></>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
