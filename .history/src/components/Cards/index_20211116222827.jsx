import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import Chart from '../Chart'

export const TopMoversCard = ({ trend }) => {
  console.log(trend, "card")
  useEffect(() => { }, [trend])))
  
  const { logoSrc,name,change ,price, chartData } = trend;
  const styles = {
    cardBody: "shadow-lg bg-white rounded-lg mb-2 mx-4 px-2 py-4 transform hover:scale-110 hover:shadow-2xl  motion-reduce:transform-none",
    cardTitle: "font-semibold flex ",
    logo: "mr-3 inline-block h-8 w-8 rounded-full ring-2 ring-white",
    lastValue: "font-bold",
    positiveChange: "text-green-600 text-sm font-semibold flex align-middle",
    negativeChange: "text-red-600 text-sm font-semibold flex align-middle"
  }
  return (
    <div className={styles.cardBody}>
    
      <div className={styles.cardTitle}>
        <img className={styles.logo} alt="logo" src={logoSrc} />
        {name}
      </div>
      <div className={styles.chart}>
        {/* <Chart dataX={chartData}/> */}
      </div>
      <div className={styles.lastValue}> {price} Nok</div>
      {change > 0 ?
        <div className={styles.positiveChange}>{change} Nok  {change}% <TiArrowSortedUp /></div> :
        <div className={styles.negativeChange}>{change} Nok {change}% <TiArrowSortedDown/></div>
      }
    </div>
  )
}