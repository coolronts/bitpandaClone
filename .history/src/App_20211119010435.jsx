import "./App.css";

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
      <div className="container mx-24">
        <Home/>
        <CoinPage />
      </div>  
    </div>
  )
}

export default App;