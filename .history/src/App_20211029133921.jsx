import "./App.css";

import NavBar from "./components/Navbar/Navbar";

function App() {
  const styles = {
    app:"bg-gray-100 px-12 h-screen"
  }
  return (
    <div className={styles.app} >
      <NavBar/>
    </div>
  )
}

export default App;