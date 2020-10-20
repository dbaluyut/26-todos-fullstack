import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const todoListSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload
    },
  },
})

export const { setTodos } = todoListSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const todosAsync = () => (dispatch) => {
  axios.get("/api/todos").then((resp) => {
    dispatch(setTodos(resp.data))
  })
}

export const removeTodo = (id) => (dispatch) => {
  axios.delete("/api/todos/" + id).then((r) => {
    dispatch(todosAsync())
  })
}

export const addTodo = (text) => (dispatch) => {
  axios.post("/api/todos", { description: text }).then((resp) => {
    // console.log(obj)
    dispatch(todosAsync())
  })
}

export const updateTodo = (obj) => (dispatch) => {
  axios.patch("/api/todos" + obj.id, { status: obj.status }).then((resp) => {
    // console.log(obj)
    dispatch(todosAsync())
  })
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodos = (state) => state.todos.todos

export default todoListSlice.reducer
