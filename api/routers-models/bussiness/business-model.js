const db = require('../../data/db-config')

function findBy(filter) {
    return db("businesses").where(filter);
  }

function findById(id){
    return db('businesses').where({business_id: id}).select('business_id', 'name')
}

async function add(business) {
  const [newUserObject] = await db('businesses').insert({name: business.name, owner_id: business.owner_id}, ['business_id', 'name', 'owner_id'])
  return newUserObject // { business_id: 7, name: 'foo', user_id: '2' }
}
function findUser(filter) {
    return db("users").where(filter).select('user_id');
  }

module.exports = {
    findBy,
    findById,
    findUser,
    add
}