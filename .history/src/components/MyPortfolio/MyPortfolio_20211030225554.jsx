import { Line } from 'react-chartjs-2';
import React from 'react'

export default function MyPortfolio() {
  const styles = {
    body: "shadow-lg bg-white rounded-lg mb-2 mx-8 mt-4 w-1/2 p-8",
    title: "font-bold",
    deposit: "text-6xl font-bold my-4",
    change:"font-bold"
  }
  const dataValue = ['14:00', '20:00', '30:00','8:00']

  const data = {
  labels: dataValue,
  datasets: [
    {
      label: "-10 to 100",
      data: [0.6,0.6,0.6,0.6,0.6,0.6],
      fill: false,
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1 
    },
  ],
};

  const options = {
    aspectRatio: 4,
    responsive: true,
    elements: {
      point:{radius: 1}
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip:{enabled: true},
    },
    scales: {
      legend: { display: true },
    
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
      <div className={styles.title}>My Portfolio</div>
      <div className={styles.deposit}>$1200</div>
      <div className={styles.change}> -2.45% (24h)</div>
      <Line data={data} options={options} />
    </div>
  )
}