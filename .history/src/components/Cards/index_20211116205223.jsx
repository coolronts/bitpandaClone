import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import Chart from '../Chart'

export const TopMoversCard = ({ trend }) => {
  console.log(trend,"card")
  // const { logoSrc,name,changePrice,changePercent,price, chartData } = item;
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
      {trend.id}
      {/* <div className={styles.cardTitle}>
        <img className={styles.logo} alt="logo" src={logoSrc} />
        {name}
      </div>
      <div className={styles.chart}>
        <Chart dataX={chartData}/>
      </div>
      <div className={styles.lastValue}>{price} Nok</div>
      {changePrice > 0 ?
        <div className={styles.positiveChange}>{changePrice} Nok  {changePercent}% <TiArrowSortedUp /></div> :
        <div className={styles.negativeChange}>{changePrice} Nok {changePercent}% <TiArrowSortedDown/></div>
      } */}
    </div>
  )
}