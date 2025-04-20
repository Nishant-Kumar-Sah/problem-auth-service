const express = require('express')
const apiRouter = require('./routes')
const bodyParser = require('body-parser');
const connectToDB = require('./config/db.config');

const app = express()
app.use(bodyParser.json());


app.use('/auth-service/api',apiRouter)

app.listen(3006, async () => {
    console.log("Auth Service Running at PORT 3006")
    await connectToDB();
    console.log("Successfully connected to DB");
})