/* eslint-disable */
import { Router } from 'express'
let connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

router.use((req, res, next) => {
  if (req.session.authUser && req.session.authUser.usertype === 'admin') {
    next()
  } else {
    res.status(401).json({ error: 'Bad credentials admin' })
  }
})

router.get('/', function (req, res) {
  let locations = connection.query('SELECT * FROM location;', {type: connection.QueryTypes.SELECT})
  let doctors = connection.query('SELECT * FROM doctor;', {type: connection.QueryTypes.SELECT})
  let appointments = connection.query('SELECT * FROM appointments;', {type: connection.QueryTypes.SELECT})
  let patients = connection.query('SELECT * FROM patient;', {type: connection.QueryTypes.SELECT})
  let specializations = connection.query('SELECT * FROM specialist;', {type: connection.QueryTypes.SELECT})

  Promise.all([locations, doctors, appointments, patients, specializations]).then((result) => {
    res.json({locations: result[0], doctors: result[1], appointments: result[2], patients: result[3], specializations: result[4]})
  })
})

router.get('/getLocations', function (req, res) {
  connection.query('SELECT * FROM location;', {type: connection.QueryTypes.SELECT})
    .then(result => {
      res.json({locations: result})
    })
})

router.post('/addPatient', bodyParser.json(), function (req, res) {
  let age = req.body.data.age
  let address = req.body.data.address
  let patientname = req.body.data.patientname
  let gender = req.body.data.gender
  let phonenum = req.body.data.phonenum

  const query = 'INSERT INTO Patient (age, address, patientname, gender, phonenum) ' +
                    'VALUES (:age, :address, :patientname, :gender, :phonenum) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        age: age,
        address: address,
        patientname: patientname,
        gender: gender,
        phonenum: phonenum
      }
    })
    .then(result => {
      res.json(result)
    })
})

router.post('/addDoctor', bodyParser.json(), function (req, res) {
  let doctorname = req.body.data.doctorname
  let address = req.body.data.address
  let email = req.body.data.email
  let phone = req.body.data.phone

  const query = 'INSERT INTO Doctor (doctorname, email, phone, address) ' +
    'VALUES (:doctorname, :email, :phone, :address) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        doctorname: doctorname,
        email: email,
        address: address,
        phone: phone
      }
    })
    .then(result => {
      res.json(result)
    })
})

router.post('/removePatient/', bodyParser.json(), function (req, res) {
  let id = req.body.data.patientid
  let query = 'DELETE FROM Patient WHERE patientid = :id'
  connection.query(query, {
    type: connection.QueryTypes.DELETE,
    replacements: {
      id: id
    }
  }).then(result => {
    res.json(result)
  })
})

export default router
