console.log("Hi I am Deep")

const express = require('express')
const app = express()

const dogs = [
  { name: "Panzo", breed: "Rot" },
  { name: "Panzo", breed: "Rot" }
]

const port = 8000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.get("/", (req, res) => {
  // res.send("Hey This is working")
  res.json(dogs)
})

app.get("/about-us", (req, res) => {
  res.send("This is about us page")
})

app.get("/dogs/:id", (req, res) => {
  res.send(`Dog Name is ${req.params.id}`)
})