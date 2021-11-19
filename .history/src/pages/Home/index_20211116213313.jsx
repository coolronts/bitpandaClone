import {currentPrice, trending} from '../../api'
import { useEffect, useState } from 'react'

import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import { RowList } from '../../components/Lists'
import SplitScreen from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'
import { TopMoversCard } from '../../components/Cards'
import axios from 'axios'

export default function Home() {
  const [trends, setTrends] = useState([])
  
  useEffect(() => {
    trending().then(res => {
      res.map((trend, index) => {
        let detail = {
          logoSrc: trend.item.small,
          name: trend.item.name,
        }
        console.log(trend.item)
        currentPrice(trend.item.id).then(res => {
          detail.price=res[trend.item.id].nok
          console.log(res[trend.item.id].nok)
        })
      })
    })
  }, [])
  
  return (
    <div>
      {/* <TopMovers /> */}
      {/* <RowList
        items={trends}
        resourceName="trend"
        itemComponent = {TopMoversCard}
      /> */}

      <hr />
      <SplitScreen leftWeight={'flex-grow'} rightWeight={'w-1/3'}>
          <MyPortfolio/>
          <CreditCard
            name="Zahid Hossain Ronty"
            number="1234 4567 8901 2345"
            valid="02/23"
          />
      </SplitScreen>
    </div>
  );
}