const jwt = require('jsonwebtoken');
const login = require('./Login/Login')
const register = require('./Register/Register')
const userInfo = require('./UserInfo/UserInfo')


const routers = (app) => {
    // token校验
    app.use(function (req, res, next) {
        if (req.url != '/login' && req.url != '/register') {
            let token = req.headers._tk;
            if(!token){
                res.json({
                    code: 401,
                    message: '账号未登录，请登录'
                })
            }else{
                jwt.verify(token, 'secret', function(err, decoded) {
                    if(decoded){
                        next()
                    }else{
                        res.json({
                            code: -9001,
                            message: '账号登录过期，请重新登录'
                        })
                    }
                });
            }
            
        } else {
            next();
        }
    });

    app.use('/login',login);
    app.use('/register',register);
    app.use('/userInfo',userInfo);

    //定制404页面
    app.use(function(req,res){
        res.status(404);
        res.render('404');
    });

    //定制500页面
    app.use(function(err,req,res,next){
        console.log('err.stack');
        res.status(500);
        res.send('500');
    });
}

module.exports = routers;