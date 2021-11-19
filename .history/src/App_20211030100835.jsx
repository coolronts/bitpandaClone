import "./App.css";

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
      <br/>
    </div>
  )
}

export default App;