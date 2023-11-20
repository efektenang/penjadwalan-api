const express = require('express')

const app = express()

app.use(express.json())

app.listen(5000, '0.0.0.0', () => console.log('Server is running in port 5000'))