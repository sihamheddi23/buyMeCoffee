import React from 'react'

function Coffee(props) {
  return (
    <div className='my-5'>
       
       <h4>From : {props.CurrentAccount}</h4>
      <input type="text" placeholder='Address to' className='border p-2 my-2  w-[200px] block' />
      <input type="text" placeholder='Amount' className='border p-2 my-2  w-[200px] block' />

      <button className='bg-purple-600 p-2 text-white w-[200px] mt-4'>
            Send Me 
        </button>


    </div>
  )
}

export default Coffee