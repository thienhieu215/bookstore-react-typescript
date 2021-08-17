import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'
import Routes from './components/Routes'
import './App.css';
import SearchBar from './components/SearcBar/SearchBar';
import Footer from './components/Footer/Footer'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="Container">
        <NavBar />
        <div className="content-wrap">
        <Route path='/' component={Routes} />
        </div>
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
