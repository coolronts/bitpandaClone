import PropTypes from 'prop-types'
import React from 'react';

export default function Logo({alt, src, radius=12 }) {
  const styles = {
    logo: `inline object-cover w-${radius} h-${radius} mr-2 rounded-full  bg-blue-50`
  }
  return (
    <img style={{width:'20px',height:'20px'}} className={styles.logo} alt={alt} src={src} />    
  )
}

Logo.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  radius: PropTypes.number
}