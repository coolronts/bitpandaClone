import { useEffect, useState } from 'react'

import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import SplitScreen from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'
import axios from 'axios'

export default function Home() {
  const [trends,setTrends] = useState([])
  useEffect(() => {
    axios.get('search/trending')
    .then(response =>setTrends(response.data.coins.slice(0,4)))
  })
  return (
    <div>
      <TopMovers />
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