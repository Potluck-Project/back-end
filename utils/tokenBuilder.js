const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../secret/index')

function tokenBuilder(user){
    const payload = {

username:user.username,

    }
    const options = {
expiresIn:'1d'
    }
    return jwt.sign(
     payload,
     JWT_SECRET,
     options
    )
}

module.exports = {tokenBuilder}