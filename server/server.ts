import express from 'express'
import path from 'path';
import {fileURLToPath} from 'url'

const app = express()
const port = +process.env.PORT || 3000

const staticPath = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), 'dist/www');
console.log(`staticPath: ${staticPath}`)
app.use(express.static(staticPath))


app.listen(port, () => {
  console.log(`Listening at ${port}`)
})
