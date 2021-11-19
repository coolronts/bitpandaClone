import React from 'react';

export default function CoinDescription({ description }) {
  console.log(description.en)
  const styles = {
    container: "shadow px-12 py-6 bg-white mx-12 rounded-lg text-lg font-semibold text-justify"
  }
  return (
    <div className={styles.container} >
      <p>{description.en}</p>
    </div>
  );
}
    