
const User = require('../auth/auth-model')
const bcrypt = require('bcryptjs')

const checkUserNameExists = (req, res, next) => {
const {username} = req.body;
try{
const user =  User.findBy({username: username})
console.log("USER!",user)
if (!user){
    console.log("NO USER",user)
    res.status(401).json({message:"username taken"})
}else{
    console.log("YES USER", user)
    next()
}
}catch(err){
    console.log("CHECK USER ERROR")
  next(err)
}
}

const checkUserName = (req, res, next) => {
const {username,password} = req.body
User.findBy({username})
.then(([user]) => {
    if(user && bcrypt.compareSync(password,user.password)){
        next()
    }else{
        res.status(401).json({message:"invalid credentials"})
    }
})  

}


const validateBody = (req, res, next) => {
const {username} = req.body;
try{
 if (username === undefined || username.trim() === ''){
     console.log("emptyUserName")
     req.body.username
     next()
 }else{
     console.log("validateUserNameExists")
     req.body.username = username.trim()
     next()
 }
}catch(err){
    console.log('validateBodyFail')
next(err)
}
}


module.exports = {
    checkUserNameExists,
    checkUserName,
    validateBody
}