import React, { useEffect, useState } from 'react';

import {getCoinsList} from '../../api'

export function coinList() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList().then(res => {
      setCoins(res)
    })
  }, [])

  return (
    <div>

    </div>
  )
}