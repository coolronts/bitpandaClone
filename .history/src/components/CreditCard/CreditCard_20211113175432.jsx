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
    <div class="p-20">
  <div class="perspective-9">
    <!-- we need to add 'transform-style-3d' class to make its child live in the same 3d space -->
    <div class="w-40 h-40 p-4 bg-green-500 transform-style-3d rotate-x-30 rotate-y-35 -rotate-z-20">
      <div class="flex justify-end">
        <p
          class="p-2 translate-x-10 -translate-y-6 border border-black shadow-xl bg-white/70 translate-z-16 -rotate-x-10 -rotate-y-30 rotate-z-20"
        >
          3D transform
        </p>
      </div>
    </div>
  </div>
</div>

      <h1 class="text-3xl font-bold"> 1234 4567 8901 2345 </h1>
      <div className="flex justify-between mt-3 py-2">
        <div className="text-lg">
          <p>VALID THRU 02/23</p>
          <p>ZAHID HOSSAIN RONTY</p>
        </div>
        <img className="w-1/6" src="https://iconape.com/wp-content/png_logo_vector/visa-debit-logo.png" alt="visa"/>
      </div>
      

      
    </div>
  )
} 
