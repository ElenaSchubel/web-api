// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var db = require('../../db')
var setupDb = require('../setup-db.js')

setupDb(test)

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 26
  return db.getUsers(t.context.db)
    .then(function (result) {
      var actual = result.length
      t.is(actual, expected)
    })
})

test('getUsers gets a single user', function (t) {
  var expected = 'Ambitious Aardvark'
  return db.getUser(99901, t.context.db)
    .then(function (result) {
      var actual = result[0].name
      t.is(actual, expected)
    })
})

test('addUser', (t) => {
  var expected = 99927
  var data = {name: "bob", email: 'ger'}
  return db.addUser( data ,t.context.db)
  .then(function (result) {
    var actual = result[0]
    t.is(actual,expected)
  })
})

test('updateUser', (t) => {
  var expected = 'bob'
  var user = {name: "bob", email: 'ger'}
  var id = 99901
  return db.updateUser(user, id, t.context.db)
  .then(function (result){
    console.log(result);
    return db.getUser(id, t.context.db).then(function (user){
      console.log(user);
      var actual= user[0].name
      t.is(actual,expected)
    })
  })
})
