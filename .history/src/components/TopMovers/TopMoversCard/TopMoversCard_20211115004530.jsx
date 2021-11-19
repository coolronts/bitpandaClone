import React,{useEffect, useState} from 'react'

import Chart from './Chart/Chart'
import { TiArrowSortedUp } from 'react-icons/ti'
import axios from 'axios'

export default function TopMoversCard({ detail }) {
  const [price, setPrice] = useState(0)
  const [dataX, setDataX] = useState([])
  const styles = {
    cardBody: "shadow-lg bg-white rounded-lg mb-2 w-1/4 mr-2 px-2 py-4",
    cardTitle: "font-semibold flex ",
    logo: "mr-3 inline-block h-8 w-8 rounded-full ring-2 ring-white",
    lastValue: "font-bold",
    change:"text-green-600 text-sm font-semibold flex align-middle"
  }
  
  const currentPriceLink = 'simple/price?ids=' + detail.id + '&vs_currencies=nok&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'
  const chartData = 'coins/'+ detail.id + '/market_chart?vs_currency=nok&days=1&interval=hourly'
  useEffect(() => {
    fetchData()
  }, [price, dataX])

  async function fetchData() {
    const response = await axios.get(currentPriceLink)
    const data = response.data
    const price = data[detail.id].nok
    console.log(price,"price")
    setPrice(price)
    const res = axios.get(chartData)
    console.log(res)
    // setDataX(res.data.prices)
    console.log(dataX)
  }
  
  return(
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>
        <img className={styles.logo} alt="logo" src={detail.small} />
        {detail.name}
      </div>
      <div className={styles.chart}>
        <Chart dataX={dataX}/>
      </div>
      <div className={styles.lastValue}>{price} Nok</div>
      <div className={styles.change}>+$1.232 (+21.0% <TiArrowSortedUp/>)</div>
    </div>
  )
}