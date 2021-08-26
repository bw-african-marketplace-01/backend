const Business = require('../bussiness/business-model')

const validateItems = (req, res, next) => {
    const {category, location, name, description, price} = req.body
    if(!category || !location || !name || !description || !price ){
        return next({status: 401, message: 'You must provide a category, location, name, description, price'})
    }else{
        next()
    }
}
const validateId = async(req, res, next) => {
    try{
        const {business_id} = req.body
        if(!business_id){
            next({status: 400, message: 'Please provide a business_id with your input'})
        }
        const check = await Business.findById(business_id)
        if(check.length < 1){
            next({status: 400, message: 'business_id does not exist in the database'})
        }else{
            next()
        }
    }catch(error){next(error)}
    
}

module.exports = {
    validateItems,
    validateId
}