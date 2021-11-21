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


export function Circle({ icon, color, name, radius=16 }) {
  const styles = {
    container: `flex flex-col text-center w-${radius}`,
    base: `rounded-full h-${radius} w-${radius} flex items-center justify-center shadow-2xl bg-${color}-400 ring-1 ring-gray-900 hover:bg-${color}-500 hover:shadow-none cursor-pointer`,
    icon: `text-4xl text-gray-600`,
    name: `text-xl font-bold text-gray-600`
  }
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.icon}>{icon}</div>
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  )
}

Circle.propTypes = {
  icon: PropTypes.element,
  color: PropTypes.string,
  name: PropTypes.string,
  radius: PropTypes.number
}


export function SmallSquare({  color, name }) {
  const styles = {
    container: `flex flex-col text-center w-${radius}`,
    base: `flex items-center justify-center shadow-2xl bg-${color}-400 ring-1 ring-gray-900 hover:bg-${color}-500 hover:shadow-none cursor-pointer`,
    icon: `text-4xl text-gray-600`,
    name: `text-xl font-bold text-gray-600`
  }
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
    </div>
  )
}

SmallSquare.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
}
