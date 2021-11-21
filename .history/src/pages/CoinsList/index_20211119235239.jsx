import React, { useEffect, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList('name_desc').then(res => {
      console.log(res.data)
      console.log(typeof (res.data))
      // res.data.map(res =>console.log(res))
      setCoins(res.data)
    })
  }, [])

  return (
    <div>
      <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent = {<ListCard/>}
      />
      Hello
    </div>
  )
}

CoinList.propTypes = {

}