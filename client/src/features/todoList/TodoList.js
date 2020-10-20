import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  selectTodos,
  todosAsync,
  removeTodo,
  addTodo,
  updateTodo,
} from "./todoListSlice"

function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const [inputText, setInputText] = useState("")
  useEffect(() => {
    dispatch(todosAsync())
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addTodo(inputText))
  }

  function handleActive(id, status) {
    updateTodo({ id, status })
  }

  return (
    <div className="todo-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
        ></input>
      </form>

      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <button
              onClick={() => dispatch(handleActive(todo.id, "completed"))}
            >
              done
            </button>
            <button onClick={() => dispatch(handleActive(todo.id, "active"))}>
              !done
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
            <span>{todo.description}</span>
          </li>
        )
      })}
    </div>
  )
}

export default TodoList
