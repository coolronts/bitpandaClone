import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  // const observer = useRef()

  useEffect(() => {
    getCoinsList().then(res => {
      setCoins(res.slice(0, 10))
      setLoading(false)
    })
  }, [])

  return (
    <div>

      {!loading && 
        <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent={ListCard}
        lastElement={10}
      />
      }
    </div>
  )
}

CoinList.propTypes = {

}