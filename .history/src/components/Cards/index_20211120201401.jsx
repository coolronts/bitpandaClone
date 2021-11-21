import React, { useCallback, useEffect, useRef } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import Chart from '../Chart'
import { Link } from 'react-router-dom';
import Logo from '../Logo'
import PropTypes from 'prop-types'
import SplitScreen from '../SplitScreen'
import tw from "tailwind-styled-components";

//Basic Card
const Card = tw.div`${(props) => props.weight}`;
export const BasicCard = ({ children }) => {
  const Container = tw.div`shadow-lg rounded-2xl bg-white p-8`;
  
  return(
    <Container>
      <Card>
        {children}
      </Card>
    </Container>
  )
}

BasicCard.propTypes = {
  children: PropTypes.node.isRequired,
}



//TopMover Card
export const TopMoversCard = ({ trend }) => {
  useEffect(() => { }, [trend])
  const { logoSrc,name,change ,price, chartData, id } = trend;
  const styles = {
    cardBody: "shadow-lg bg-white rounded-2xl mb-2 mx-4 px-2 py-4 transform hover:scale-110 hover:shadow-2xl  motion-reduce:transform-none",
    cardTitle: "font-semibold flex ",
    logo: "mr-3 inline-block h-8 w-8 rounded-full ring-2 ring-white",
    lastValue: "font-bold",
    positiveChange: "text-green-600 text-sm font-semibold flex align-middle",
    negativeChange: "text-red-600 text-sm font-semibold flex align-middle"
  }
  return (
    <Link to={{ pathname: `coin/${id}` }} >
      
    <div className={styles.cardBody}>
      <div className={styles.cardTitle}>
        <img className={styles.logo} alt="logo" src={logoSrc} />
        {name}
      </div>
      <div className={styles.chart}>
        <Chart dataX={chartData}/>
      </div>
      <div className={styles.lastValue}> {price} Nok</div>
      {change > 0 ?
        <div className={styles.positiveChange}>{(chartData[chartData.length -1][1]-chartData[0][1]).toFixed(2)} Nok  ( {change}% <TiArrowSortedUp /> )</div> :
        <div className={styles.negativeChange}>{change} Nok ({change}% <TiArrowSortedDown/>)</div>
      }
      </div>
    </Link>
  )
}


TopMoversCard.propTypes = {
  trend: PropTypes.object.isRequired,
}


//Lists Card


export const ListCard = ({ coin,target,increaseLimit  }) => {
  const observer = useRef();
  const lastElementRef = useCallback(node => {
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      console.log(target)
      if(entries[0].isIntersecting ){increaseLimit()}
    })
    if(node) observer.current.observe(node)
  })
  const Container = tw.div`bg-white p-8 w-full`;
  console.log(coin)
  return(
    <Container>
      {target==true &&
        <div ref={lastElementRef}>Element</div> 
      }
      <div className="flex flex-wrap">
        <p>Name</p>
        <p>Price</p>
        <p>Market Cap</p>
        <p>Change</p>
        <p>Price Charts</p>
      </div>
      <div className="flex justify-between">
        <SplitScreen containerWeight="flex-shrink flex" rightWeight="ml-3">
          <Logo src={coin.image} alt="logo"/>
          <div>
            <p className="text-3xl font-bold">{coin.symbol}</p>
            <p font-semibold>{coin.name}</p>
          </div>
        </SplitScreen>
        <p font-semibold>{coin.current_price}</p>
        <p font-semibold>{coin.market_cap}</p>
        <p font-semibold>{coin.price_change_percentage_7d_in_currency}</p>
      </div>
    </Container>
  )
}

ListCard.propTypes = {
  coin: PropTypes.object.isRequired,
  target: PropTypes.bool.isRequired,
  lastElement: PropTypes.number.isRequired,
  increaseLimit: PropTypes.func.isRequired,
}