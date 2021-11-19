import {getUnixTime, priorSevenUnix} from "../utils/getUnixTime"

import axios from 'axios'

const baseLink = "https://api.coingecko.com/api/v3/coins/"


export async function sevenDayData(coinId) {
  let pricesArray = []
  console.log(getUnixTime(), priorSevenUnix())
  await axios.get(baseLink + coinId + '/market_chart/range?vs_currency=nok&from=1636470475&to=1637075275')
    .then(response => {
      response.data.prices.map(price => {
        pricesArray.push(price[1])
      })
      .then(console.log(pricesArray))
      
    })
  
}