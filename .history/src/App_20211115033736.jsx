import "./App.css";

import CoinPage from "./components/CoinPage";
import Home from './pages/Home';
import NavBar from "./components/Navbar";

function App() {
  const styles = {
    app:"bg-gray-100"
  }

  return (
    <div className={styles.app} >
      <NavBar />
      <CoinPage />
    </div>
  )
}

export default App;