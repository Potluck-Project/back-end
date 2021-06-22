const jwt = require('jsonwebtoken');

const {JWT_SECRET} = require('../secret/index')

function tokenBuilder(user){
    const payload = {
subject: user.user_id,
username:user.username,
password:user.password,
email:user.email,
is_organizer: false
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