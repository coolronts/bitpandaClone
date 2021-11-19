import React,{ useEffect, useState } from 'react';
import Logo from '../../components/Logo'

import Chart from '../../components/Chart';
import { coinDetails } from '../../api'
import SplitScreen from '../../components/SplitScreen'
import {BasicCard} from '../../components/Cards'
// import CoinDescription from '../../components/CoinDescription';


export default function CoinPage({ coinId }) {
  const [chartData, setChartData] = useState([]);
  const [coin, setCoin] = useState({})
  useEffect(() => {
    coinDetails('bitcoin')
    .then(res =>{
      setChartData(res.market_data.sparkline_7d.price)
      setCoin(res)
      console.log(res)
    })
  }, [coin,chartData]);

  return (
    <div className="py-24">
      <h1>CoinPage</h1>
      <SplitScreen leftWeight={'flex-shrink mr-2'} rightWeight={'w-1/3'}>
        <Logo alt="coin Logo" src={coin.image} radius={16}/>
        <div> 
          <h1 className="text-4xl font-bold">{coin.name} </h1>
          <h1 className="uppercase text-xl">{coin.symbol}</h1>
        </div>
      </SplitScreen>
      <BasicCard>
        <div className="text-6xl font-bold"> {coin.market_data} Nok </div>
        <div className="text-lg font-bold"> {coin.market_data.market_cap_change_24h_in_currency.nok > 0 && '+'}{coin.market_data.market_cap_change_24h_in_currency.nok} </div>
        <Chart dataX={chartData} borderWidth={3}  yGrid={true}  xGrid={true} grid={true} legends={true} tooltipEnable={true} />
      </BasicCard>
    </div>
  );
}