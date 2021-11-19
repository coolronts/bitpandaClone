import React from 'react';
import TopMoversCard from './TopMoversCard/TopMoversCard';

export default function TopMovers() {
  const styles = {
    body: "px-24 py-12 h-full",
    title: "font-bold mb-4",
    cards:"flex flex-wrap"
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
      <div className={styles.cards}>
        <TopMoversCard />
        <TopMoversCard />
        <TopMoversCard />
        <TopMoversCard/>
      </div>      
    </div>
  )
}