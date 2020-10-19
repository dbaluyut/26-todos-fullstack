import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "./todoListSlice"

export default function Todo(props) {
  const dispatch = useDispatch()

  return (
    <li>
      {props.content}
      <button id={props.id} onClick={() => dispatch(removeTodo(props.id))}>
        x
      </button>
    </li>
  )
}
