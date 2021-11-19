import React, {useEffect, useState} from 'react';

import TopMoversCard from './TopMoversCard/TopMoversCard';
import axios from 'axios'

export default function TopMovers() {
  const [trends, setTrends] = useState([])
  const styles = {
    body: "px-8 py-12 ",
    title: "font-bold mb-4",
    cards:"flex w-full"
  }
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/search/trending')
    .then(response =>console.log(response.data.coins[0].id))
  })
  
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
      <div className={styles.cards}>
        {trends.map((item) => <TopMoversCard name={item.name} />)}
        
    
      </div>      
    </div>
  )
}