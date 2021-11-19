import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import React from 'react';
import SplitScreen from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <SplitScreen leftWeight="w-1/2" rightWeight="w-1/2">
        <MyPortfolio />
        
        <CreditCard
          name="Zahid Hossain Ronty"
          number="1234 4567 8901 2345"
          valid="02/23"
        />
      
      </SplitScreen>
      
    </div>
  );
}