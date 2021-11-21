import React, { useEffect, useState } from 'react';

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