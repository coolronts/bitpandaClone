import "./App.css";

import NavBar from "./components/Navbar/Navbar";

function App() {
  const styles = {
    app:"bg-gray-100"
  }
  return (
    <div className={styles.App} >
      <NavBar/>
    </div>
  )
}

export default App;