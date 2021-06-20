const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {tokenBuilder} = require('../../utils/tokenBuilder')
const User = require('./auth-model')
const {checkUserNameExists,validateBody,checkUserName} = require('./auth-middleware')


router.post('/register',checkUserNameExists,validateBody, (req, res,next) => {
  
  
  let user = req.body
  const rounds = process.env.BCRYPT_ROUNDS || 8
  const hash = bcrypt.hashSync(user.password,rounds)

  user.password = hash

  User.add(user)
  .then(user => {
    res.json(user)
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
