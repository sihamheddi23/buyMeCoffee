import React from 'react'
import { ethers } from "ethers";

function Connect(props) {


  return (
    <div>
        <button className='bg-cyan-600 p-2 text-white w-[200px] mt-24' onClick={props.connectMe}>
            Connect The Wallet
        </button>
    </div>
  )
}

export default Connect