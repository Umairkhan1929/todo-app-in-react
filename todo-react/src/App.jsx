import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
};

  const handleRemove = (index)=>{
    setTodos(todos.filter((_,todo)=> todo !== index));
  };
 
  return (
    <>
    <div className='container'>
      <h1>Todo App</h1>
      <input type="text" placeholder='Enter some things...' value={input} onChange={(e)=>setInput(e.target.value)} id='input-text'/>
      <button onClick={handleSubmit} className='add-btn'>Add</button>

      <ul className='button'>
        
        {todos.map((todo, index)=>( 
          <li key={index}>{todo}
          <button onClick={()=>handleRemove(index)} className='remove-btn'>Romove</button>
          </li>
        )
        )}

      </ul>
      </div>
    </>
  )
}

export default App