const confirmBusiness = (req, res, next) => {
    if(!req.body.name){
        res.status(401).json({message: 'Need to provide a business name'})
    }else{
        next()
    }
}

module.exports = {
    confirmBusiness
}