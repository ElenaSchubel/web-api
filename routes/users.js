var express = require('express')
var router = express.Router()

var db = require('../db')

router.get ('/', function (req, res) {
  db.getUsers(req.app.get('knex'))
    .then(function (users) {
      res.json({users})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get ('/:id', (req,res)=> {
  db.getUser(req.params.id, req.app.get('knex'))
  .then(function (users) {
    res.json({users})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })

  router.post ('/users/add', (req,res) => {
    db.addUser(res.body, req.app.get('knex') =>
  .then(funtion (users){
    res.json({users})
    }))
  })

module.exports = router
