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
    axios.get('search/trending')
    .then(response =>setTrends(response.data.coins))
  })
  
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
      <div className={styles.cards}>
        {trends.map((item) => <TopMoversCard detail={item.item} key={item.id} />)}
        
    
      </div>      
    </div>
  )
}