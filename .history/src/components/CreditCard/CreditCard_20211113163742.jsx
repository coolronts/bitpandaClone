import React from 'react';

export default function CreditCard() {
  const blur = {
    backdropFilter: 'blur(20px)'
  }
  return(
    <div class="relative px-4 w-1/3 py-10 bg-gray-200 text-gray-600 shadow-2xl sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style={{backdropFilter: 'blur(60px)'}}>
      <h1 class="text-3xl font-bold text-gray-600 pb-4">Herno</h1> <span class="text-xs text-gray-200 shadow-2xl">John Snow</span>
      <div class="flex justify-between items-center pt-4">
        <div class="flex flex-col"> <span class="text-2xl font-bold">1234 4567 8901 2345</span> <span class="text-xs text-gray-300 font-bold">09/10</span> </div> <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" />
      </div>
    </div>
  )
} 
