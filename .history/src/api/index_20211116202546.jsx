import {getUnixTime, priorSevenUnix} from "../utils/getUnixTime"

import axios from 'axios'

const chartData = 'coins/' + detail.id + '/market_chart?vs_currency=nok&days=1&interval=hourly'
  

async function fetchData() {
    const response = await axios.get(currentPriceLink)
    const data = response.data
    const price = data[detail.id].nok
    setPrice(price)
    const res = await axios.get(chartData)
    setDataX(res.data.prices)
    priceChange(res.data.prices)
}

export async function currentPrice(id) {
  const currentPriceLink = 'simple/price?ids=' + id + '&vs_currencies=nok&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'
  const response = await axios.get(currentPriceLink)
  const data = response.data
  const price = data[id].nok
  return price
}
  


// export async function sevenDayData(coinId) {
//   let pricesArray = []
//   return await axios.get(baseLink + coinId + '/market_chart/range?vs_currency=nok&from=' + priorSevenUnix() + '&to=' + getUnixTime())
//   .then(response => {
//     response.data.prices.map(price => pricesArray.push(price[1]))
//     return pricesArray
//   })  
// }


