import { ChartData, coinDetails } from '../../api'
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

export default function CoinPage() {
  
  
  const ChartContent = () => {
    const styles = {
      body: "mb-12",
      currentPrice: "text-4xl font-bold",
      priceChange: `text-sm font-bold mb-6`,
      dayPick: "flex mt-6",
      dayOption: "text-green-900 px-2 py-1 text-xs font-bold mr-3 rounded-md shadow-2xl hover:shadow-none cursor-pointer"
    }
    function marketChange() {
      console.log(chartHistory, "chartHistory")
      setPriceChange(chartHistory[chartHistory.length - 1] - chartHistory[0])
      setPercentageChange((chartHistory[chartHistory.length - 1] - chartHistory[0])*100/(chartHistory[0]))
  }
    const [dayChart, setDayChart] = useState(1);
    const [chartHistory, setChartHistory] = useState([]);
    const [priceChange, setPriceChange] = useState(0);
    const [percentageChange, setPercentageChange] = useState()
    useEffect(() => {
      ChartData('bitcoin',dayChart).then(res => {
        setChartHistory(res.prices)
        marketChange(res.prices)
      })

    }, [dayChart]);

    return (
      <div className={styles.body}>
        <div className={styles.currentPrice}> {coin.currentPrice} Nok </div> 
        <div className={`${styles.priceChange} ${coin.dayChange > 0 ? "text-green-500" : "text-red-500"}`}>
          {priceChange > 0 && '+'}
          {priceChange} /
          {percentageChange > 0 ? ' +' : ' '}
          {percentageChange + '%'}
        </div>
        <Chart dataX={chartHistory} borderWidth={3}  yGrid={true}  xGrid={true} grid={true} legends={true} tooltipEnable={true} />
        <div className={styles.dayPick}>
          <p onClick={()=>setDayChart(1)}  className={`${styles.dayOption} ${dayChart==1 ? "bg-green-400" : ""}`}>1D</p>
          <p onClick={()=>setDayChart(7)} className={`${styles.dayOption} ${dayChart==7 ? "bg-green-400" : ""}`}>7D</p>
          <p onClick={()=>setDayChart(30)} className={`${styles.dayOption} ${dayChart==30 ? "bg-green-400" : ""}`}>30D</p>
          <p onClick={()=>setDayChart(365)} className={`${styles.dayOption} ${dayChart==365 ? "bg-green-400" : ""}`}>1Y</p>
        </div>
      </div>
    )
  }
  const [coin, setCoin] = useState({})
  const [loading, setLoading] = useState(true)
  const [readMore, setReadMore] = useState(false)
  const styles = {
    body: "px-12",
    name: "text-4xl font-bold",
    symbol: "uppercase text-xl",
    about: "text-2xl font-semibold pt-12 pb-6",
    readMore:"h-48 overflow-ellipsis overflow-hidden",
    readLess: "h-auto",
    read: "text-blue-800 font-semibold hover:underline cursor-pointer",
    detailsSection: "pt-12",
    detailsText: "text-2xl font-semibold",
    detailsGroup: "flex flex-wrap justify-around mt-3",
    detailGroup: "text-left",
    detailTitle: "text-gray-700 text-sm",
    detailValue: "text-gray-900 text-lg font-semibold",

  }
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
            <section className={styles.body}>
              <SplitScreen leftWeight={'w-full mr-12'} rightWeight={'w-1/2'}>
                <div id="left">
                  <SplitScreen leftWeight={'flex-shrink mr-2'} rightWeight={'w-1/3'}>
                    <Logo alt="coin Logo" src={coin.logo} radius={16} />
                    <div> 
                      <h1 className={styles.name}>{coin.name} </h1>
                      <h1 className={styles.symbol}>{coin.symbol}</h1>
                    </div>
                  </SplitScreen>
                
                  <BasicCard>
                    <ChartContent/>
                  </BasicCard>

                  <h1 className={styles.about}>About {coin.name} </h1>
                  <BasicCard>
                    <p className={`text-semibold ${!readMore? styles.readMore: styles.readLess}`} > {coin.description} </p>
                    <a onClick={() => setReadMore(!readMore)} className={styles.read}>
                      Read {readMore?<span>Less</span>:<span>More</span>} 
                    </a>
                  </BasicCard>
                  

                  <div className={styles.detailsSection}>
                    <BasicCard>
                      <h1 className={styles.detailsText}>Details </h1>
                      <hr />
                      <div className={styles.detailsGroup}>
                        <div className={styles.detailGroup}>
                          <p className={styles.detailTitle}>Market Cap</p>
                          <p className={styles.detailValue}>{coin.marketCap} Nok</p>
                        </div>
                        <div className={styles.detailGroup}>
                          <p className={styles.detailTitle}>Daily High</p>
                          <p className={styles.detailValue}>{coin.high24h} Nok</p>
                        </div>
                        <div className={styles.detailGroup}>
                          <p className={styles.detailTitle}>Daily Low</p>
                          <p className={styles.detailValue}>{coin.low24h} Nok</p>
                        </div>
                        <div className={styles.detailGroup}>
                          <p className={styles.detailTitle}>Trust Score</p>
                          <p className={`${styles.detailValue} uppercase border-b-4 text-${coin.trustScore}-700 border-${coin.trustScore}-700` }>{coin.trustScore} </p>
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
