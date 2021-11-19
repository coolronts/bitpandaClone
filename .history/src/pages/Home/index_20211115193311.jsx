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
      <div className="flex " >
        <div className="w-full">
          <MyPortfolio />
        </div>
        <div className="w-1/2 p-8 transform hover:scale-105 motion-reduce:transform-none">
          <CreditCard
            name="Zahid Hossain Ronty"
            number="1234 4567 8901 2345"
            valid="02/23"
          />
        </div>
      </div>
    </div>
  );
}