import { useState } from 'react'
 
function App() {
  const [task, settask] = useState('')
  const [todos, setTodos] = useState([])
  
  const handleAdd = ()=>{
    if(task.trim() !== ''){
      const newTask = {
        id : Date.now(),
        text: task,
        completed: false
      }
      setTodos([...todos, newTask])
      settask("")
    }
  }
  const toggleComplete = (id)=>{
    setTodos(
      todos.map((todo)=> todo.id === id? {...todo, completed: !todo.completed} : todo)
    )
  }
  const removeTask =  (id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id ))
  }
  return (
    <div className='min-h-screen bg-indigo-900 flex items-center justify-center'>
      <div className='bg-white  p-6 shadow-md rounded-xl space-y-2'>
      <h1 className='text-2xl text-center font-bold text-cyan-800'>Todo-List App</h1>

       <div className='space-x-4'>
       <input type="text"
        placeholder='Enter New task'
        value={task}
        onChange={(e)=> settask(e.target.value)}
        className='border-2 border-gray-200 p-2 rounded  focus:border-cyan-500 outline-0'
      
         />
         <button
         className=' bg-cyan-600 py-2  px-3 rounded text-white font-bold cursor-pointer hover:bg-cyan-800'
          onClick={handleAdd}>Add Task</button>
       </div>

       <div className='mt-4 bg-gray-100 shadow-xl rounded '>
       {
          todos.map((todo)=>(
            <li key={todo.id}
            className='flex justify-between p-1 items-center'
            >
              <input type="checkbox" checked= {todo.completed} 
              onChange={()=> toggleComplete(todo.id)}
               />
              <span 
              onClick={()=> toggleComplete(todo.id)}
              className={`${todo.completed? 'line-through text-gray-400': 'text-indigo-800 font-bold'} ` }
              >{todo.text}</span>
              <button
              className='bg-rose-500 py-1 px-2 text-white font-bold rounded hover:bg-rose-600 cursor-pointer'
               onClick={()=> removeTask(todo.id)}>Delete</button>

            </li>
          ))
         }
       </div>
 
      </div>
 
    </div>
  )
}

export default App
