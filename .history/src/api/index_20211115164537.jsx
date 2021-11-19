import {getUnixTime, priorSevenUnix} from "../utils/getUnixTime"

import axios from 'axios'

const baseLink = "https://api.coingecko.com/api/v3/coins/"


export async function sevenDayData(coinId) {
  let pricesArray = []
  return await axios.get(baseLink + coinId + '/market_chart/range?vs_currency=nok&from=' + priorSevenUnix() + '&to=' + getUnixTime())
  .then(response => {
    response.data.prices.map(price => pricesArray.push(price[1]))
    return pricesArray
  })  
}