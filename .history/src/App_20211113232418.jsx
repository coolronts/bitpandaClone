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
      <div className="container  flex">
        <MyPortfolio className="w-1/3" />
        <CreditCard className="w-full"/>
      </div>
    </div>
  )
}

export default App;