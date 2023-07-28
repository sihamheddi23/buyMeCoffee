import { useEffect, useState } from 'react'

import './App.css'
import src from "./assets/logo.png";
import MetaMask from './components/MetaMask';
import Connect from './components/Connect';
import Coffee from './components/Coffee';
import Transactions from './components/Transactions';
import { ethers } from "ethers";

import {abi,address } from "./utils/constants";

function App() {
  
  const { ethereum } = window
  const [contract, setcontract] = useState(null)

  const [show, setshow] = useState(false)
  
  const [CurrentAccount, setCurrentAccount] = useState()
  
  const [transactions, settransactions] = useState([])


  function createContract() {
    if (ethereum) {
      const p = new ethers.providers.Web3Provider(ethereum)
      
      const signer=p.getSigner()
      const contract = new ethers.Contract(address,abi,signer)
      return contract
    }
  }


  useEffect(() => {
   setcontract(createContract())
  

  }, [])

  useEffect(() => {
    if (show) {
       getAllTransactions()
    }
 
   }, [show])
  


  const getAllTransactions = async()=>{
      const t = await contract.getAll()
      console.log(t)
  }

  const connectMe = async ()=> {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
      if(accounts) {
        setCurrentAccount(accounts[0]);
        console.log(CurrentAccount);

      }
   
  }


  return (
    <>
      <div className='flex flex-col items-center'>
         <div>
               
            <div  className='mt-28 flex gap-2 items-center justify-center'>
                <img src={src} alt="" className='h-[50px]' />
                <h1 className='title text-xl'>Buy Me Coffee</h1>
            </div>
            
            {!ethereum ? <MetaMask/> : !CurrentAccount? <Connect connectMe={connectMe}/>:""}
     
            
            { CurrentAccount && !show && <Coffee CurrentAccount contract/>}
            {
             CurrentAccount ?  !show? <button className='bg-cyan-600 p-2 text-white w-[200px] mt-3' onClick={()=>setshow(true)}>
                show your coffees
              </button> :
            <button className='underline text-blue-400  my-3' onClick={()=>setshow(false)}>
               Back to coffees
           </button>:""
           } 
            {show && <Transactions/> }
         </div>

      </div>
   
    </>
  )
}

export default App
