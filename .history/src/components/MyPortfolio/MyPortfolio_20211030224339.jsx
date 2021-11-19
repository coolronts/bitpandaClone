import React from 'react'

export default function MyPortfolio() {
  const styles = {
    body: "shadow-lg bg-white rounded-lg mb-2 mx-8 mt-4 w-1/2 p-4 mr-",
    title:"font-bold"
  }
  return (
    <div className={styles.body}>
      <div className={styles.title}>My Portfolio</div>
    </div>
  )
}