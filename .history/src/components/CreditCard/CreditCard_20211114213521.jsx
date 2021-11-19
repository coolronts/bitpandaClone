import { FiWifi } from 'react-icons/fi';
import React from 'react';

export default function CreditCard(props) {
  const container = {
    perspective: '40px'

  };
  const inner = {
    width: '20em',
    height: '18em',
    backgroundColor: 'white'

  }
  const blur = {
    backdropFilter: 'blur(0.8rem)'
  }
  return (
    <div className ={container}>
      <div id={inner} class="hover:bg-red-700  w-full px-4  py-4 bg-gradient-to-r from-gray-50 to-gray-200 text-gray-600 shadow-2xl sm:rounded-3xl sm:p-6 bg-clip-padding bg-opacity-60 border border-gray-200" style={{backdropFilter: 'blur(60px)'}}>
        <img className="w-1/6" alt="logo" src="https://vipps.no/documents/145/BankAxept_Logo_Black.png"/>
        <div className="flex align-center py-3">
          <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" alt="chip" />
          <FiWifi  className=" ml-2 transform text-4xl rotate-90" />
        </div>
        <h1 class="text-3xl font-bold"> 1234 4567 8901 2345 </h1>
        <div className="flex justify-between mt-3 py-2">
          <div className="text-lg">
            <p className="text-sm">VALID THRU 02/23</p>
            <p>ZAHID HOSSAIN RONTY</p>
          </div>
          <img className="w-1/6" src="https://iconape.com/wp-content/png_logo_vector/visa-debit-logo.png" alt="visa"/>
        </div>
      </div>
    </div>
  )
} 
