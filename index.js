const express = require('express')
const color = require('chalk')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.send('hi node')
})

app.listen(PORT,
    console.clear() ,
    console.log(color.cyan(`App listen on ${PORT} port`)))
