import Chart from '../Chart'
import Logo from '../Logo'
import PropTypes from 'prop-types'
import React from 'react'
import SplitScreen from '../SplitScreen'

export default function Tables({
  headings,
  items,
  
  // lastElement,
  // increaseLimit
}) {

  const styles = {
    container: "shadow overflow-hidden border-b border-gray-200 rounded-lg",
    table: "min-w-full divide-y divide-gray-200 rounded-lg text-center",
    header: "bg-gray-50",
    scope: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center",
    buttonScope: "relative px-6 py-3",
    body: "bg-white divide-y divide-gray-200",
    dataCell: "text-lg",
    row:"flex items-center",
  }
  return (
          <div className={styles.container}>
            <table className={styles.table}>
              <thead className={styles.header}>
                <tr>
                  {headings.map((heading, index) => (<th scope="col" key={index} className={styles.scope}> {heading}</th>))}
                </tr>
              </thead>
              <tbody className={styles.body}>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.dataCell}>
                      <SplitScreen containerWeight="flex items-center" leftWeight="flex-shrink" rightWeight="ml-3">
                        <Logo src={item.image} alt="logo" radius="8"/>
                        <div>
                          <p className="text-lg uppercase font-bold">{item.symbol}</p>
                          <p >{item.name}</p>
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
                    <td className={`${styles.dataCell} "w-4 h-4"`}>
                      <Chart dataX={item.sparkline_in_7d.price} aspectRatio={6} />
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
