import {FiSend} from 'react-icons/fi'
import React from 'react';

export default function Button({ type }) {
  const styles = {
    button: "bg-green-400 py-3 px-6 text-lg font-bold rounded flex justify-between",
    buttonSend:"shadow-2xl ring-1 ring-green-400 py-3 px-6 text-lg font-bold rounded flex justify-between mr-4"
  }
  return (
    <button className={styles.buttonSend}> <FiSend />  Send</button>
  )
}