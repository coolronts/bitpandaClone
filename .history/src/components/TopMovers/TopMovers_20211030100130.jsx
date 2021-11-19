import { Line } from 'react-chartjs-2';
import React from 'react';
import {TiArrowSortedUp} from 'react-icons/ti'

export default function TopMovers() {
  const styles = {body: "px-24 py-12 h-full" } 
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Top Movers (24h)</h1>
    </div>
  )
}