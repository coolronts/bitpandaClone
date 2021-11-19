import React from 'react'

export default function MyPortfolio() {
  const styles = {
    body: "shadow-lg bg-white rounded-lg mb-2 mx-8 mt-4 w-1/2 p-8",
    title: "font-bold",
    deposit:"text-6xl font-bold my-4"
  }
  return (
    <div className={styles.body}>
      <div className={styles.title}>My Portfolio</div>
      <div className={styles.deposit}>$1200</div>
    </div>
  )
}