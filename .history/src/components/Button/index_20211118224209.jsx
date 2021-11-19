import PropTypes from 'prop-types';
import React from 'react';

export function Button({ logo, color, name }) {
  const styles = {
    baseButton:"flex w-36 justify-between items-center py-3 px-6 text-xl font-bold rounded shadow-2xl hover:shadow-none  ",
    green:"bg-green-500 ring-1 ring-gray-900 hover:bg-green-400",
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

Button.propTypes = {
  logo: PropTypes.element,
  color: PropTypes.string,
  name: PropTypes.string
}


export function Circle({ icon, color, name, radius=12 }) {
  const styles = {
    base: `${radius} rounded shadow-2xl`,
    green: `bg-green-500 ring-1 ring-gray-900 hover:bg-green-400`,
  }
  return (
    <div className={styles.base + (color === "green" ? styles.green : "")}>
      {icon}
      <p className="text-xl font-bold">{name}</p>
    </div>
  )
}

Circle.propTypes = {
  icon: PropTypes.element,
  color: PropTypes.string,
  name: PropTypes.string
  radius: PropTypes.number
}
