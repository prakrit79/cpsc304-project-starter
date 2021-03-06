/* eslint-disable */
import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

router.get('/doctor', function (req, res, next) {
    const query = 'SELECT * FROM patient;'
    connection.query(query, { type: connection.QueryTypes.SELECT })
        .then(patients => {
            console.log(patients)
            res.json(patients)
        })
})

/* GET Doctors  sorted by least busy. */
router.get('/doctors', function (req, res, next) {
    // This query sorts doctors by least busy ie fewest appointments
    const query = 'SELECT *, (SELECT COUNT(*) FROM appointments WHERE doctorid = d.doctorid) as count FROM doctor d ORDER BY count;'
    connection.query(query, { type: connection.QueryTypes.SELECT })
        .then(doctors => {
            res.json(doctors)
        })
})

/* GET Doctors  that are free at datetime ie division query*/
router.get('/doctorsfree/:datetime', function (req, res, next) {
    const datetime = req.params.datetime;

    const query = 'SELECT *, (SELECT COUNT(*) FROM appointments WHERE doctorid = d.doctorid) as count FROM doctor d  WHERE ' +
        'NOT EXISTS (SELECT * from appointments WHERE doctorid = d.doctorid AND appointmentDateTime = :datetime) ORDER BY count;'
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            datetime: datetime
        }
    })
        .then(doctors => {
            res.json(doctors)
        })
})

router.post('/doctor/addRec', bodyParser.json(), function (req, res, next) {
    const recordID = req.body.data.recordID;
    const dateCreated = req.body.data.dateCreated;
    const summary = req.body.data.summary;
    const doctorid = req.session.authUser.userid;
    const patientid = req.body.data.patientid;

    const query = 'INSERT INTO Creates_Record (recordID, dateCreated, summary, doctorid, patientid) VALUES (:recordID, :dateCreated, :summary, :doctorid, :patientid) ;';
    connection.query(query,
        {
            type: connection.QueryTypes.INSERT,
            replacements: {
                recordID: recordID,
                dateCreated: dateCreated,
                summary: summary,
                doctorid: doctorid,
                patientid: patientid,
            }
        })
        .then(result => {
            // result[1] is the number of rows changed
            res.send('/doctor/')
        })
})

router.post('/doctor/addRef', bodyParser.json(), function (req, res, next) {
    const patientid = req.body.data.patientid;
    const doctorid = req.session.authUser.userid;
    const referraldoctorid = req.body.data.referraldoctorid;
    const referralDate = req.body.data.referralDate;

    const query = 'INSERT INTO Referrals (patientid, doctorid, referraldoctorid, referralDate) VALUES (:patientid, :doctorid, :referraldoctorid, :referralDate) ;';
    connection.query(query,
        {
            type: connection.QueryTypes.INSERT,
            replacements: {
                patientid: patientid,
                doctorid: doctorid,
                referraldoctorid: referraldoctorid,
                referralDate: referralDate
            }
        })
        .then(result => {
            // result[1] is the number of rows changed
            res.send('/doctor/')
        })
})

router.post('/doctor/addPrescription', bodyParser.json(), function (req, res, next) {
    const patientid = req.body.data.patientid;
    const doctorid = req.session.authUser.userid;
    const medicationName = req.body.data.medicationName;
    const dosage = req.body.data.dosage;

    const query = 'INSERT INTO Prescription (patientid, doctorid, medicationName, dosage) VALUES (:patientid, :doctorid, :medicationName, :dosage) ;';
    connection.query(query,
        {
            type: connection.QueryTypes.INSERT,
            replacements: {
                patientid: patientid,
                doctorid: doctorid,
                medicationName: medicationName,
                dosage: dosage
            }
        })
        .then(result => {
            // result[1] is the number of rows changed
            res.send('/doctor/')
        })
})

router.get('/doctor/dosages', function (req, res, next) {
    const query = 'SELECT medicationName, MAX(dosage) FROM Prescription group by medicationName;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
        })
        .then(dosages => {
            res.json(dosages)
        })
})

router.get('/doctor/dosagesmin', function (req, res, next) {
    const query = 'SELECT medicationName, MIN(dosage) FROM Prescription group by medicationName;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
        })
        .then(dosages => {
            res.json(dosages)
        })
})

router.get('/doctor/dosagesavg', function (req, res, next) {
    const query = 'SELECT MAX(t.avgdose) FROM (SELECT doctorname, (SELECT AVG(p.dosage) avgdose FROM (SELECT * FROM prescription p WHERE p.doctorid = d.doctorid) p) FROM doctor d) t;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
        })
        .then(dosages => {
            res.json(dosages)
        })
})

/* GET patient by ID. */
router.get('/doctor/:username', function (req, res, next) {
    const patientid = req.params.username
    const query = 'SELECT * FROM Patient WHERE patientid = :username ;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
            replacements: {
                username: patientid
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

router.get('/doctor/:username/medrec', function (req, res, next) {
    const patientid = req.params.username
    const query = 'SELECT * FROM Patient, Creates_Record WHERE Patient.patientid = :username and Creates_Record.patientid = :username ;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
            replacements: {
                username: patientid
            }
        })
        .then(records => {
                console.log(records)
                res.json(records)
        })
})

router.get('/doctor/:username/prescription', function (req, res, next) {
    const patientid = req.params.username
    const query = 'SELECT * FROM Patient, Prescription WHERE Patient.patientid = :username and Prescription.patientid = :username ;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
            replacements: {
                username: patientid
            }
        })
        .then(prescriptions => {
            console.log(prescriptions)
            res.json(prescriptions)
        })
})

router.get('/doctor/:username/appointment', function (req, res, next) {
    const patientid = req.params.username
    const query = 'SELECT * FROM Patient, Appointments WHERE Patient.patientid = :username and Appointments.patientid = :username ;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
            replacements: {
                username: patientid
            }
        })
        .then(appointments => {
            res.json(appointments)
        })
})


router.get('/doctor/appointments/:doctorid/:date', bodyParser.json(), function (req, res, next) {
    const doctorid = req.params.doctorid || -1
    const date = req.params.date || ''

    const query = 'SELECT cast(appointmentdatetime AS TIME) FROM appointments WHERE doctorid = :doctorid AND cast(appointmentdatetime AS DATE) = :date;'
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            doctorid: doctorid,
            date: date
        } })
        .then(appointments => {
            res.json(appointments)
        })
})

router.get('/doctor/atAddress/:address', function (req, res, next) {
    const address = req.params.address
    const query = 'SELECT * FROM doctor WHERE address = :address;'
    connection.query(query,
        {
            type: connection.QueryTypes.SELECT,
            replacements: {
                address: address
            }
        })
        .then(doctors => {
            res.json(doctors)
        })
})


export default router
