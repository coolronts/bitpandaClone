import "./App.css";

import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import NavBar from "./components/Navbar/Navbar";
import TopMovers from "./components/TopMovers/TopMovers";

function App() {
  const styles = {
    app:"bg-gray-100 h-screen"
  }

  return (
    <div className={styles.app} >
      <NavBar />
      <TopMovers />
      <hr />
      
    </div>
  )
}

export default App;