import React from 'react'

const Failed = () => {
  return (
        <div className='h-screen w-screen text-4xl flex flex-col items-center justify-center'>
        <h1>Failed to Connect ...</h1>
        <h6 className='text-red-400  text-lg'>Check Your internet connection</h6>
        <h6 className='text-red-400  text-sm'>Can't Fetch API</h6>
    </div>
  )
}

export default Failed