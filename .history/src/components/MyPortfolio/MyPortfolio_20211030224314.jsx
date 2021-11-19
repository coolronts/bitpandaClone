import React from 'react'

export default function MyPortfolio() {
  const styles = {
    body: "shadow-lg bg-white rounded-lg mb-2 mx-8 mt-4 w-1/2 px-2 mr-2 py-4",
    title:"font-bold"
  }
  return (
    <div className={styles.body}>
      <div className={styles.title}>My Portfolio</div>
    </div>
  )
}