const validateItems = (req, res, next) => {
    const {category, location, name, description, price} = req.body
    if(!category || !location || !name || !description || !price ){
        return next({status: 401, message: 'You must provide a category, location, name, description, price'})
    }else{
        next()
    }
}

module.exports = {
    validateItems,
}