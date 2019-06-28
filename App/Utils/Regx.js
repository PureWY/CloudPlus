// 正则表达式

// 手机号验证规则
// const phoneReg = /^((1)3(\d){9}$)|(^(1)4[5-9](\d){8}$)|(^(1)5[^4]{9}$)|(^(1)66(\d){8}$)|(^(1)7[0-8](\d){8}$)|(^(1)8(\d){9}$)|(^(1)9[8-9](\d){8}$)/
const phoneReg = /^(\d){11}$/

// 数字输入验证规则
const numberReg = /^(\d)$/

// 密码输入验证规则
const passReg = /^[a-zA-Z0-9]{6,8}$/

// 中文输入验证规则
const chineseReg = /^[\u4e00-\u9fa5]$/g

// 邮箱输入验证规则
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 身份证号输入验证规则
const cardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/


export { phoneReg, numberReg, passReg, chineseReg, emailReg, cardReg }