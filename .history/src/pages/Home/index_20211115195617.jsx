import CreditCard from '../../components/CreditCard'
import MyPortfolio from '../../components/MyPortfolio'
import React from 'react';
import SplitScreen from '../../components/SplitScreen'
import TopMovers from '../../components/TopMovers'

const Left = () => {
  return (
    <div>Hello Left</div>
  )
}

const Right = () => {
  return (
    <div>Hello Right</div>
  )
}

export default function Home() {
  return (
    <div>
      <TopMovers />
      <hr />
      <SplitScreen leftWeight="w-1/2" rightWeight="w-1/2">
        <Left/>
        <Right />
      
      </SplitScreen>
      
    </div>
  );
}