import "./App.css";

import CoinPage from "./pages/CoinPage";
import Home from './pages/Home';
import NavBar from "./components/Navbar";

function App() {
  const styles = {
    app:"bg-gray-100"
  }

  return (
    <div className={styles.app} >
      <NavBar />
      {/* <Home/> */}
      <CoinPage coinId="bitcoin" />
    </div>
  )
}

export default App;