import {FiSend} from 'react-icons/fi'
import React from 'react';

export default function Button({ type }) {
  const styles = {
    baseButton:"flex justify-between py-3 px-6 text-lg font-bold rounded  shadow-2xl",
    button: "bg-green-400",
    buttonSend:"ring-1 ring-green-400 mr-4"
  }
  return (
    <button className={styles.buttonSend + + (type==="Send" && styles.button)}> <FiSend />  Send</button>
  )
}