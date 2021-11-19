import "./App.css";

import { Line } from 'react-chartjs-2';
import NavBar from "./components/Navbar/Navbar";
import TopMovers from "./components/TopMovers/TopMovers";

function App() {
  const styles = {
    app:"bg-gray-100 h-screen"
  }

  
  const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
 
  return (
    <div className={styles.app} >
      <NavBar />
      <TopMovers />
        <Line data={data} options={options} />
    </div>
  )
}

export default App;