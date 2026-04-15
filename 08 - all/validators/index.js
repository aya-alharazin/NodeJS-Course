const {scheme,loginScheme} = require('./user')
const reviewScheme= require('./review')
module.exports = {
    UserValidator :scheme,
    loginValidator:loginScheme,
    reviewValidator:reviewScheme

}