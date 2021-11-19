import { FiWifi } from 'react-icons/fi';
import React from 'react';

export default function CreditCard() {
  const blur = {
    backdropFilter: 'blur(20px)'
  }
  return(
    <div class="relative px-4 w-1/3 py-4 bg-gray-200 text-gray-600 shadow-2xl sm:rounded-3xl sm:p-6 bg-clip-padding bg-opacity-60 border border-gray-200" style={{backdropFilter: 'blur(60px)'}}>
      <img className="w-1/6" alt="logo" src="https://vipps.no/documents/145/BankAxept_Logo_Black.png"/>
      <div className="flex align-center py-3">
        <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" alt="chip" />
        <FiWifi  className=" ml-2 transform text-4xl rotate-90" />
      </div>
      <h1 class="text-3xl font-bold "> 1234 4567 8901 2345 </h1>
      <div>
        <p>VALID THRU 02/23</p>
      </div>
      <h1 class="text-3xl font-bold text-gray-600 pb-4">Zahid Hossain Ronty</h1> <span class="text-xs text-gray-200 shadow-2xl">John Snow</span>
      
    </div>
  )
} 
