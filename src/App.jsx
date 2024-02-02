import { useState } from "react"
import "./style.css"

function App() {
  const [newItem, SetNewItem] = useState("")
  const [todos, SetTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    SetTodos(currentTodos => { return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }] })
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
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App
