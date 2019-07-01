const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

// 配置路由
const routes = require('./Routes')

const app = express()

// 开启静态文件托管
app.use('./Public',express.static('public'));

// 解决跨域
app.use(cors());

// 设置端口
app.set('port',process.env.PORT || 3031);

// 解析url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app);

//开启监听端口
app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-c to terminate.');
});