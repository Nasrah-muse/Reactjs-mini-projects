 
import { useState } from 'react'
 
function App() {
  const [birthday, setBirthDay] = useState('')
  const [age, setAge] = useState(0)

  const calculateAge = ()=>{
    if(!birthday) return;

    const birthDate = new Date(birthday);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth()

    const dayDiff = today.getDate() - birthDate.getDate();

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
      calculatedAge --;

    }
    setAge(calculatedAge)

  }

  const reset = ()=>{
    setBirthDay("")
    setAge(0)
  }
 
  return (
    <div className='min-h-screen bg-blue-400 flex items-center justify-center'>
      <div className='w-96 bg-white shadow-xl rounded p-8  flex flex-col items-center space-y-2'>
        <h1 className='text-2xl text-indigo-600 font-bold text-center'>Age Calculator</h1>
        <h2 className='text-indigo-400 text-md text-center font-semibold'>Date of birth</h2>
        <div className=' space-y-4' >
          <input type="date"
           value={birthday}
          onChange={(e)=> setBirthDay(e.target.value)}
          className='w-full border py-2 px-4  rounded border-gray-400 outline-0 focus:border-blue-400'
           />
           <div className='space-x-4'>
           <button
           className='bg-blue-400 text-white px-4 py-2 rounded font-bold hover:bg-blue-600'
            onClick={calculateAge}>Calculate Age</button>
          <button 
          className='bg-rose-400 text-white px-4 py-2 rounded font-bold hover:bg-rose-600'
          onClick={reset}>Reset</button>
           </div>
        </div>
        {
          <p className='text-gray-500 font-bold'>{age !== 0? `Your Age is ${age}`: '---'}</p>
        }
      </div>
     </div>
  )
}

export default App
