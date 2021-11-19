import { getUnixTime, priorSevenUnix } from "../utils/getUnixTime";

import axios from "axios";

const baseLink = "https://api.coingecko.com/api/v3/";

export async function trending() {
    const response = await axios.get(baseLink + "search/trending");
    return response.data.coins.slice(0, 4);
}

export async function currentPrice(id) {
    const response = await axios.get(
        baseLink +
        "simple/price?ids=" +
        id +
        "&vs_currencies=nok&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
    );
    return response.data;
}

export async function dayChartData(id) {
    const chartData = await axios.get(
        "coins/" + id + "/market_chart?vs_currency=nok&days=1&interval=hourly"
    );
    return chartData.data.prices;
}

export async function coinDetails(id) {
    const coinDetails = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
    );
    console.log(coinDetails);
}
// export async function sevenDayData(coinId) {
//   let pricesArray = []
//   return await axios.get(baseLink + coinId + '/market_chart/range?vs_currency=nok&from=' + priorSevenUnix() + '&to=' + getUnixTime())
//   .then(response => {
//     response.data.prices.map(price => pricesArray.push(price[1]))
//     return pricesArray
//   })
// }