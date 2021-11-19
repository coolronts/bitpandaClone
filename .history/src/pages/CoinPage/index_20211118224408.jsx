import React, { useEffect, useState } from 'react';

import {BasicCard} from '../../components/Cards'
import Chart from '../../components/Chart';
import {Circle} from '../../components/Button'
import { IoAddSharp } from 'react-icons/io'
import Logo from '../../components/Logo'
import PropTypes from 'prop-types';
import SplitScreen from '../../components/SplitScreen'
import { coinDetails } from '../../api'

// import CoinDescription from '../../components/CoinDescription';



export default function CoinPage({ coinId }) {
  const ChartContent = () => {
    return (
      <>
        <div className="text-6xl font-bold"> {coin.currentPrice} Nok </div> 
        <div className={`text-lg font-bold ${coin.dayChange>0 ? "text-green-500" : "text-red-500"}`}>
          {coin.dayChange > 0 && '+'}
          {coin.dayChange} /
          {coin.dayPercentageChange > 0 ? ' +' : ' '}
          {coin.dayPercentageChange + '%'}
        </div>
        <Chart dataX={coin.seven_days} borderWidth={3}  yGrid={true}  xGrid={true} grid={true} legends={true} tooltipEnable={true} />
       </>
    )
  }
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    coinDetails('bitcoin')
      .then(res => {
      setCoin(res)
    }).then(setLoading(false))
  }, []);
  
  return (
    <div className="py-24">
      <h1>CoinPage</h1>
      {!loading &&
        (
          <>
            <div id="left">
              <SplitScreen leftWeight={'flex-shrink mr-2'} rightWeight={'w-1/3'}>
                <Logo alt="coin Logo" src={coin.logo} radius={16} />
                <div> 
                  <h1 className="text-4xl font-bold">{coin.name} </h1>
                  <h1 className="uppercase text-xl">{coin.symbol}</h1>
                </div>
              </SplitScreen>
              <BasicCard>
                <ChartContent/>
              </BasicCard>
            </div>
            <div id="right" className="py-12">
              <BasicCard>
                <>
                  <h1 className="text-2xl font-semibold">You own</h1>
                  <h1 className="text-3xl font-bold">300 Nok</h1>
                  <h1 className="text-lg font-semibold text-gray-500">0.00000 BTC</h1>
                  <Circle icon={<IoAddSharp />} text="Buy" color="green" />
                
                </>
              </BasicCard>

            </div>
          </>
        )}
    </div>
  );
}

CoinPage.propTypes = {
  coinId: PropTypes.number,
}
