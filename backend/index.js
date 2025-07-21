import express from 'express'

import 'dotenv/config'

import connectDb from './db.js'

const app = express()

const port = process.env.PORT


app.listen(port, () => {
    console.log('Listening on port: ' + port)
    connectDb()
})