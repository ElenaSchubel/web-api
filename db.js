module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUser: getUser,
  addUser:addUser
}

function getUsers (knex) {
  return knex('users').select()
}

function getUser (id, knex) {
  return knex('users').where('id', id)
}

function addUser (id,knex) {
  return knex('users').where('id',id)
}
