import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Banner from "./components/Banner"
import Projects from "./components/Projects"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Banner />
      <Projects />



      </div>
    </Router>
  );
}

export default App;
