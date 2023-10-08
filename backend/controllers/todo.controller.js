const { v4: uuidv4 } = require("uuid")
uuidv4() // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const uuid = require("uuid")

let todo = [
  {
    id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    title: "Bring milk",
    priority: 0,
    created: 1696588906169,
    updated: null,
    deleted: false
  }
]

exports.create = (req, res) => {
  const { title, priority } = req.body

  const newTodo = {
    id: uuid.v4(),
    title: title,
    priority: parseInt(priority, 10),
    created: Date.now(),
    updated: null,
    deleted: false
  }

  todo.push(newTodo)
  res.send(newTodo)
}

exports.read = (req, res) => {
  const activeTodos = todo.filter(item => item.deleted === false)
  res.send(activeTodos)
}

exports.update = (req, res) => {
  const { id, title, priority } = req.body

  const todoIndex = todo.findIndex(item => item.id === id)

  todo[todoIndex].title = title
  todo[todoIndex].priority = parseInt(priority, 10)
  todo[todoIndex].updated = Date.now

  res.send(todo[todoIndex])
}

exports.delete = (req, res) => {
  const { id } = req.body

  const todoIndex = todo.findIndex(item => item.id === id)

  todo[todoIndex].deleted = true
  res.send(todo[todoIndex])
}
