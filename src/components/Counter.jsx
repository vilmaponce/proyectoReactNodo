import React, { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }

  const decrease = () => {
    setNumber(number - 1)
  }

  return (
    <div className='flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md w-64 mx-auto mt-10'>
      <h1 className='text-2xl font-bold'>

        <i className="bi bi-android"></i>

      </h1>
      <h1 className='text-2xl font-bold'>{number}</h1>
      <div className='flex space-x-4'>
        <button
          onClick={decrease}
          className='px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition cursor-pointer'
        >
          Decrease

        </button>
        <button
          onClick={increase}
          className='px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition cursor-pointer'
        >
          Increase
        </button>
      </div>

    </div>
  )
}

export default Counter