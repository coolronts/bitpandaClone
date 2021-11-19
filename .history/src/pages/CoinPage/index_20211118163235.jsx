import React, { useEffect, useState } from 'react';

import {BasicCard} from '../../components/Cards'
import Chart from '../../components/Chart';
import Logo from '../../components/Logo'
import PropTypes from 'prop-types';
import SplitScreen from '../../components/SplitScreen'
import { coinDetails } from '../../api'

// import CoinDescription from '../../components/CoinDescription';



export default function CoinPage({ coinId }) {
  const CardContent = () => {
    return (
      <>
        <div className="text-6xl font-bold"> {coin.market_data.current_price.nok} Nok </div> 
        <div className={`text-lg font-bold ${coin.market_data.market_cap_change_24h_in_currency.nok>0 ? "text-green-500" : "text-red-500"}`}>
          {coin.market_data.market_cap_change_24h_in_currency.nok > 0 && '+'}
          {coin.market_data.market_cap_change_24h_in_currency.nok.toFixed(2)} /
          {coin.market_data.market_cap_change_percentage_24h_in_currency.nok > 0 ? ' +' : ' '}
          {coin.market_data.market_cap_change_percentage_24h_in_currency.nok.toFixed(2) + '%'}
        </div>
        <Chart dataX={chartData} borderWidth={3}  yGrid={true}  xGrid={true} grid={true} legends={true} tooltipEnable={true} />
       </>
    )
  }
  console.log(coinId)
  const [chartData, setChartData] = useState([]);
  const [coin, setCoin] = useState({})
  useEffect(() => {
    coinDetails('bitcoin')
      .then(res => {
      console.log(res)
      setChartData(res.market_data.sparkline_7d.price)
      setCoin(res)
    })
  }, []);
  
  return (
    <div className="py-24">
      <h1>CoinPage</h1>
      {coin!==null && (
        <>
          <SplitScreen leftWeight={'flex-shrink mr-2'} rightWeight={'w-1/3'}>
            <Logo alt="coin Logo" src={coin.image.large} radius={16}/>
            <div> 
              <h1 className="text-4xl font-bold">{coin.name} </h1>
              <h1 className="uppercase text-xl">{coin.symbol}</h1>
            </div>
          </SplitScreen>
          <BasicCard>
            <CardContent/>
          </BasicCard>
        </>
      )}
    </div>
  );
}

CoinPage.propTypes = {
  coinId: PropTypes.number,
}
