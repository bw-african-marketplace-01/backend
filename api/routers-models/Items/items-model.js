const db =  require('../../data/db-config')

const createItem = (newItem) => {
    return db('items').insert(newItem, ['*'])
}

const getAllItems = () => {
    return db('items').select('*')
}

const findById = (id) => {
    return db('items').where({item_id: id})
}

module.exports = {
    createItem,
    findById,
    getAllItems
}