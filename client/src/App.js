import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import TodoList from "./features/todoList/TodoList"
import LoginPage from "./features/login/LoginPage"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/todos">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
