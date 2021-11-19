import CreditCard from '@root/components/CreditCard'
import MyPortfolio from '@root/components/MyPortfolio'
import React from 'react';
import TopMovers from '@root/components/TopMovers'

export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <div className="flex justify-between px-12" >
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