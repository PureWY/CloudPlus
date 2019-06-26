const express = require('express')
const router = express.Router()

router.get('/',(req,res,next) => {
    res.json({
        code: 200,
        message: '登录成功'
    })
})

module.exports = router;