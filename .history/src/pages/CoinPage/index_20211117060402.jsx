import { useEffect, useState } from 'react';

import Chart from '../../components/Chart';
import { coinDetails } from '../../api'

// import CoinDescription from '../../components/CoinDescription';


export default function CoinPage({ coinId }) {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    coinDetails('bitcoin')
    .then(res =>setChartData(res.market_data.sparkline_7d.price))
  
  }, []);

  // async function fetch() {
  //   await axios.get(link)
  //     .then(res => {
  //       //console.log(res.data.description.en)
  //       setCoin(res.data)
  //     })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  return (
    <div>
      <h1>CoinPage</h1>
      {/* <CoinDescription className="w-1/6" description={coin} /> */}
      <Chart dataX={chartData} xGrid={true} yGrid={true} tooltip={true} />
    </div>
  );
}