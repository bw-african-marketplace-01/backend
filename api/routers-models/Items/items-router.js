const router = require('express').Router()
const Items = require('./items-model')
const {validateItems} = require('./middleware')

router.post('/', validateItems, async (req, res, next) => {
    try{
        const [newItem] = await Items.createItem(req.body)
        res.status(201).json(newItem)
    }catch(error){next(error)}
})

router.get('/', async (req, res, next) => {
    try{
        const items = await Items.getAllItems()
        res.status(200).json(items)
    }catch(error){next(error)}
})

router.get('/:id', async (req, res, next) => {
    try{
        const [item] = await Items.findById(req.params.id)
        res.status(200).json(item)
    }catch(error){next(error)}
})

module.exports = router