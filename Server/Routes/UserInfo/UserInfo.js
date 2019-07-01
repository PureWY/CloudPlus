const express = require('express');
const router = express.Router();

router.post('/',(req,res,next) => {
    res.json({
        code: 200,
        body: {
            userName: 'jay'
        },
        message: '查询用户信息成功'
    })
})

module.exports = router;