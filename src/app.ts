import express from "express";
const app = express()
const port = 7994

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://hostname:${port}`)
})