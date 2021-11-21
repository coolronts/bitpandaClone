import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import { ListCard } from '../../components/Cards'
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
      <Tables/>
      <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent={ListCard}
        lastElement={lastElement}
        increaseLimit={increaseLimit}
      />
    </div>
  )
}

CoinList.propTypes = {

}