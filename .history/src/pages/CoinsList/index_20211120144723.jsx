import React, { useEffect, useRef, useState } from 'react';

import { ColumnList } from '../../components/Lists'
import {ListCard} from '../../components/Cards'
import { getCoinsList } from '../../api'

export default function CoinList() {
  const [coins, setCoins] = useState([])
  const observer = useRef()

  useEffect(() => {
    getCoinsList().then(res => setCoins(res))
  }, [])

  return (
    <div>
      <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent={ListCard}
        lastElement={10}
      />
      Hello
    </div>
  )
}

CoinList.propTypes = {

}