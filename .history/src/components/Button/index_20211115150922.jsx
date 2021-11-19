import {FiSend} from 'react-icons/fi'
import React from 'react';

export default function Button({ type }) {
  const styles = {
    baseButton:"flex w-48 justify-between items-center py-3 px-6 text-xl font-bold rounded shadow-2xl",
    button: "bg-green-400",
    buttonSend:" ring-1 ring-green-400 mr-4 hover:shadow hover:bg-gray-100 self-center"
  }
  return (
    <button className={styles.baseButton + (type==="send" && styles.buttonSend)}> <FiSend />  Send</button>
  )
}