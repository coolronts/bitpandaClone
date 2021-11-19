import {getUnixTime, priorSevenUnix} from "../utils/getUnixTime"

import axios from 'axios'

const baseLink = "https://api.coingecko.com/api/v3/coins/"


export async function sevenDayData(coinId) {
  console.log(getUnixTime(), priorSevenUnix())
  await axios.get(baseLink + coinId + 'bitcoin/market_chart/range?vs_currency=nok&from=1636470475&to=1637075275')
  .then(response => console.log(response))
  
}