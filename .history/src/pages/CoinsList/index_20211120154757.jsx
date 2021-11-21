import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastElement, setLastElement] = useState(10)
  const increaseLimit = () => {
    setLastElement(prev => prev + 10)
    fetchList()

  }

  function fetchList(){
    getCoinsList().then(res => {
      setCoins(res.slice(0, lastElement))
      setLoading(false)
    })
  }
  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div>

      {!loading && 
        <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent={ListCard}
        lastElement={lastElement}
        increaseLimit = {increaseLimit}
      />
      }
    </div>
  )
}

CoinList.propTypes = {

}