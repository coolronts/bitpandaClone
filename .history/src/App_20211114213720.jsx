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
      <div className="flex justify-between px-12" >
        <div className="w-full">
          <MyPortfolio />
        </div>
        <div className="w-1/2 transform motion-safe:hover:scale-110">
          <CreditCard />
        </div>
      </div>
    </div>
  )
}

export default App;