import express from 'express'
import path from 'path'

const app = express()
const port = +process.env.PORT || 3000

const staticPath = path.join(__dirname, '../dist/www');
app.use(express.static(staticPath))

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})
