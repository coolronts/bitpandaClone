import React, { useEffect, } from 'react';

import { getCoinsList } from '../../api'

// import { ColumnList } from '../../components/Lists'
// import {ListCard} from '../../components/Cards'


export default function CoinList() {
  // const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList('name_desc').then(res => {
      console.log(res.data)
      console.log(typeof res.data)
      //setCoins(res)
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