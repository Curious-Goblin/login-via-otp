const express = require('express')
const cors = require('cors')
const { User } = require('./schema')
const app = express()
app.use(cors())
app.use(express.json())

function generateRandomOTP() {
    // Generate a random number between 100000 and 999999 (inclusive)
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
app.post('/login', async (req, res) => {
    let username = req.headers.username
    username = parseInt(username)
    let otp = parseInt(generateRandomOTP())
    console.log(`otp is ${otp}`)
    await User.create({
        username: username,
        password: otp
    })
    // alert(`otp is ${otp}`)
    res.json({
        msg: 'user has been created',
        otp: otp
    })
})

app.listen(3000)
console.log('server is running at 3000')