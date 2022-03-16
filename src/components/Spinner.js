import React from 'react'
import spinner from '../img/spinner.gif'
//Spinning the spinner when the whole fetch has not been implemented yet
const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '250px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Spinner