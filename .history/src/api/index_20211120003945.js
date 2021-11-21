// import { getUnixTime, priorSevenUnix } from "../utils/getUnixTime";

import axios from "axios";
import millify from "millify";

const baseLink = "https://api.coingecko.com/api/v3/";

export async function trending() {
    const response = await axios.get(`${baseLink}search/trending`);
    return response.data.coins.slice(0, 4);
}

export async function currentPrice(id) {
    const response = await axios.get(
        `${baseLink}simple/price?ids=${id}&vs_currencies=nok&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`
    );
    return response.data;
}

export async function ChartData(coinId, days) {
    let interval = "daily";
    if (days == 1 || days == 7) {
        interval = "hourly";
    }
    const chartData = await axios.get(
        `${baseLink}coins/${coinId}/market_chart?vs_currency=nok&days=${days}&interval=${interval}`
    );
    return chartData.data;
}

export async function coinDetails(id) {
    let result = {};
    const coinDetails = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&sparkline=true`
    );
    result.name = coinDetails.data.name;
    result.symbol = coinDetails.data.symbol;
    result.logo = coinDetails.data.image.large;
    result.seven_days = coinDetails.data.market_data.sparkline_7d.price;
    result.currentPrice =
        coinDetails.data.market_data.current_price.nok.toFixed(2);
    result.dayChange =
        coinDetails.data.market_data.market_cap_change_24h_in_currency.nok.toFixed(
            2
        );
    result.dayPercentageChange =
        coinDetails.data.market_data.market_cap_change_percentage_24h_in_currency.nok.toFixed(
            2
        );
    result.description = coinDetails.data.description.en;
    result.marketCap = millify(coinDetails.data.market_data.market_cap.nok);
    result.high24h = millify(coinDetails.data.market_data.high_24h.nok);
    result.low24h = millify(coinDetails.data.market_data.low_24h.nok);
    result.trustScore = coinDetails.data.tickers[0].trust_score;
    return result;
}

export async function getCoinsList(order) {
    const lists = axios.get(`${baseLink}coins/categories?order=${order}`);
    return lists.data;
}