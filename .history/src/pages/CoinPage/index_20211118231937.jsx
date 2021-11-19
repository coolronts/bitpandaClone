import React, { useEffect, useState } from 'react';

import {BasicCard} from '../../components/Cards'
import Chart from '../../components/Chart';
import {Circle} from '../../components/Button'
import {HiOutlineMinus} from 'react-icons/hi'
import { IoAddSharp } from 'react-icons/io5'
import Logo from '../../components/Logo'
import {MdSwapCalls} from 'react-icons/md'
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
            <SplitScreen leftWeight={'w-full mr-2'} rightWeight={'w-1/3 bg-blue-300'}>
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
              <div id="right">
                <BasicCard>
                  <>
                    <h1 className="text-2xl font-semibold">You own</h1>
                    <h1 className="text-3xl font-bold">300 Nok</h1>
                    <h1 className="text-lg font-semibold text-gray-500">0.00000 BTC</h1>
                    <div className="flex justify-between pt-12"> 
                      <Circle icon={<IoAddSharp />} name="Buy" color="green" radius="12" />
                      <Circle icon={<MdSwapCalls className="transform rotate-90"/>} name="Swap" color="green" radius="12" />
                      <Circle icon={<HiOutlineMinus />} name="Sell" color="green" radius="12" />
                    </div>
                  </>
                </BasicCard>
              </div>
            </SplitScreen>
          </>
        )}
    </div>
  );
}

CoinPage.propTypes = {
  coinId: PropTypes.number,
}
