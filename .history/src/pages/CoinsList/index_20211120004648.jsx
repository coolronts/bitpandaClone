import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList().then(res => setCoins(res))
  }, [])

  return (
    <div>
      {/* <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent = {ListCard}
      /> */}
      Hello
    </div>
  )
}

CoinList.propTypes = {

}