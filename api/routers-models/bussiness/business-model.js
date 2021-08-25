const db = require('../../data/db-config')

function findBy(filter) {
    return db("businesses").where(filter);
  }

function findById(id){
    return db('businesses').where({business_id: id}).select('business_id', 'name')
}

async function add(business) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db('businesses').insert({name: business.name, user_id: business.user_id}, ['business_id', 'name', 'user_id'])
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