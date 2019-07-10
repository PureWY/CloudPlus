const express = require('express');
const router = express.Router();
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
        
        let { pass_word,...otherInfo } = data[0]
        res.json({
            code: 200,
            body: otherInfo,
            message: '用户信息查询成功'
        })
    })
})

router.post('/update',(req,res,next) => {
    let sqlInsert = 'UPDATE `t_user_info` SET ? where phone = ?'

    connection.query(sqlInsert, [req.body,req.body.phone], function (err, data, fields) {
        if(err){
            console.log('报错：'+ err)
            res.json({
                code: 201,
                message: err
            })
        }

        console.log(data)
        
        res.json({
            code: 200,
            message: '信息更新成功'
        })
    })
})


module.exports = router