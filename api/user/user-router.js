const router = require('express').Router()
const User = require('./user-model')


router.get('/', (req, res, next) => {
    User.find()
    .then((user) =>{
        res.json(user)
    })
    .catch(next)
})

module.exports = router