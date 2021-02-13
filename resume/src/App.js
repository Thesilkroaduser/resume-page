import React from 'react';
import AOS from 'aos';
import Menu from './components/menu/menu';
import Main from './components/main/main';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Skills from './components/skills/skills';
import Contacts from './components/contacts/contacts';
AOS.init();

function App() { 
  return (
    <div className="App">
      <header className="header-wrapper">
        <Menu />
      </header>
      <main className="main-wrapper">
        <Main />
        <About />
        <Experience />
        <Skills />
      </main>
      <footer className="footer-wrapper">
        <Contacts />
      </footer>
    </div>
  );
}

export default App;
