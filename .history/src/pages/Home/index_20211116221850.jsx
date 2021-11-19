import {currentPrice, trending, dayChartData} from '../../api'
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
          detail.price=res[trend.item.id].nok.toFixed(2)
          detail.change=res[trend.item.id].nok_24h_change.toFixed(2)
          console.log(res[trend.item.id].nok)
        }).then(
          dayChartData(trend.item.id).then(res => detail.chartData=res)
        )
        .then(setTrends(prevTrends => [...prevTrends, detail]))
        console.log(trends)
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