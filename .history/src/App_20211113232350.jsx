import "./App.css";

import CreditCard from "./components/CreditCard/CreditCard";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import NavBar from "./components/Navbar/Navbar";
import TopMovers from "./components/TopMovers/TopMovers";

function App() {
  const styles = {
    app:"bg-gray-100"
  }

  return (
    <div className={styles.app} >
      <NavBar />
      <TopMovers />
      <hr />
      <div className="container mx-auto flex">
        <MyPortfolio className="w-1/2" />
        <CreditCard className="w-1/2"/>
      </div>
    </div>
  )
}

export default App;