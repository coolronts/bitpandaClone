import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  const [lastElement, setLastElement] = useState(10)
  const increaseLimit = () => {
    setLastElement(prev => prev + 10)
  }

  useEffect(() => {
    console.log(lastElement, "num")
    getCoinsList().then(res => {
      setCoins(res.slice(0, lastElement))
    })
  }, [lastElement])

  return (
    <div>
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