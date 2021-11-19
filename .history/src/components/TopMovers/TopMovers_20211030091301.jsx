import { Line } from 'react-chartjs-2';
import React from 'react';

export default function TopMovers() {
  const styles = {
    body: "px-24 py-12 h-full",
    title: "font-bold mb-12",
    cardBody: "shadow-lg bg-white rounded w-1/4 px-4 py-2",
    cardTitle: "font-semibold mb-12 flex text-sm",
    logo: "w-6 mr-3",
    chart:""
  }
  const dataValue = [56, 19, 3, 5, 2, 3,34]
  const data = {
  labels: dataValue,
  datasets: [
    {
      data: dataValue,
      fill: false,
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1 
    },
  ],
};

  const options = {
    aspectRatio: 1;
    responsive: true,
    elements: {
      point:{radius: 0}
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip:{enabled: false},
    },
    scales: {
      legend: { display: false },
      x: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
     },
      y: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
      }
    }
  };
 
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <img className={styles.logo} alt="logo" src="data:image/png;base64,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"/>
          BitCoin
          
        </div>
        <div className={styles.chart}>
            <Line data={data} options={options} />
        </div>
          
        
      </div>
    </div>
  )
}