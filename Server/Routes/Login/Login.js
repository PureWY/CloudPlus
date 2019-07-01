const express = require('express')
const router = express.Router()
const connection = require('../../Config/MySQL');

router.post('/',(req,res,next) => {
    console.log(req.body)
    let sql = 'SELECT * from `t_user_info` where phone = ? AND pass_word = ?'

    connection.query(sql, [req.body.phone,req.body.passWord], function (err, data, fields) {
        if(err){
            console.log('报错：'+ err)
            res.json({
                code: 201,
                message: err
            })
        }
        
        if(data.length){
            res.json({
                code: 200,
                body: {
                    userName: data[0].user_name,
                    phone: data[0].phone
                },
                message: '登录成功'
            })
        }else{
            res.json({
                code: 202,
                message: '用户名或密码错误'
            })
        }

        console.log(data)
        // 结束会话
        // connection.release();
    })
})

module.exports = router;