import React, { useEffect, useState } from 'react';

import Button from '../../components/Button';
import Chart from '../../components/Chart';
import CoinDescription from '../../components/CoinDescription';
import axios from 'axios';

export default function CoinPage({ coinId }) {
  const link = `https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
  const [coin, setCoin] = useState({});
  useEffect(() => {
    fetch()
  
  }, []);

  async function fetch() {
    await axios.get(link)
      .then(res => {
        console.log(res.data)
        setCoin(res.data)
      })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <h1>CoinPage</h1>
      <CoinDescription className="w-1/6" description={coin.description} />
      <Button type="send" className="w-full "/>
    </div>
  );
}