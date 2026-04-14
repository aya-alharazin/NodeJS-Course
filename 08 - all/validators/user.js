const joi = require('@hapi/joi')
const scheme = joi.object({
    name : joi.string().required(),
    email : joi.string().email().required(),
    username:joi.string().alphanum().min(4).max(10).message('aya must be 10 char').required(),
    password:joi.string().required()
})
const loginScheme = joi.object({
    username:joi.string().required(),
    password:joi.string().required()
})
module.exports = {scheme,loginScheme}