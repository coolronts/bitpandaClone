import React from 'react';

export default function TopMovers() {
  const styles = {
    body: "px-24 py-12",
    title: "font-bold"
  }
 
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers</h1>
    </div>
  )
}