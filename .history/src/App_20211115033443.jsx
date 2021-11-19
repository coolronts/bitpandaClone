import "./App.css";

import Home from './pages/Home';
import NavBar from "./components/Navbar";

function App() {
  const styles = {
    app:"bg-gray-100"
  }

  return (
    <div className={styles.app} >
      <NavBar />
      <Home />
    </div>
  )
}

export default App;