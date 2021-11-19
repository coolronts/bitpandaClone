import { Line } from 'react-chartjs-2';
import React from 'react'

export default function MyPortfolio() {
  const styles = {
    body: "shadow-lg bg-white rounded-lg mb-2 mx-8 mt-4 w-1/2 p-8",
    title: "font-bold",
    deposit: "text-6xl font-bold my-4",
    change:"font-bold"
  }
  return (
    <div className={styles.body}>
      <div className={styles.title}>My Portfolio</div>
      <div className={styles.deposit}>$1200</div>
      <div className={styles.change}> -2.45% (24h)</div>
    </div>
  )
}