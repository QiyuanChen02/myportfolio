import React, { useState } from 'react';
import './App.css';

import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {

  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div className="App">
      <Header setModalActive={setModalActive}/>
      <Projects />
      <About />
      <Footer setModalActive={setModalActive}/>
      <Contact modalActive={modalActive} setModalActive={setModalActive}/>
    </div>
  );
}

export default App;
