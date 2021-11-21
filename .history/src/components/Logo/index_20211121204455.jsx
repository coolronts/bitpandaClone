import PropTypes from 'prop-types'
import React from 'react';

export default function Logo({alt, src, radius=12 }) {
  const styles = {
    container: `w-${radius} h-${radius} flex-shrink rounded-full ring-2 ring-white bg-blue-50`,
    logo: `object-contain rounded-full`
  }
  return (
    <div className={styles.container}>
      <img className={styles.logo} alt={alt} src={src} />
    </div>
    
  )
}

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  radius: PropTypes.number
}