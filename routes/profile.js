import express from 'express'

const router = express.Router();

router.get('/test', (_, res) => {
    res.send("This is a test")
})

router.get('/profile', (_, res) => {
    res.send("This is your profile"); // This message is a placeholder
})
