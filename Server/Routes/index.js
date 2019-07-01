const login = require('./Login/Login')
const register = require('./Register/Register')


const routers = (app) => {
    app.use('/login',login);
    app.use('/register',register);

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