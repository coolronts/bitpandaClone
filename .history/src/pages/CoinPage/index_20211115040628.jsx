import React, { useEffect, useState } from 'react';

import {CoinDescription} from '../../components/CoinDescription/CoinDescription';
import axios from 'axios';

export default function CoinPage({ coinId }) {
  const link = `https://api.coingecko.com/api/v3/coins/${coinId}?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`
  useEffect(() => {
    axios.get(link)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div>
      <h1>CoinPage</h1>
      <CoinDescription/>
    </div>
  );
}