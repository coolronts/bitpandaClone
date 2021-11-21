import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList('name_desc').then(res => {
      console.log(res.data)
      setCoins(res)
    })
  }, [])

  return (
    <div>
      {/* <ColumnList
        items={coins}
        resourceName="coin"
        itemComponent = {ListCard}
      /> */}
      Hello
    </div>
  )
}

CoinList.propTypes = {

}