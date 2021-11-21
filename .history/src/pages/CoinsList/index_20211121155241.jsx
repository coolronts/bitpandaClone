import React, { useEffect, useState } from 'react';

import Tables from '../../components/Tables'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const styles = {
    dayPick: "flex mt-6",
    dayOption: "text-green-900 px-2 py-1 text-xs font-bold mr-3 rounded-md shadow-2xl hover:shadow-none cursor-pointer",
  }
  const [dayChart, setDayChart] = useState(1);
  const [coins, setCoins] = useState([])
  const [lastElement, setLastElement] = useState(10)
  const increaseLimit = () => {
    setLastElement(prev => prev + 10)
  }

  useEffect(() => {
    getCoinsList().then(res => {
      setCoins(res.slice(0, lastElement))
    })
  }, [lastElement])

  return (
    <div>
      <div className={styles.dayPick}>
          <p onClick={()=>setDayChart(1)}  className={`${styles.dayOption} ${dayChart==1 ? "bg-green-400" : ""}`}>1D</p>
          <p onClick={()=>setDayChart(7)} className={`${styles.dayOption} ${dayChart==7 ? "bg-green-400" : ""}`}>7D</p>
          <p onClick={()=>setDayChart(30)} className={`${styles.dayOption} ${dayChart==30 ? "bg-green-400" : ""}`}>30D</p>
          <p onClick={()=>setDayChart(365)} className={`${styles.dayOption} ${dayChart==365 ? "bg-green-400" : ""}`}>1Y</p>
      </div>
      <Tables
        headings={['Name', 'Price', 'Market Cap', 'Change', 'Price Chart','']}
        items={coins}
        resourceName="coin"
        lastElement={10}
        increaseLimit={increaseLimit}
      />
    </div>
  )
}
