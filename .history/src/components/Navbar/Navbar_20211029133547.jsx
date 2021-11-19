import React from 'react';

export default function NavBar() {
  const styles = {
    body:"bg-white shadow-lg"
  }
  return (
    <div className={styles.body}>
      <div>DashBoard</div>
      <div>Portfolio</div>
      <div>Prices</div>
    </div>
  )
}