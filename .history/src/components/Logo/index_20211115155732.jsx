import React from 'react';

export default function Logo({alt, src }) {
  const styles = {
    logo: "w-12 flex-shrink inline-block h-12 rounded-full ring-2 ring-white"
  }
  return (
    <img className={styles.logo} alt={alt} src={src} />
  )
}