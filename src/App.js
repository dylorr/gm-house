import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import Social from './components/SocialComponent';
import React from 'react';
import Footer from './components/FooterComponent';



function App() {
  return (
    <div className='App container'>
      <div>
        <Main />
        <Social/>
      </div>
    <Footer />
    </div>
  );
}

export default App;
