const Business = require('./business-model')
const Users = require('../../auth/user-model')

const confirmBusiness = async (req, res, next) => {
    try{
        const name = await Business.findBy({name: req.body.name})
        if(!req.body.name || !req.body.owner_id){
            res.status(401).json({message: 'Need to provide a business name and owner_id'})
        }else if(name.length > 0){
            next({message: 'Business name is taken'})
        }else{
            next();
        }
    }catch(error){next(error)}
}
const checkIdExists = async (req, res, next) => {
    try{
        const check = await Users.findById(req.body.owner_id)
        if(check.length < 1){
            next({status: 400, message: 'ID given doesnt exist'})
        }else{
            next()
        }
    }catch(error){next(error)}
}

module.exports = {
    confirmBusiness,
    checkIdExists
}