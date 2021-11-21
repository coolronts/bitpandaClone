import React, { useEffect, useRef, useState } from 'react';

import InfiniteIntersection from 'react-infinite-intersection';
import { getCoinsList } from '../../api'

// import { ColumnList } from '../../components/Lists'
// import {ListCard} from '../../components/Cards'


export default function CoinList() {
  // const [coins, setCoins] = useState([])
  const [sliceUpperLimit, setSliceUpperLimit] = useState(10)

  const observer = useRef(new IntersectionObserver((entries) => {
    const first = entries[0]
    if (first.isIntersecting) {
      loadNumber += 10
      setSliceUpperLimit(sliceUpperLimit+loadNumber)
    }
  }, { threshold: 1 }))
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