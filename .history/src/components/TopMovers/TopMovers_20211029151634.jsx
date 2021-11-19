import React from 'react';

export default function TopMovers() {
  const styles = {
    body: "px-24 py-12",
    title: "font-bold mb-12",
    cardBody:"shadow-lg bg-white rounded"
  }
 
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers</h1>
      <div className={styles.cardBody}>
        
      </div>
    </div>
  )
}