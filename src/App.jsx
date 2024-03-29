import { useState } from "react"
import "./style.css"

function App() {
  const [newItem, SetNewItem] = useState("")
  const [todos, SetTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    SetTodos(currentTodos => { return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }] })
  SetNewItem("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => SetNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => {
          return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>)

        })}

      </ul>
    </>
  )
}

export default App
