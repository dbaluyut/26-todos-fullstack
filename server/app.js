const express = require("express")
const app = express()
// const axios = require("axios")
const knex = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    database: "todo_app",
  },
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/api/todos", (req, res) => {
  knex.raw("SELECT * FROM todos").then((result) => {
    res.json(result.rows)
  })
})

app.post("/api/todos", (req, res) => {
  //code below inserts into db
  const { description } = req.body

  knex
    .raw("INSERT INTO todos (description, status, user_id) VALUES (?, ?, ?)", [
      description,
      "active",
      1,
    ])
    .then((result) => {
      res.json(result.rows)
    })
})

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params
  knex.raw("DELETE FROM todos WHERE id = ?", [id]).then((result) => {
    res.json(result.rows)
  })
})

app.patch("/api/todos/:id", (req, res) => {
  knex
    .raw("UPDATE todos SET status = ? WHERE id = ?", [
      req.body.status,
      req.body.id,
    ])
    .then((result) => {
      res.json(result.row)
    })
})

app.listen(3001, (req, res) => {
  console.log("listening to port 3001")
})
