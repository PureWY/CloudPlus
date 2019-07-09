const express = require('express')
const router = express.Router()
const connection = require('../../Config/MySQL');
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const moment = require('moment');

const saltRounds = 10;

router.post('/',(req,res,next) => {
    let registerTime = moment().format('YYYY-MM-DD')
    let user = { phone: req.body.phone, pass_word: req.body.passWord, user_id: uuidv1(), register_time: registerTime }
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
            // 先加密密码
            bcrypt.hash(user.pass_word, saltRounds, function(err, hash) {
                if (err) {
                    console.log(err)
                    next(err);
                  } else {
                    user.pass_word = hash;
                    connection.query(sqlInsert, user, function (err, data, fields) {
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
            });
        }

    })
})

module.exports = router;