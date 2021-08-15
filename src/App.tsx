import React, { useState } from 'react';
import './App.css';

import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export const ModalContext = React.createContext(false);
export const ModalUpdateContext = React.createContext(() => {});

function App() {

  const [modalActive, setModalActive] = useState<boolean>(false);

  const toggleModal = () => {
    setModalActive(modalActive => !modalActive);
  }

  return (
    <div className="App">
      <ModalContext.Provider value={modalActive}>
        <ModalUpdateContext.Provider value={toggleModal}>
          <Header />
          <Projects />
          <About />
          <Footer />
          <Contact />
        </ModalUpdateContext.Provider>
      </ModalContext.Provider>
    </div>
  );
}

export default App;
