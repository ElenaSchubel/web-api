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

  router.post ('/add', (req,res) => {
    db.addUser(req.body.user,req.app.get('knex'))
    .then(function (user_id) {
      res.status(201).json({user_id:user_id[0]})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })

module.exports = router
