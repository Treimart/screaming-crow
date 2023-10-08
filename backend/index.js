const express = require("express")
const app = express()
const port = 8080
const catsRoutes = require("./routes/cats.routes")

app.use(express.json())

app.use("/cats", catsRoutes)

app.get("/", (req, res) => {
  res.send("Hello World 2023!")
})

app.get("/flights/:from-:to", (req, res) => {
  console.log(req.body)

  res.send({
    params: req.params,
    body: req.body
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
