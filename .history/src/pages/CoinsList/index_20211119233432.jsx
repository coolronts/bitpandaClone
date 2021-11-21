import React, { useEffect, useState } from 'react';

import {getCoinsList} from '../../api'

// import { ColumnList } from '../../components/Lists'


export default function CoinList() {
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