const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const logger = require("morgan")

const app = express()

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
app.use(helmet())
app.use(logger("tiny"))

app.get("/", (req, res) => {
  res.send("Hola :)")
})


const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on port ${server.address().port} 🚀`)
})
