const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connection = require('./db')
const task = require('./routes/taskRoutes')


const app = express()


connection()

dotenv.config()

app.use(express.json());
app.use(cors())


app.use('/tasks',task)


const port = process.env.PORT

app.listen(port, () => console.log(`Server is up and running on port ${port}...`))
