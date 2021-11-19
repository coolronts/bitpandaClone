import "./App.css";

import NavBar from "./components/Navbar/Navbar";
import TopMovers from "./components/TopMovers/TopMovers";

function App() {
  const styles = {
    app:"bg-gray-100 h-screen"
  }
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
  );

  return (
    <div className={styles.app} >
      <NavBar />
      <TopMovers />
      <hr className="h-1"/>
    </div>
  )
}

export default App;