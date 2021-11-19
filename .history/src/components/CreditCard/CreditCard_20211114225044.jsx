import { FiWifi } from 'react-icons/fi';
import React from 'react';

export default function CreditCard({name,number,valid}) {
  const styles = {
    container: "cursor-pointer w-full px-4  py-4 bg-gradient-to-r from-gray-50 to-gray-200 text-gray-600 shadow-2xl sm:rounded-3xl sm:p-6 bg-clip-padding bg-opacity-60 border border-gray-200",
    bankAxeptLogo: "w-1/6",
    wifiLogo: "ml-2 transform text-4xl rotate-90",
    number: "text-3xl font-bold",
    texts:"flex justify-between mt-3 py-2",
  }
  return (
    
    <div class={styles.container} style={{backdropFilter: 'blur(60px)'}}>
        <img className={styles.bankAxeptLogo} alt="logo" src="https://vipps.no/documents/145/BankAxept_Logo_Black.png"/>
        <div className="flex align-center py-3 text-lg">
          <img src="https://img.icons8.com/offices/80/000000/sim-card-chip.png" width="48" alt="chip" />
          <FiWifi  className={styles.wifiLogo} />
        </div>
        <h1 class={styles.number}> {number}  </h1>
        <div className={styles.texts}>
          <div>
            <p className="text-sm">VALID THRU {valid} </p>
            <p> {name}  </p>
          </div>
          <img className="w-1/6" src="https://iconape.com/wp-content/png_logo_vector/visa-debit-logo.png" alt="visa"/>
        </div>
      </div>
  )
} 
