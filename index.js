const express = require('express')
const { get } = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Server sudah berjalan')
})