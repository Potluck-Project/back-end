const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {tokenBuilder} = require('../../utils/tokenBuilder')
const User = require('./auth-model')
const {checkUserNameExists,validateBody,checkUserName} = require('./auth-middleware')


router.post('/register',checkUserNameExists,validateBody, (req, res,next) => {
  
  console.log("POSTpreHASH",req.body)
  let user = req.body
  const rounds = process.env.BCRYPT_ROUNDS || 8
  const hash = bcrypt.hashSync(user.password,rounds)
console.log("Post Hash",req.body)
  user.password = hash
console.log("user password reassigned",user)
  User.add(user)
  .then(newUser => {
    res.json(newUser)
  })
  .catch(next)

 
});

router.post('/login',checkUserName, (req, res,next) => {
 
  
  let {username} = req.body

  User.findBy({username})
  .then(([user])=>{
      const token = tokenBuilder(user)
      res.status(200).json({
      message:`welcome, ${user.username}`,
      token
      })
    
  })
  .catch(next)
  
});

module.exports = router;
