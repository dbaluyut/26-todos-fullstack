import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Todo from "./Todo"
import { selectTodos, todosAsync, removeTodo, addTodo } from "./todoListSlice"

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

  return (
    <div>
      <li>{inputText}</li>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setInputText(e.target.value)}
        ></input>
      </form>

      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.description}
            <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
          </li>
        )
      })}
    </div>
  )
}

export default TodoList
