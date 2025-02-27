const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', authRouter)
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://vlad:vlad@cluster0.xmdnz.mongodb.net/')
        app.listen(PORT, () => console.log(`PORT: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()