const Business = require('./business-model')

const confirmBusiness = async (req, res, next) => {
    const name = await Business.findBy({name: req.body.name})
    if(!req.body.name){
        res.status(401).json({message: 'Need to provide a business name'})
    }else if(name.length > 0){
        next({message: 'Business name is taken'})
    }else{
        next();
    }
}

module.exports = {
    confirmBusiness
}