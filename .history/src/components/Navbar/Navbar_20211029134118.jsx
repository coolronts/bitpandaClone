import React from 'react';

export default function NavBar() {
  const styles = {
    body: "bg-white shadow flex px-12 py-5 text-lg font-semibold justify-between",
    logo:"w-12"
  }
  return (
    <div className={styles.body}>
      <img className={styles.logo} src="https://images.saymedia-content.com/.image/t_share/MTgyNzMyMzkxNDI3ODEwNjU2/bitpanda-exchange-and-the-best-token.png" />
      <div>DashBoard</div>
      <div>Portfolio</div>
      <div>Prices</div>
    </div>
  )
}