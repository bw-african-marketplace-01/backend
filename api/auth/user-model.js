const db = require('../data/db-config')

function getAllUsers() { return db('users') }

function findBy(filter) {
    return db("users").where(filter);
  }

function findById(id){
    return db('users').where({id}).first()
}

async function add(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

module.exports = {
    findBy,
    findById,
    getAllUsers,
    add
}