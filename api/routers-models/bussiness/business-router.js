const router = require('express').Router()
const Business = require('./business-model')
const {confirmBusiness} = require('./business-middleware')

router.post('/', confirmBusiness, async (req, res, next) => {
    try{
        const {name} = req.body
        const [{user_id}] = await Business.findUser({username: req.decodedToken.username})
        const newBus = await Business.add({name, user_id})
        res.status(201).json(newBus)
    }catch(error){next(error)}
})



module.exports = router