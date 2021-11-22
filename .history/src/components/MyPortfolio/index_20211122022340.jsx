import { Line } from 'react-chartjs-2';
import React from 'react'
import Chart from '../Chart'

export default function MyPortfolio() {
  const styles = {
    body: "shadow-lg bg-white rounded-lg mb-2 mx-8 mt-4  p-8",
    title: "font-bold",
    deposit: "text-6xl font-bold my-4",
    change:"font-bold"
  }
  const data: [0.6,0.6,0.6,0.6,0.6,0.6],
  const dataValue = ['14:00', '20:00', '30:00','8:00']

  
  return (
    <div className={styles.body}>
      <div className={styles.title}>My Portfolio</div>
      <div className={styles.deposit}>$1200</div>
      <div className={styles.change}> -2.45% (24h)</div>
      <Line data={data} options={options} />
    </div>
  )
}