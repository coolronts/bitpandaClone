import { useEffect, useState } from 'react';

// import CoinDescription from '../../components/CoinDescription';
import {coinDetails} from '../../api'

export default function CoinPage({ coinId }) {
  
  const [coin, setCoin] = useState({});
  useEffect(() => {
    coinDetails('bitcoin')
  
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
      
    </div>
  );
}