import React, { useCallback, useRef } from 'react'

import Chart from '../Chart'
import Logo from '../Logo'
import PropTypes from 'prop-types'
import SplitScreen from '../SplitScreen'

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
    dataCell: "px-6 py-4 whitespace-nowrap font-semibold text-lg",
    row: "flex items-center",
    rowBody: "hover:bg-grey-100"
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
                    </td>
                    {[item.current_price, item.market_cap, item.price_change_percentage_7d_in_currency].map((data, index) => (
                      <td key={index} className={`
                          ${styles.dataCell}
                          ${index == 1 && "text-gray-500"}
                          ${index == 2 ? data < 0 ? "text-red-500":"text-green-500":""} 
                      `}>
                        <div className={styles.text}> {
                          index<2 ? data.toFixed(2) + " Nok" : data.toFixed(2) + " %"
                        } </div>
                      </td>
                    ))}
                    <td className={`${styles.dataCell +  "bg-red-200"}`}>
                      <Chart className="bg-red-300" dataX={item.sparkline_in_7d.price} aspectRatio={4} />
                    </td>
                    <td className={styles.dataCell}>
                      <a href="#">
                        Edit
                      </a>
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
