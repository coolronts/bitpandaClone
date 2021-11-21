import React, { useEffect, useRef, useState } from 'react';

import { getCoinsList } from '../../api'

// import { ColumnList } from '../../components/Lists'
// import {ListCard} from '../../components/Cards'


export default function CoinList() {
  const initialLoadNumber = 10;
  var loadNumber = 0;
  const [coins, setCoins] = useState([])
  const [element, setElement] = useState(null)
  const [sliceUpperLimit, setSliceUpperLimit] = useState(initialLoadNumber)

  const observer = useRef(new IntersectionObserver((entries) => {
    const first = entries[0]
    if (first.isIntersecting) {
      loadNumber += 10
      setSliceUpperLimit(sliceUpperLimit+loadNumber)
    }
  }, { threshold: 1 }))

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    getCoinsList(sliceUpperLimit).then(res => setCoins(res) )
    if (currentElement) {currentObserver.observe(currentElement)}
    
    return () => {
      if (currentElement) {currentObserver.unobserve(currentElement)}
    }
  }, [element]);

  useEffect(() => {
    
  }, [])

  return (
    <div>
      {/* <ColumnList
        colItems={coins}
        resourceName="coin"
        itemComponent = {ListCard}
      /> */}
      Hello
      {((index + 1) % initialLoadNumber === 0) && <div ref={setElement}/>}
    </div>
  )
}

CoinList.propTypes = {

}