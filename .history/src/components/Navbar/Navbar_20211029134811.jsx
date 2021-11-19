import React from 'react';

export default function NavBar() {
  const styles = {
    body: "bg-white shadow flex justify-between px-24 py-5 font-semibold ",
    logo: "w-12",
    menu: "text-xl flex justify-between w-1/4 ml-12 align-center",
    buttonContainer: "flex",
    button:"bg-green-400 py-3 px-6 text-lg font-bold rounded"
  }
  return (
    <div className={styles.body}>
      <img className={styles.logo} alt="logo" src="https://images.saymedia-content.com/.image/t_share/MTgyNzMyMzkxNDI3ODEwNjU2/bitpanda-exchange-and-the-best-token.png" />
      <div className={styles.menu}>
        <div>DashBoard</div>
        <div>Portfolio</div>
        <div>Prices</div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Trade</button>
        <button className={styles.button}>Deposit</button>

      </div>
      
    </div>
  )
}