import React, { useEffect, useState } from 'react';

import Tables from '../../components/Tables'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  const [lastElement, setLastElement] = useState(10)
  const increaseLimit = () => {
    setLastElement(prev => prev + 10)
  }

  useEffect(() => {
    getCoinsList().then(res => {
      setCoins(res.slice(0, lastElement))
    }).then(()=>console.log(coins))
  }, [lastElement])

  return (
    <div>
      <div className="flex">
        <p>1day</p>
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
