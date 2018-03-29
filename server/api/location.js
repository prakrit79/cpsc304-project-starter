/* eslint-disable */
import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

router.get('/location', function (req, res, next) {
    const query = 'SELECT * FROM location;'
    connection.query(query, { type: connection.QueryTypes.SELECT })
        .then(location => {
            console.log(location)
            res.json(location)
        })
})

export default router