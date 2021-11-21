import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastElement, setLastElement] = useState(10)
  // const increaseLimit = () => {
  //   console.log("hello")
  //   setLastElement(prev => prev + 10)

  // }

  useEffect(() => {
    getCoinsList().then(res => {
      setCoins(res.slice(0, lastElement))
      setLastElement(prev => prev + 10)
      setLoading(false)
    })
  }, [lastElement])

  return (
    <div>

      {!loading && 
        <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent={ListCard}
        lastElement={lastElement}
        // increaseLimit = {increaseLimit}
      />
      }
    </div>
  )
}

CoinList.propTypes = {

}