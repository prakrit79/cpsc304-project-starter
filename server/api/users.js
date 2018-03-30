/* eslint-disable */
import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const userArray = [
  {userid: 1, username: 'user1', password: 'pass1', usertype: 'admin'},
  {userid: 2, username: 'user2', password: 'pass2', usertype: 'patient'},
  {userid: 3, username: 'user3', password: 'pass3', usertype: 'doctor'},
  {userid: 128, username: 'user128', password: 'pass128', usertype: 'patient'},
  {userid: 111, username: 'user111', password: 'pass111', usertype: 'patient'},
  {userid: 123, username: 'user123', password: 'pass123', usertype: 'patient'},
  {userid: 153, username: 'user153', password: 'pass153', usertype: 'patient'},
  {userid: 53, username: 'user53', password: 'pass53', usertype: 'doctor'},
  {userid: 58, username: 'user58', password: 'pass58', usertype: 'doctor'},
  {userid: 63, username: 'user63', password: 'pass63', usertype: 'doctor'},
  {userid: 77, username: 'user77', password: 'pass77', usertype: 'doctor'},
  {userid: 78, username: 'user78', password: 'pass78', usertype: 'doctor'},
  {userid: 143, username: 'Diana Prince', password: 'Diana Prince', usertype: 'patient'}
]

const router = Router()

router.post('/login',bodyParser.json(), function (req, res) {
  const username = req.body.data.username
  const password = req.body.data.password
  let user = userArray.find(user => user.username === username)

  if (user !== undefined && password === user.password) {
    req.session.authUser = {username: user.username, userid: user.userid, usertype: user.usertype}
    return res.json({authUser: req.session.authUser})
  }
  res.status(401).json({ error: 'Bad credentials' })
})

router.post('/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

/* GET users listing. */
router.get('/users', function (req, res, next) {
    const query = 'SELECT * FROM patient;'
    connection.query(query, { type: connection.QueryTypes.SELECT })
        .then(users => {
            console.log(users)
            res.json(users)
        })
})

/* GET user by ID. */
router.get('/users/:username', function (req, res, next) {
  const username = req.params.username
  const query = 'SELECT * FROM Users WHERE username = :username ;'
  connection.query(query,
    {
      type: connection.QueryTypes.SELECT,
      replacements: {
        username: username
      }
    })
    .then(user => {
      if (user.length === 1 ) {
        res.json(user[0])
      } else {
        res.status(404).json({})
      }
    })
})

router.post('/users/update', bodyParser.json(), function (req, res, next) {
  const userid = req.body.data.userid
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'UPDATE Users SET username = :username, password = :password WHERE userid = :userid ;'
  connection.query(query,
    {
      type: connection.QueryTypes.UPDATE,
      replacements: {
        username: username,
        password: password,
        userid: userid
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  const userid = req.body.data.userid
  const username = req.body.data.username
  const password = req.body.data.password

  const query = 'INSERT INTO Users (username, password) VALUES (:username, :password) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        username: username,
        password: password
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/users')
    })
})

router.post('/users/addPatient', bodyParser.json(), function (req, res, next) {
    const patientname = req.body.data.patientname;
    const age = req.body.data.age;
    const address = req.body.data.address;
    const phonenum = req.body.data.phonenum;
    const gender = req.body.data.gender;

    const query = 'INSERT INTO patient (age, address, patientname, gender, phonenum) VALUES (:age, :address, :patientname, :gender, :phonenum) ;';
    connection.query(query,
        {
            type: connection.QueryTypes.INSERT,
            replacements: {
                patientname: patientname,
                age: age,
                address: address,
                phonenum: phonenum,
                gender: gender,
            }
        })
        .then(result => {
            // result[1] is the number of rows changed
            res.send('/users')
        })
})

export default router
