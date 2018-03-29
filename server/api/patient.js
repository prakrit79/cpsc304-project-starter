/* eslint-disable */
import { Router } from 'express'

var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

// router.use((req, res, next) => {
//   if (req.session.authUser && req.session.authUser.usertype === 'doctor') {
//     next()
//   } else {
//     res.status(401).json({ error: 'Bad credentials' })
//   }
// })

/* GET prescription listing. */
router.get('/patient/prescription/:patientid', function (req, res, next) {
    const patientid = req.params.patientid
    const queryPrescription = connection.query('SELECT * FROM prescription WHERE patientid = :patientid',{ type: connection.QueryTypes.SELECT,
        replacements:{
            patientid: patientid
        }
    })
    const queryDoctor = connection.query('SELECT * FROM doctor',{ type: connection.QueryTypes.SELECT})
    Promise.all([queryPrescription,queryDoctor]).then((result) => {
        var doctorMap = {}
        for (var doctor of result[1]) {
            var id = doctor.doctorid
            doctorMap[id] = doctor
        }
        for (var prescription of result[0]) {
            prescription.prescribedBy = doctorMap[prescription.doctorid].doctorname
        }
        console.log(result[0])
        res.json({prescriptions: result[0]})
    })
})

/* GET referrals listing. */
router.get('/patient/referral/:patientid', function (req, res, next) {
    const patientid = req.params.patientid
    let referralQueryPromise = connection.query('SELECT * FROM referrals WHERE patientid = :patientid',{ type: connection.QueryTypes.SELECT,
        replacements: {
            patientid: patientid
        }
    })
    const queryDoctorPromise = connection.query('SELECT * FROM doctor',{ type: connection.QueryTypes.SELECT })

    Promise.all([referralQueryPromise,queryDoctorPromise]).then((result) => {
        var doctorMap = {}
        for (var doctor of result[1]) {
            var id = doctor.doctorid
            doctorMap[id] = doctor
        }
        for (var referral of result[0]) {
            referral.referredBy = doctorMap[referral.doctorid].doctorname
            referral.referredTo = doctorMap[referral.referraldoctorid].doctorname
        }
        res.json({referrals: result[0]})
    })
})

router.get('/patient/appointments/:patientid', function (req, res, next) {
    const patientid = req.params.patientid
    const timeFormat = "YYYY/MM/DD HH24:MI"
    const query = 'SELECT ' +
        'cast(appointmentdatetime AS date) date, cast(appointmentdatetime AS TIME) aptime, to_char(appointmentdatetime, :timeFormat) appointmentdatetime, ' +
        'duration, doctorname, a.doctorid, address ' +
        'FROM (SELECT * FROM Appointments WHERE patientid = :patientid) a, doctor d ' +
        'WHERE a.doctorid = d.doctorid ORDER BY appointmentdatetime;'
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            patientid: patientid,
            timeFormat: timeFormat
        }
    })
        .then(users => {
            res.json(users)
        })
})

router.post('/patient/makeAppointment/:patientid', bodyParser.json(), function (req, res, next) {
    const patientid = req.params.patientid
    const doctorid = req.body.data.doctorid
    const datetime = req.body.data.date + ' ' + req.body.data.booktime
    const duration = req.body.data.duration
    const timeFormat = "YYYY/MM/DD HH24:MI"

    const query = 'INSERT INTO appointments Values (:patientid, :doctorid, TO_TIMESTAMP(:datetime, :timeFormat), :duration)'
    connection.query(query, {
        type: connection.QueryTypes.INSERT,
        replacements: {
            patientid: patientid,
            doctorid: doctorid,
            datetime: datetime,
            duration: duration,
            timeFormat: timeFormat
        }
    })

})

router.post('/patient/updateAppointment/:patientid', bodyParser.json(), function (req, res, next) {
    const patientid = req.params.patientid
    const doctorid = req.body.data.doctorid
    const datetime = req.body.data.date + ' ' + req.body.data.booktime
    const duration = req.body.data.duration
    const appointmentdatetime = req.body.data.appointmentdatetime
    const timeFormat = "YYYY/MM/DD HH24:MI"


    const query = 'UPDATE appointments ' +
        'SET doctorid = :doctorid, appointmentdatetime = TO_TIMESTAMP(:datetime, :timeFormat)' +
        'WHERE patientid = :patientid AND appointmentdatetime = :appointmentdatetime;'
        //PostgreSQL does not support the CHECK command on UPDATE
        // 'CHECK (datetime BETWEEN :today AND 2018-12-31 00:00:01);'
    connection.query(query, {
        type: connection.QueryTypes.UPDATE,
        replacements: {
            patientid: patientid,
            doctorid: doctorid,
            datetime: datetime,
            duration: duration,
            timeFormat: timeFormat,
            appointmentdatetime: appointmentdatetime
        }
    })

})

router.post('/patient/cancelAppointment/:patientid', bodyParser.json(), function (req, res, next) {
    const patientid = req.params.patientid
    const datetime = req.body.data.datetime

    const query = 'DELETE FROM Appointments WHERE patientid = :patientid AND appointmentdatetime = :datetime'
    connection.query(query, {
        type: connection.QueryTypes.DELETE,
        replacements: {
            patientid: patientid,
            datetime: datetime
        }
    }).then((response) => {
        res.json(response)
    })
})

router.post('/patient/deleteRecords/:patientid', function (req, res, next) {
    const patientid = req.params.patientid

    const query = 'DELETE FROM creates_record WHERE patientid = :patientid'
    connection.query(query, {
        type: connection.QueryTypes.DELETE,
        replacements: {
            patientid: patientid,
        }
    }).then(
        console.log("Records deleted successfully!")
    )
})

router.post('/patient/deleteAccount/:patientid', function (req, res, next) {
    const patientid = req.params.patientid

    const query = 'DELETE FROM patient WHERE patientid = :patientid'
    connection.query(query, {
        type: connection.QueryTypes.DELETE,
        replacements: {
            patientid: patientid,
        }
    }).then(
        console.log("Account deleted successfully!")
    )
})

export default router
