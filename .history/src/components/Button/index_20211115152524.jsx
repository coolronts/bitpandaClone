import React from 'react';

export default function Button({ logo, color, name }) {
  const styles = {
    baseButton:"filter blur-lg flex w-32 justify-between items-center py-3 px-6 text-xl font-bold rounded shadows-2xl",
    green:"bg-green-400",
    transparent:" ring-1 ring-green-400 mr-4 hover:bg-gray-100"
  }
  return (
    <button className={styles.baseButton +
      (color === "green" && styles.green) +
      (color === "transparent" && styles.transparent) 
    
    
    }> {name} {logo} </button>
  )
}