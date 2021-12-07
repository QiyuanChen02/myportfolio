import React, { useState } from 'react';
import './App.css';

import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

import ModalProvider from "./ModalContext";

const ModalContext = React.createContext(false);
const ModalUpdateContext = React.createContext(() => {});

function App() {

  return (
    <div className="App">
      <ModalProvider>
        <Header />
        <Projects />
        <About />
        <Footer />
        <Contact />
      </ModalProvider>
    </div>
  );
}

export default App;
