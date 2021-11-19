import React from 'react';

export default function NavBar() {
  const styles = {
    body:"bg-white shadow flex px-4 py-5 text-lg font-semibold"
  }
  return (
    <div className={styles.body}>
      <div >DashBoard</div>
      <div>Portfolio</div>
      <div>Prices</div>
    </div>
  )
}