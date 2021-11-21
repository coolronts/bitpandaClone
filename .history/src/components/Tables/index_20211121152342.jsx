import React, { useCallback, useRef } from 'react'

import Chart from '../Chart'
import {HiDotsHorizontal} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import PropTypes from 'prop-types'
import {SmallSquare} from '../Button'
import SplitScreen from '../SplitScreen'
import { formatter } from '../../utils/currencyFormatter'

export default function Tables({
  headings,
  items,
  lastElement,
  increaseLimit
}) {

  const styles = {
    container: "shadow  border-b border-gray-200 rounded-lg py-12 font-sans",
    table: "min-w-full divide-y divide-gray-200 rounded-lg text-center",
    header: "bg-gray-50",
    scope: "px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center",
    buttonScope: "relative px-6 py-3",
    body: "bg-white divide-y divide-gray-200",
    dataCell: "px-6 py-1 whitespace-nowrap font-semibold text-lg",
    row: "flex items-center",
    rowBody: "hover:bg-gray-100 cursor-pointer hover:shadow-md",
    text: "text-sm"
  }
  const observer = useRef();
  const lastElementRef = useCallback(node => {
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting ){increaseLimit()}
    })
    if(node) observer.current.observe(node)
  })

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            {headings.map((heading, index) => (<th scope="col" key={index} className={styles.scope}> {heading}</th>))}
          </tr>
        </thead>
        
        <tbody className={styles.body}>
          {items.map((item, index) => (
            <tr key={item.id} className={styles.rowBody}>
              <td className={styles.dataCell}>
                <Link to={`/coin/${item.id}`}>
                  <SplitScreen containerWeight="flex items-center" leftWeight="flex-shrink" rightWeight="ml-3">
                    <Logo src={item.image} alt="logo" radius="12"/>
                    <div>
                      <p className=" uppercase font-bold">{item.symbol}</p>
                      
                      {(index == lastElement - 1 ? true : false) == true ?
                        <p className="text-sm" ref={lastElementRef}>{item.name}</p> :
                        <p className="text-sm">{item.name}</p>
                      }
                    </div>
                  </SplitScreen>
                </Link>
              </td>
              {[item.current_price, item.market_cap, item.price_change_percentage_7d_in_currency].map((data, index) => (
                <td key={index} className={`
                    ${styles.dataCell}
                    ${index == 1 && "text-gray-500"}
                    ${index == 2 ? data < 0 ? "text-red-500":"text-green-500":""} 
                `}>
                  <Link to={`/coin/${item.id}`}>
                    <div className={styles.text}> {
                      index<2 ? formatter.format(data) : data.toFixed(2) + " %"
                    } </div>
                  </Link>
                </td>
              ))}
              <td className={styles.dataCell}>
                <Link to={`/coin/${item.id}`}>
                  <Chart dataX={item.sparkline_in_7d.price} aspectRatio={4} />
                </Link>
              </td>
              <td className={styles.dataCell}>
                <SmallSquare name={"Buy"} colour={"green"} />
                <SmallSquare icon={HiDotsHorizontal} colour={"green"}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Tables.propTypes = {
  headings: PropTypes.array,
  items: PropTypes.array,
  resourceName: PropTypes.string,
  lastElement: PropTypes.bool,
  increaseLimit: PropTypes.func,
  
}
