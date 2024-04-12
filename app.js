
const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000
app.use(cors());

app.use(express.json())
const usuario = require('./routes/usuario')
app.use('/', usuario)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))