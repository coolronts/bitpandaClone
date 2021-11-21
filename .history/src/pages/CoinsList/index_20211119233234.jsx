import React, { useEffect, useState } from 'react';

import { RowList } from '../../components/Lists'
import {getCoinsList} from '../../api'

export function CoinList() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList().then(res => {
      setCoins(res)
    })
  }, [])

  return (
    <div>
      {coins}
    </div>
  )
}

CoinList.propTypes = {

}