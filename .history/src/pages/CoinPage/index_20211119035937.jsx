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

export default function CoinPage() {
  
  const ChartContent = () => {
    const styles = {
      body: "mb-12",
      currentPrice: "text-4xl font-bold",
      priceChange: `text-lg font-bold mb-6`,
      dayPick: "flex mt-6",
      dayOption: "text-green-900 px-2 py-1 text-xs font-bold mr-3 rounded-md shadow-2xl hover:shadow-none cursor-pointer"
    }
    const [dayChart, setDayChart] = useState(1);
    return (
      <div className={styles.body}>
        <div className={styles.currentPrice}> {coin.currentPrice} Nok </div> 
        <div className={`${styles.priceChange + coin.dayChange > 0 ? "text-green-500" : "text-red-500"}`}>
          {coin.dayChange > 0 && '+'}
          {coin.dayChange} /
          {coin.dayPercentageChange > 0 ? ' +' : ' '}
          {coin.dayPercentageChange + '%'}
        </div>
        <Chart dataX={coin.seven_days} borderWidth={3}  yGrid={true}  xGrid={true} grid={true} legends={true} tooltipEnable={true} />
        <div className={styles.dayPick}>
          <p onClick={()=>setDayChart(1)}  className={`${styles.dayOption + dayChart!=1 && "bg-green-400"}`}>1D</p>
          <p onClick={()=>setDayChart(7)} className={`${styles.dayOption + dayChart!=7 ? "bg-green-400" : ""}`}>7D</p>
          <p onClick={()=>setDayChart(30)} className={styles.dayOption}>30D</p>
          <p onClick={()=>setDayChart(365)} className={styles.dayOption}>1Y</p>
        </div>
      </div>
    )
  }
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [readMore,setReadMore] = useState(false)
  useEffect(() => {
    coinDetails('bitcoin')
      .then(res => {
      setCoin(res)
    }).then(setLoading(false))
  }, []);
  
  return (
    <div className="py-24">
      {!loading &&
        (
          <div>
            <section className="px-12">
              <SplitScreen leftWeight={'w-full mr-12'} rightWeight={'w-1/2'}>
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

                  <h1 className="text-2xl font-semibold pt-12 pb-6">About {coin.name} </h1>
                  <BasicCard>
                    <p className={`text-semibold ${!readMore? "h-48 overflow-ellipsis overflow-hidden":"h-auto"}`} > {coin.description} </p>
                    <a onClick={() => setReadMore(!readMore)} className="text-blue-800 font-semibold hover:underline cursor-pointer">
                      Read {readMore?<span>Less</span>:<span>More</span>} 
                    </a>
                  </BasicCard>
                  

                  <div className=" pt-12">
                    <BasicCard>
                      <h1 className="text-2xl font-semibold">Details </h1>
                      <hr />
                      <div className="flex flex-wrap justify-around mt-3">
                        <div className="text-left">
                          <p className="text-gray-700 text-sm">Market Cap</p>
                          <p className="text-gray-900 text-xl font-semibold">{coin.marketCap} Nok</p>
                        </div>
                        <div className="text-left">
                          <p className="text-gray-700 text-sm">Daily High</p>
                          <p className="text-gray-900 text-xl font-semibold">{coin.high24h} Nok</p>
                        </div>
                        <div className="text-left">
                          <p className="text-gray-700 text-sm">Daily Low</p>
                          <p className="text-gray-900 text-xl font-semibold">{coin.low24h} Nok</p>
                        </div>
                      </div>
                    </BasicCard>
                  </div>
                  
                </div>
                <div id="right">
                  <BasicCard>
                    <>
                      <h1 className="text-2xl font-semibold">You own</h1>
                      <h1 className="text-3xl font-bold">300 Nok</h1>
                      <h1 className="text-lg font-semibold text-gray-500">0.00000 BTC</h1>
                      <div className="flex justify-between pt-12 px-12"> 
                        <Circle icon={<IoAddSharp />} name="Buy" color="green" radius="12" />
                        <Circle icon={<MdSwapCalls className="transform rotate-90"/>} name="Swap" color="green" radius="12" />
                        <Circle icon={<HiOutlineMinus />} name="Sell" color="green" radius="12" />
                      </div>
                    </>
                  </BasicCard>
                </div>
              </SplitScreen>
            </section>
          </div>
        )}
      </div>
  );
}

CoinPage.propTypes = {
  coinId: PropTypes.number,
}
