import PropTypes from 'prop-types'
import React from 'react';

export default function Logo({alt, src, radius=12 }) {
  const styles = {
    logo: `w-${radius} h-${radius} flex-shrink inline-block  rounded-full ring-2 ring-white bg-blue-50`
  }
  return (
    <img className={styles.logo} alt={alt} src={src} />
  )
}

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  radius: PropTypes.number
}