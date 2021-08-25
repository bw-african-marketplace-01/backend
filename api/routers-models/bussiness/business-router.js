const router = require('express').Router()
const Business = require('./business-model')
const {confirmBusiness, checkIdExists} = require('./business-middleware')

router.post('/', confirmBusiness, checkIdExists, async (req, res, next) => {
    try{
        const newBus = await Business.add(req.body)
        res.status(201).json(newBus)
    }catch(error){next(error)}
})



module.exports = router