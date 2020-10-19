import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "../features/todoList/todoListSlice"

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
})
