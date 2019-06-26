const express = require('express')
const router = express.Router()
const connection = require('../../Config/MySQL');

router.post('/',(req,res,next) => {
    console.log(req.body)
    // connection.query('SELECT * from `users` where username = ', function (err, data, fields) {
    //     if (err) throw err
    
    //     console.log(data)
    // })
    res.json({
        code: 200,
        message: '登录成功'
    })
})

module.exports = router;