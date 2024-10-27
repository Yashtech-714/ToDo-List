import { useState } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit=()=>{

  }

  const handleDelete=(e, id)=>{
    console.log(id);
    let index=todos.findIndex(item=>{
      return item.id===id
    })
    // console.log(`index is ${index}`)
    let newTodos = todos.filter(item=>{
      return item.todo !== id 
    });
    setTodos(newTodos)
    console.log(newTodos, todos)
  }

  const handleAdd=()=>{
    setTodos([...todos, {id: uuidv4(), todo, iscompleted: false}])
    setTodo("")
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox=(e)=>{
    var id=e.target.name
    console.log(`The id is , ${id}`)
    let index=todos.findIndex(item=>{
      return item.id===id
    })
    // console.log(`index is ${index}`)
    let newTodos = [...todos];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos)
    // console.log(newTodos)
    }

  return (
    <>
      <Navbar/>
        <div className='container mx-auto bg-slate-400 p-5 my-5 rounded-xl min-h-[80vh]'>
          <div className="addTodo my-5">
            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <input onChange={handleChange} value={todo} type="text" className='w-1/2'/>
            <button onClick={handleAdd} className='bg-slate-700 hover:bg-slate-950 p-2 py-1 text-white rounded-md mx-6'>Add</button>
          </div>
          <h1 className='text-slate-800 font-bold'>Your Todos</h1>
            <div className="todos">
              {todos.map(item=>{

                return <div key={item.id} className="todo flex w-1/3 my-3 justify-between">
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} />
                  <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                  <div className="buttons">
                    <button onClick={handleEdit} className='bg-slate-700 hover:bg-slate-950 p-2 py-1 text-white rounded-md mx-1'>Edit</button>
                    <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-slate-700 hover:bg-slate-950 p-2 py-1 text-white rounded-md mx-1'>Delete</button>
                  </div>
                </div>
              })}
            </div>
        </div>
    </>
  )
}

export default App
