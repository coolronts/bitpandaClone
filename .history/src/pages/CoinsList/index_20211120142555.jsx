import React, { useEffect, } from 'react';

import { getCoinsList } from '../../api'

// import { ColumnList } from '../../components/Lists'
// import {ListCard} from '../../components/Cards'


export default function CoinList() {
  // const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList().then(res => console.log(res))
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