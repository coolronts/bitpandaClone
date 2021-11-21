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
      <Router>
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
      </Router>
    </div>
  )
}

export default App;