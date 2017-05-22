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

test.cb('addUser', (t) => { //Insert
  var expected = 99927 //returning id of the 27th object
  var user = {name: "bob", email: 'ger'} //the data we propose to send to the db
  request(app) //requesting (testing) the server
  .post('/users/add') //posting to the route
  .send({user}) //sending the proposed data as req.body.user
  .expect('Content-Type',/json/) //the returned object/variable is json (not string)
  .expect(201) //expected a 201 status code for CREATED
  .end(function (err,res) { //callback
    if (err) throw err //no error
    t.is (res.body.user_id, expected) //the returned user_id on res.body is the expected user_id
    t.end()
  })
})

test.cb('updateUser', (t) => { //update
  var expected = 1
  var user = {name: "bob", email: 'ger'}
  request (app)
  .put('/users/99901')
  .send({user})
  .expect('Content-Type', /json/)
  .expect(201)
  .end(function (err,res) {
    if (err) throw err
    t.is (res.body.row, expected)
    t.end()
  })
})
