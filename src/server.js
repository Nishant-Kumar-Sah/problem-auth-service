const express = require('express')
const apiRouter = require('./routes')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());


app.use('/auth-service/api',apiRouter)

app.listen(3006, () => {
    console.log("Auth Service Running at PORT 3006")
})