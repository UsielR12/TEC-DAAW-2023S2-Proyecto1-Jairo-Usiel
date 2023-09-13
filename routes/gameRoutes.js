const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/firstStage', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'challenge.html'))
})

router.get('/desert', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'desert', 'main.html'))
})

router.get('/sea', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sea', 'main.html'))
})

router.get('/jungle', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'jungle', 'main.html'))
})

module.exports = router