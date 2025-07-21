import express from 'express'

import 'dotenv/config'

import connectDb from './db.js'

import Player from './models/player.js'

const app = express()

const port = process.env.PORT

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
        console.log(response)
        res.status(200).json(response)
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
})

app.listen(port, () => {
    console.log('Listening on port: ' + port)
    connectDb()
})