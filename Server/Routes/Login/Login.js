const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('../../Config/Jwt');
const connection = require('../../Config/MySQL');

router.post('/',(req,res,next) => {
    let sql = 'SELECT * from `t_user_info` where phone = ?'

    connection.query(sql, req.body.phone, function (err, data, fields) {
        if(err){
            console.log('报错：'+ err)
            res.json({
                code: 201,
                message: err
            })
        }
        
        if(data.length){
            bcrypt.compare(req.body.passWord, data[0].pass_word).then(match => {
                if(match){
                    //创建token
                    let token = jwt.generateToken(req.body.phone)
                    res.json({
                        code: 200,
                        body: {
                            userName: data[0].user_name,
                            phone: data[0].phone
                        },
                        token: token,
                        message: '登录成功'
                    })
                }else{
                    res.json({
                        code: 202,
                        message: '用户名或密码错误'
                    })
                }
            })
        }else{
            res.json({
                code: 202,
                message: '当前用户不存在'
            })
        }
    })
})

module.exports = router;