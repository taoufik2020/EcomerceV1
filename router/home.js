
const express = require('express')
const router = express.Router()


router.get('/',(req,res) => {
    res.send('<h1>hello taoufik g welcome to nodeJs</h1>')
})


module.exports = router ;