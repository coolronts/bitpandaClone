import React from 'react';

export default function CoinDescription({ description }) {
  const styles = {
    container: "shadow"
  }
  return (
    <div className={styles.container} >
      <p>{description}</p>
    </div>
  );
}
    