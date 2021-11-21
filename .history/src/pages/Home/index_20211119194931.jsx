import { ChartData, currentPrice, trending } from '../../api'
import { useEffect, useState } from 'react'

import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import React from 'react'
import { RowList } from '../../components/Lists'
import SplitScreen from '../../components/SplitScreen'
import { TopMoversCard } from '../../components/Cards'

export default function Home() {
  const [trends, setTrends] = useState([])
  
  useEffect(() => {
    trending().then(res => {
      res.map((trend) => {
        let detail = {logoSrc: trend.item.small,name: trend.item.name}
        currentPrice(trend.item.id).then(res => {
          detail.price=res[trend.item.id].nok.toFixed(2)
          detail.change = res[trend.item.id].nok_24h_change.toFixed(2)
          detail.id = trend.item.id
        })
        .then(ChartData(trend.item.id,1).then(res => {
          detail.chartData = res.prices
          setTrends(prevTrends => [...prevTrends, detail])
        }))
      })
    })
  }, [])

  
  return (
    <div>
      <RowList
        items={trends}
        resourceName="trend"
        itemComponent = {TopMoversCard}
      />

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