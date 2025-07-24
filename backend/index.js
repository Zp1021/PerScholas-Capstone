import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import connectDb from './db.js'

import Player from './models/player.js'

// Initializing server
const app = express()

// PORT for express server
const port = process.env.PORT

// Middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Endpoints
// GET all players
app.get('/players', async (req, res) => {
    try {
        const players = await Player.find({})
        res.status(200).json(players)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})

// GET a specific player by ID
// app.get('/players/:id', async (req, res) => {
//     try {
//         const player = await Player.findById(req.params.id)
//         res.status(200).json(player)
//     } catch (e) {
//         console.log(e)
//         res.status(400).json(e)
//     }
// })

// POST a player
app.post('/players', async (req, res) => {
    try {
        const player = await Player.create(req.body)
        res.status(200).json(player)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})

// POST a specific player by ID
// app.post('/players/:id', async (req, res) => {
//     try {
//         const player = await Player.create(req.body)
//         res.status(200).json(player)
//     } catch (e) {
//         console.log(e)
//         res.status(400).json(e)
//     }
// })

// UPDATE a player score by their id
app.patch('/players/:id', async (req, res) => {
    try {
        const query = { _id: req.params.id }
        const update = { $set: req.body }
        const updatedPlayer = await Player.updateOne(query, update)

        res.status(200).json(updatedPlayer)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})

// DELETE a player score by their id
app.delete('/players/:id', async (req, res) => {
    try {
        const response = await Player.findByIdAndDelete(req.params.id)
        res.status(200).json(response)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})

// Port for express server to listen to
app.listen(port, () => {
    console.log('Listening on port: ' + port)
    connectDb()
})