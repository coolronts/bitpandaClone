import React from 'react';

export default function Button({ type,logo, color }) {
  const styles = {
    baseButton:"flex w-32 justify-between items-center py-3 px-6 text-xl font-bold rounded shadow-2xl",
    green: "bg-green-400",
    buttonSend:" ring-1 ring-green-400 mr-4 hover:shadow hover:bg-gray-100 self-center"
  }
  return (
    <button className={styles.baseButton +
      (type === "send" && styles.buttonSend) +
      (type === "green" && styles.green) 
    
    }> Send {logo} </button>
  )
}