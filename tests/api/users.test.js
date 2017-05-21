// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')
var request = require('supertest')

var app = require('../../server')
var setupDb = require('../setup-db')

setupDb(test, function (db) {
  app.set('knex', db)
})

test.cb('getUsers gets all users', function (t) {
  var expected = 26
  request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      t.is(res.body.users.length, expected)
      t.end()
    })
})

test.cb('getUsers single user', function (t) {
  var expected = 1
  request(app)
  .get('/users/99901')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function (err,res){
    if(err) throw err
    t.is (res.body.users.length, expected)
    t.end()
  })
})

test.cb('addUser', (t) => {
  var expected = 1
  request(app)
  .get('/add')
  .expect('Content-Type',/json/)
  .expect(302)
  .end(function (err,res) {
    if (err) throw err
    t.is (res.body.name, expected)
    t.end()
  })

})
