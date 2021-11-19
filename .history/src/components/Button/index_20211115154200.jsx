import React from 'react';

export default function Button({ logo, color, name }) {
  const styles = {
    baseButton:"flex w-36 justify-between items-center py-3 px-6 text-xl font-bold rounded shadow-2xl hover:shadow  ",
    green:"bg-green-500 ring-1 ring-gray-900 hover:bg-green-200",
    transparent:"ring-1 ring-green-400 mr-4 hover:bg-gray-100"
  }
  return (
    <button className={styles.baseButton +
      (color === "green" ? styles.green :
        color === "transparent" && styles.transparent
      )
    }> {name} {logo} </button>
  )
}