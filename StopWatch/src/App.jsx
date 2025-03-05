import { useEffect } from 'react'
import { useState } from 'react'


function App() {
const [time, setTime] = useState(0)
const [running, setRunning] = useState(false)

useEffect(()=>{
  let interval;
  if(running){
    interval = setInterval(()=>{
      setTime((prevTime)=> prevTime + 10)
    },10)
  }
  else if(!running){
    clearInterval(interval)
  }
  return ()=> clearInterval(interval)

},[running])
 
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-800 to-indigo-500 flex items-center justify-center'>
      <div className='bg-white rounded-xl shadow-xl p-16 space-y-4 hover:transform-3d hover:-translate-y-2 transition-transform'>
        <h1 className='text-3xl font-bold text-center text-indigo-700'>StopWatch</h1>
        <div className='text-5xl text-center font-bold text-rose-500'>
          <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
       <div className='flex items-center justify-around'>
       {
          running ? (
            <button
            className='bg-rose-500 hover:bg-rose-700 text-white px-4 py-2 rounded-lg font-bold text-xl'
             onClick={()=> setRunning(false)}>Stop</button>

          ): (
            <button 
            className='bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold text-xl'
            onClick={()=> setRunning(true)}>Start</button>

          )
        }
        <button 
         className='bg-blue-500 hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-bold text-xl'
        onClick={()=> setTime(0)}>Reset</button>
       </div>

       </div>
     
    </div>
  )
}

export default App
