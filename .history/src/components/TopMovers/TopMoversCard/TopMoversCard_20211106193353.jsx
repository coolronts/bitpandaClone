import { Filter, Options, RequestHandler, createProxyMiddleware } from 'http-proxy-middleware';
import React,{useEffect, useState} from 'react'

import { Line } from 'react-chartjs-2';
import { TiArrowSortedUp } from 'react-icons/ti'
import axios from 'axios'

export default function TopMoversCard({ detail }) {
  const [price, setPrice] = useState(0)
  const styles = {
    cardBody: "shadow-lg bg-white rounded-lg mb-2 w-1/4 mr-2 px-2 py-4",
    cardTitle: "font-semibold flex ",
    logo: "mr-3 inline-block h-8 w-8 rounded-full ring-2 ring-white",
    lastValue: "font-bold",
    change:"text-green-600 text-sm font-semibold flex align-middle"
  }
  let dataX = []
  const data = {
  labels: dataX,
  datasets: [
    {
      data: dataX,
      fill: false,
      borderColor: 'rgb(16, 185, 129)',
      borderWidth: 1 
    },
  ],
};

  const options = {
    aspectRatio: 4,
    responsive: true,
    elements: {
      point:{radius: 0}
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip:{enabled: false},
    },
    scales: {
      legend: { display: false },
      x: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
     },
      y: {
        grid: {
          display: false,
          drawBorder: false 
        },
        ticks: {display: false}
      }
    }
  };
  const currentPriceLink = 'https://api.coingecko.com/api/v3/simple/price?ids=' + detail.id + '&vs_currencies=nok&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'
  const chartData = 'coins/'+ detail.id + '/market_chart?vs_currency=nok&days=1'
  useEffect(() => {
    axios.get(currentPriceLink)
      .then(response => setPrice(response.data[detail.id].nok))
      .then(
        axios.get(chartData)
          .then(response => response.data.prices.map(prices => dataX.push(prices[1])))
          .then(()=>console.log(dataX))
      )    
  }, [price, dataX])
  
  return(
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>
        <img className={styles.logo} alt="logo" src={detail.small} />
        {detail.name}
      </div>
      <div className={styles.chart}>
          <Line data={data} options={options} />
      </div>
      <div className={styles.lastValue}>{price} Nok</div>
      <div className={styles.change}>+$1.232 (+21.0% <TiArrowSortedUp/>)</div>
    </div>
  )
}