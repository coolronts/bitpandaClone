import React from 'react';

export default function CoinDescription({ description }) {
  const styles = {
    container: "shadow px-12 py-6 bg-white mx-12"
  }
  return (
    <div className={styles.container} >
      <p>{description}</p>
    </div>
  );
}
    