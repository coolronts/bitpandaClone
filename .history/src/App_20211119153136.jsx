import "./App.css";

import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";

import CoinPage from "./pages/CoinPage";
import Home from './pages/Home';
import NavBar from "./components/Navbar";
import React from "react";

function App() {
  const styles = {
    app:"bg-gray-100"
  }

  return (
    <div className={styles.app} >
      <NavBar />
      <div className="mx-48">
        <Router>
          <Home/>
          <CoinPage />
        </Router>
      </div>  
    </div>
  )
}

export default App;