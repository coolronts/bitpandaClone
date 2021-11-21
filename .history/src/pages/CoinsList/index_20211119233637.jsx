import React, { useEffect } from 'react';

import {getCoinsList} from '../../api'

// import { ColumnList } from '../../components/Lists'


export default function CoinList() {
  //const [coins, setCoins] = useState([])
  useEffect(() => {
    getCoinsList('name_desc').then(res => {
      console.log(res)
      // setCoins(res)
    })
  }, [])

  return (
    <div>
      Hello
    </div>
  )
}

CoinList.propTypes = {

}