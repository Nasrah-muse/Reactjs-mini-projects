import { useState } from "react"

function App() {
 const [count, setCount] = useState(0)
 const handleIncrement = ()=> setCount(count + 1)
 const handleDecrement = ()=> count > 0 && setCount(count - 1)
 const handleReset = ()=> setCount(0)
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6a11cb] to-[#2575fc] flex items-center justify-center ">
      <div className="max-w-auto mx-auto  bg-white p-20 shadow-md rounded flex flex-col items-center justify-center space-y-4 ">
        <h2 className="text-3xl font-bold">Counter App</h2>
        <div className="text-2xl font-semibold">{count}</div>
        <div>
          <button onClick={handleReset} className="bg-red-500 px-4 py-2 border-0 text-white text-2xl font-bold rounded">Reset</button>
        </div>
        <div className="flex space-x-8 mt-4">
        <button onClick={handleIncrement} className="bg-green-400 text-white border-0 px-4 py-2 text-2xl font-bold rounded">+</button>
        <button onClick={handleDecrement} className="bg-blue-400 text-white border-0 px-4 py-2 text-2xl font-bold rounded">-</button>
         </div>
      </div>
    </div>
  )
}

export default App
