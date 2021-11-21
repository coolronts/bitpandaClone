import "./App.css";

import { Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/coin">
            <CoinPage />
          </Route>
        </Switch>
      </div>  
    </div>
  )
}

export default App;