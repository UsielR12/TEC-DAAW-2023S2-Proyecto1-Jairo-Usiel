const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/firstStage', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'challenge.html'))
})

router.get('/desert', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'desert', 'main.html'))
})

router.get('/desert-step1', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'desert', 'step1.html'))
})

router.get('/desert-step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'desert', 'step2.html'))
})

router.get('/desert-step3', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'desert', 'step3.html'))
})

router.get('/desert-step4', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'desert', 'step4.html'))
})

router.get('/sea', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sea', 'main.html'))
})

router.get('/sea-step1', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sea', 'step1.html'))
})

router.get('/sea-step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sea', 'step2.html'))
})

router.get('/sea-step3', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'sea', 'step3.html'))
})

router.get('/jungle', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'jungle', 'main.html'))
})

router.get('/jungle-step1', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'jungle', 'step1.html'))
})

router.get('/jungle-step2', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'jungle', 'step2.html'))
})

router.get('/jungle-step3', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'jungle', 'step3.html'))
})

router.get('/jungle-step4', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'jungle', 'step4.html'))
})



router.get('/finishAdventure', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'finishGame.html'))
})


module.exports = router