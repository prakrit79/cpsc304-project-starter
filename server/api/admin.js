/* eslint-disable */
import { Router } from 'express'
let connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

router.get('/admin', function (req, res) {
    connection.query('SELECT * FROM location;', { type: connection.QueryTypes.SELECT })
        .then(locations => {
            connection.query('SELECT * FROM doctor;', { type: connection.QueryTypes.SELECT })
                .then(doctors => {
                  connection.query('SELECT * FROM appointments;', { type: connection.QueryTypes.SELECT })
                    .then(appointments => {
                      connection.query('SELECT * FROM patient;', { type: connection.QueryTypes.SELECT })
                        .then(patients => {
                          res.json({locations: locations, doctors: doctors, appointments: appointments, patients: patients})
                        })
                    })
                })
        })
})

export default router
