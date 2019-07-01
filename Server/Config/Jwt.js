const jwt = require('jsonwebtoken');
// 创建 token 类
module.exports = {
    //生成token
    generateToken(phone) {
        //创建token
        const payload = { data: phone };
        const options = { expiresIn: 60 * 60 * 1};
        const secret = 'secret';
        const token = jwt.sign(payload, secret, options);

        return token
    },

    // 校验token
    verifyToken(token) {
        let res = ''
        function getVerify(){
            jwt.verify(token, 'secret', function(err, decoded) {
                return decoded
            });
        }
        async function verifyToken(){
            let v_Token = await getVerify()
            return v_Token
        }

        verifyToken().then(res => {
            console.log(res)
        }) 
    }

}
