import React, { useEffect, useRef, useState } from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import Chart from '../Chart'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
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


export const ListCard = ( colItems, target) => {
  const [element, setElement] = useState(null)
  const Container = tw.div`shadow-lg rounded-2xl bg-white p-8`;
  console.log(colItems,"hel")
  return(
    <Container>
      hello
      {target && 
        <div ref={setElement}/>
      }
    </Container>
  )
}

ListCard.propTypes = {
  colItems: PropTypes.object.isRequired,
  target: PropTypes.bool.isRequired,
}