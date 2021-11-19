import React from 'react';
import TopMoversCard from './TopMoversCard/TopMoversCard';

export default function TopMovers() {
  const index = [1,2,3]
  const styles = {
    body: "px-8 py-12 ",
    title: "font-bold mb-4",
    cards:"flex w-full"
  }
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
      <div className={styles.cards}>
        {index.map((item) => <TopMoversCard key={item}/>)}
        
    
      </div>      
    </div>
  )
}