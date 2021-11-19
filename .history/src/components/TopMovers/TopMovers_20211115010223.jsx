import React, {useEffect, useState} from 'react';

import TopMoversCard from './TopMoversCard/TopMoversCard';
import axios from 'axios'

export default function TopMovers() {
  const [trends, setTrends] = useState([])
  const styles = {
    body: "px-12 bg-red-300 text-center py-12 ",
    title: "font-bold mb-4",
    cards:"flex w-full"
  }
  useEffect(() => {
    axios.get('search/trending')
    .then(response =>setTrends(response.data.coins.slice(0,4)))
  })
  
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
      <div className={styles.cards}>
        {trends.map((item) => <TopMoversCard detail={item.item} key={item.item.id} />) }
      </div>      
    </div>
  )
}