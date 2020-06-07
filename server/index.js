const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(express.static('./client/dist'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))




/*

--- Backend Layout ---
Routes
- Request types
Models
- Handling
Controllers
- Handlers (SQL)
DB
- mysql connection

--- Frontend Layout ---

*/