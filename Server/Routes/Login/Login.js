const express = require('express')
const router = express.Router()
const connection = require('../../Config/MySQL');

router.post('/',(req,res,next) => {
    let sql = 'SELECT * from `t_user_info` where user_name = ? AND pass_word = ?'
    connection.query(sql, [req.body.userName,req.body.passWord], function (err, data, fields) {
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
    })
})

module.exports = router;