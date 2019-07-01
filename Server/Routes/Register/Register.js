const express = require('express')
const router = express.Router()
const connection = require('../../Config/MySQL');
const uuidv1 = require('uuid/v1');

router.post('/',(req,res,next) => {
    console.log(req.body)
    let user = { phone: req.body.phone, pass_word: req.body.passWord, user_id: uuidv1() }
    let sqlQuery = 'SELECT * from `t_user_info` where phone = ?'
    let sqlInsert = 'INSERT INTO `t_user_info` SET ?'

    connection.query(sqlQuery, req.body.phone, function (err, data, fields) {
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
                message: '该用户已存在，请登录'
            })
        }else{
            connection.query(sqlInsert, user, function (err, data, fields) {
                console.log('进来了')
                if(err){
                    console.log('报错：'+ err)
                    res.json({
                        code: 201,
                        message: err
                    })
                }
                
                res.json({
                    code: 200,
                    message: '注册成功'
                })
        
                console.log(data)
            })
        }

    })
})

module.exports = router;