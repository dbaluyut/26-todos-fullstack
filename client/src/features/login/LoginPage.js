import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function TodoListLoginPage() {
  return (
    <div>
      <h1>this is the login page</h1>
      <Link to="/todos/1">
        <h1>link to user's todo list</h1>
      </Link>
    </div>
  )
}

export default LoginPage
