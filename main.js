require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(8);

var sequelize = new Sequelize(process.env.DB_NAME || "bvuzqveg", process.env.DB_USER || "bvuzqveg", process.env.DB_PASSWORD || "eLf95vBqOhKXzVz-4LAEnOnmI05ZHFFi", {
  host: process.env.DB_HOST || "baasu.db.elephantsql.com",
  port: parseInt(process.env.DB_PORT) || 5432,
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    idle: 30000
  },
  define: {
    timestamps: false
  }
});

module.exports = sequelize;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_session__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cookie_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cookie_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(6);







var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.use(__WEBPACK_IMPORTED_MODULE_1_cookie_session___default()({
  secret: 'cpsc 304',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000, httpOnly: false }
}));

app.set('port', port);

// Import API Routes
app.use('/api', __WEBPACK_IMPORTED_MODULE_3__api__["a" /* default */]);

// Import and Set Nuxt.js options
var config = __webpack_require__(13);
config.dev = !("production" === 'production');

// Init Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

// Build only in dev mode
if (config.dev) {
  var builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location__ = __webpack_require__(12);








var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__patient__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_3__doctor__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_5__location__["a" /* default */]);
router.use('/admin', __WEBPACK_IMPORTED_MODULE_4__admin__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* eslint-disable */

var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var userArray = [{ userid: 1, username: 'user1', password: 'pass1', usertype: 'admin' }, { userid: 2, username: 'user2', password: 'pass2', usertype: 'patient' }, { userid: 3, username: 'user3', password: 'pass3', usertype: 'doctor' }, { userid: 128, username: 'user128', password: 'pass128', usertype: 'patient' }, { userid: 111, username: 'user111', password: 'pass111', usertype: 'patient' }, { userid: 123, username: 'user123', password: 'pass123', usertype: 'patient' }, { userid: 153, username: 'user153', password: 'pass153', usertype: 'patient' }, { userid: 53, username: 'user53', password: 'pass53', usertype: 'doctor' }, { userid: 58, username: 'user58', password: 'pass58', usertype: 'doctor' }, { userid: 63, username: 'user63', password: 'pass63', usertype: 'doctor' }, { userid: 77, username: 'user77', password: 'pass77', usertype: 'doctor' }, { userid: 78, username: 'user78', password: 'pass78', usertype: 'doctor' }, { userid: 143, username: 'Diana Prince', password: 'Diana Prince', usertype: 'patient' }];

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.post('/login', bodyParser.json(), function (req, res) {
  var username = req.body.data.username;
  var password = req.body.data.password;
  var user = userArray.find(function (user) {
    return user.username === username;
  });

  if (user !== undefined && password === user.password) {
    req.session.authUser = { username: user.username, userid: user.userid, usertype: user.usertype };
    return res.json({ authUser: req.session.authUser });
  }
  res.status(401).json({ error: 'Bad credentials' });
});

router.post('/logout', function (req, res) {
  delete req.session.authUser;
  res.json({ ok: true });
});

/* GET users listing. */
router.get('/users', function (req, res, next) {
  var query = 'SELECT * FROM patient;';
  connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (users) {
    console.log(users);
    res.json(users);
  });
});

/* GET user by ID. */
router.get('/users/:username', function (req, res, next) {
  var username = req.params.username;
  var query = 'SELECT * FROM Users WHERE username = :username ;';
  connection.query(query, {
    type: connection.QueryTypes.SELECT,
    replacements: {
      username: username
    }
  }).then(function (user) {
    if (user.length === 1) {
      res.json(user[0]);
    } else {
      res.status(404).json({});
    }
  });
});

router.post('/users/update', bodyParser.json(), function (req, res, next) {
  var userid = req.body.data.userid;
  var username = req.body.data.username;
  var password = req.body.data.password;

  var query = 'UPDATE Users SET username = :username, password = :password WHERE userid = :userid ;';
  connection.query(query, {
    type: connection.QueryTypes.UPDATE,
    replacements: {
      username: username,
      password: password,
      userid: userid
    }
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send('/users');
  });
});

router.post('/users/add', bodyParser.json(), function (req, res, next) {
  var userid = req.body.data.userid;
  var username = req.body.data.username;
  var password = req.body.data.password;

  var query = 'INSERT INTO Users (username, password) VALUES (:username, :password) ;';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      username: username,
      password: password
    }
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send('/users');
  });
});

router.post('/users/addPatient', bodyParser.json(), function (req, res, next) {
  var patientname = req.body.data.patientname;
  var age = req.body.data.age;
  var address = req.body.data.address;
  var phonenum = req.body.data.phonenum;
  var gender = req.body.data.gender;

  var query = 'INSERT INTO patient (age, address, patientname, gender, phonenum) VALUES (:age, :address, :patientname, :gender, :phonenum) ;';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      patientname: patientname,
      age: age,
      address: address,
      phonenum: phonenum,
      gender: gender
    }
  }).then(function (result) {
    // result[1] is the number of rows changed
    res.send('/users');
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* eslint-disable */


var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// router.use((req, res, next) => {
//   if (req.session.authUser && req.session.authUser.usertype === 'doctor') {
//     next()
//   } else {
//     res.status(401).json({ error: 'Bad credentials' })
//   }
// })

/* GET prescription listing. */
router.get('/patient/prescription/', function (req, res, next) {
    var patientid = req.session.authUser.userid;
    var queryPrescription = connection.query('SELECT * FROM prescription WHERE patientid = :patientid', { type: connection.QueryTypes.SELECT,
        replacements: {
            patientid: patientid
        }
    });
    var queryDoctor = connection.query('SELECT * FROM doctor', { type: connection.QueryTypes.SELECT });
    Promise.all([queryPrescription, queryDoctor]).then(function (result) {
        var doctorMap = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = result[1][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var doctor = _step.value;

                var id = doctor.doctorid;
                doctorMap[id] = doctor;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = result[0][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var prescription = _step2.value;

                prescription.prescribedBy = doctorMap[prescription.doctorid].doctorname;
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        console.log(result[0]);
        res.json({ prescriptions: result[0] });
    });
});

/* GET referrals listing. */
router.get('/patient/referral/', function (req, res, next) {
    var patientid = req.session.authUser.userid;
    var referralQueryPromise = connection.query('SELECT * FROM referrals WHERE patientid = :patientid', { type: connection.QueryTypes.SELECT,
        replacements: {
            patientid: patientid
        }
    });
    var queryDoctorPromise = connection.query('SELECT * FROM doctor', { type: connection.QueryTypes.SELECT });

    Promise.all([referralQueryPromise, queryDoctorPromise]).then(function (result) {
        var doctorMap = {};
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = result[1][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var doctor = _step3.value;

                var id = doctor.doctorid;
                doctorMap[id] = doctor;
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = result[0][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var referral = _step4.value;

                referral.referredBy = doctorMap[referral.doctorid].doctorname;
                referral.referredTo = doctorMap[referral.referraldoctorid].doctorname;
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        res.json({ referrals: result[0] });
    });
});

router.get('/patient/appointments/:patientid', function (req, res, next) {
    var patientid = req.params.patientid;
    var timeFormat = "YYYY/MM/DD HH24:MI";
    var query = 'SELECT ' + 'cast(appointmentdatetime AS date) date, cast(appointmentdatetime AS TIME) aptime, to_char(appointmentdatetime, :timeFormat) appointmentdatetime, ' + 'duration, doctorname, a.doctorid, address ' + 'FROM (SELECT * FROM Appointments WHERE patientid = :patientid) a, doctor d ' + 'WHERE a.doctorid = d.doctorid ORDER BY appointmentdatetime;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            patientid: patientid,
            timeFormat: timeFormat
        }
    }).then(function (users) {
        res.json(users);
    });
});

router.post('/patient/makeAppointment/:patientid', bodyParser.json(), function (req, res, next) {
    var patientid = req.params.patientid;
    var doctorid = req.body.data.doctorid;
    var datetime = req.body.data.date + ' ' + req.body.data.booktime;
    var duration = req.body.data.duration;
    var timeFormat = "YYYY/MM/DD HH24:MI";

    var query = 'INSERT INTO appointments Values (:patientid, :doctorid, TO_TIMESTAMP(:datetime, :timeFormat), :duration)';
    connection.query(query, {
        type: connection.QueryTypes.INSERT,
        replacements: {
            patientid: patientid,
            doctorid: doctorid,
            datetime: datetime,
            duration: duration,
            timeFormat: timeFormat
        }
    });
});

router.post('/patient/updateAppointment/:patientid', bodyParser.json(), function (req, res, next) {
    var patientid = req.params.patientid;
    var doctorid = req.body.data.doctorid;
    var datetime = req.body.data.date + ' ' + req.body.data.booktime;
    var duration = req.body.data.duration;
    var appointmentdatetime = req.body.data.appointmentdatetime;
    var timeFormat = "YYYY/MM/DD HH24:MI";

    var query = 'UPDATE appointments ' + 'SET doctorid = :doctorid, appointmentdatetime = TO_TIMESTAMP(:datetime, :timeFormat)' + 'WHERE patientid = :patientid AND appointmentdatetime = :appointmentdatetime;';
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
    });
});

router.post('/patient/cancelAppointment/:patientid', bodyParser.json(), function (req, res, next) {
    var patientid = req.params.patientid;
    var datetime = req.body.data.datetime;

    var query = 'DELETE FROM Appointments WHERE patientid = :patientid AND appointmentdatetime = :datetime';
    connection.query(query, {
        type: connection.QueryTypes.DELETE,
        replacements: {
            patientid: patientid,
            datetime: datetime
        }
    }).then(function (response) {
        res.json(response);
    });
});

router.post('/patient/deleteRecords/', function (req, res, next) {
    var patientid = req.session.authUser.userid;
    var query = 'DELETE FROM creates_record WHERE patientid = :patientid';
    connection.query(query, {
        type: connection.QueryTypes.DELETE,
        replacements: {
            patientid: patientid
        }
    }).then(console.log("Records deleted successfully!"));
});

router.post('/patient/deleteAccount', function (req, res, next) {
    var patientid = req.session.authUser.userid;
    var query = 'DELETE FROM patient WHERE patientid = :patientid';
    connection.query(query, {
        type: connection.QueryTypes.DELETE,
        replacements: {
            patientid: patientid
        }
    }).then(console.log("Account deleted successfully!")).catch(console.log("Sorry. Failed to delete"));
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* eslint-disable */

var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.get('/doctor', function (req, res, next) {
    var query = 'SELECT * FROM patient;';
    connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (patients) {
        console.log(patients);
        res.json(patients);
    });
});

/* GET Doctors  sorted by least busy. */
router.get('/doctors', function (req, res, next) {
    // This query sorts doctors by least busy ie fewest appointments
    var query = 'SELECT *, (SELECT COUNT(*) FROM appointments WHERE doctorid = d.doctorid) as count FROM doctor d ORDER BY count;';
    connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (doctors) {
        res.json(doctors);
    });
});

/* GET Doctors  that are free at datetime ie division query*/
router.get('/doctorsfree/:datetime', function (req, res, next) {
    var datetime = req.params.datetime;

    var query = 'SELECT *, (SELECT COUNT(*) FROM appointments WHERE doctorid = d.doctorid) as count FROM doctor d  WHERE ' + 'NOT EXISTS (SELECT * from appointments WHERE doctorid = d.doctorid AND appointmentDateTime = :datetime) ORDER BY count;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            datetime: datetime
        }
    }).then(function (doctors) {
        res.json(doctors);
    });
});

router.post('/doctor/addRec', bodyParser.json(), function (req, res, next) {
    var recordID = req.body.data.recordID;
    var dateCreated = req.body.data.dateCreated;
    var summary = req.body.data.summary;
    var doctorid = req.session.authUser.userid;
    var patientid = req.body.data.patientid;

    var query = 'INSERT INTO Creates_Record (recordID, dateCreated, summary, doctorid, patientid) VALUES (:recordID, :dateCreated, :summary, :doctorid, :patientid) ;';
    connection.query(query, {
        type: connection.QueryTypes.INSERT,
        replacements: {
            recordID: recordID,
            dateCreated: dateCreated,
            summary: summary,
            doctorid: doctorid,
            patientid: patientid
        }
    }).then(function (result) {
        // result[1] is the number of rows changed
        res.send('/doctor/');
    });
});

router.post('/doctor/addRef', bodyParser.json(), function (req, res, next) {
    var patientid = req.body.data.patientid;
    var doctorid = req.session.authUser.userid;
    var referraldoctorid = req.body.data.referraldoctorid;
    var referralDate = req.body.data.referralDate;

    var query = 'INSERT INTO Referrals (patientid, doctorid, referraldoctorid, referralDate) VALUES (:patientid, :doctorid, :referraldoctorid, :referralDate) ;';
    connection.query(query, {
        type: connection.QueryTypes.INSERT,
        replacements: {
            patientid: patientid,
            doctorid: doctorid,
            referraldoctorid: referraldoctorid,
            referralDate: referralDate
        }
    }).then(function (result) {
        // result[1] is the number of rows changed
        res.send('/doctor/');
    });
});

router.post('/doctor/addPrescription', bodyParser.json(), function (req, res, next) {
    var patientid = req.body.data.patientid;
    var doctorid = req.session.authUser.userid;
    var medicationName = req.body.data.medicationName;
    var dosage = req.body.data.dosage;

    var query = 'INSERT INTO Prescription (patientid, doctorid, medicationName, dosage) VALUES (:patientid, :doctorid, :medicationName, :dosage) ;';
    connection.query(query, {
        type: connection.QueryTypes.INSERT,
        replacements: {
            patientid: patientid,
            doctorid: doctorid,
            medicationName: medicationName,
            dosage: dosage
        }
    }).then(function (result) {
        // result[1] is the number of rows changed
        res.send('/doctor/');
    });
});

router.get('/doctor/dosages', function (req, res, next) {
    var query = 'SELECT medicationName, MAX(dosage) FROM Prescription group by medicationName;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT
    }).then(function (dosages) {
        res.json(dosages);
    });
});

router.get('/doctor/dosagesmin', function (req, res, next) {
    var query = 'SELECT medicationName, MIN(dosage) FROM Prescription group by medicationName;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT
    }).then(function (dosages) {
        res.json(dosages);
    });
});

router.get('/doctor/dosagesavg', function (req, res, next) {
    var query = 'SELECT MAX(t.avgdose) FROM (SELECT doctorname, (SELECT AVG(p.dosage) avgdose FROM (SELECT * FROM prescription p WHERE p.doctorid = d.doctorid) p) FROM doctor d) t;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT
    }).then(function (dosages) {
        res.json(dosages);
    });
});

/* GET patient by ID. */
router.get('/doctor/:username', function (req, res, next) {
    var patientid = req.params.username;
    var query = 'SELECT * FROM Patient WHERE patientid = :username ;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            username: patientid
        }
    }).then(function (user) {
        if (user.length === 1) {
            res.json(user[0]);
        } else {
            res.status(404).json({});
        }
    });
});

router.get('/doctor/:username/medrec', function (req, res, next) {
    var patientid = req.params.username;
    var query = 'SELECT * FROM Patient, Creates_Record WHERE Patient.patientid = :username and Creates_Record.patientid = :username ;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            username: patientid
        }
    }).then(function (records) {
        console.log(records);
        res.json(records);
    });
});

router.get('/doctor/:username/prescription', function (req, res, next) {
    var patientid = req.params.username;
    var query = 'SELECT * FROM Patient, Prescription WHERE Patient.patientid = :username and Prescription.patientid = :username ;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            username: patientid
        }
    }).then(function (prescriptions) {
        console.log(prescriptions);
        res.json(prescriptions);
    });
});

router.get('/doctor/:username/appointment', function (req, res, next) {
    var patientid = req.params.username;
    var query = 'SELECT * FROM Patient, Appointments WHERE Patient.patientid = :username and Appointments.patientid = :username ;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            username: patientid
        }
    }).then(function (appointments) {
        res.json(appointments);
    });
});

router.get('/doctor/appointments/:doctorid/:date', bodyParser.json(), function (req, res, next) {
    var doctorid = req.params.doctorid || -1;
    var date = req.params.date || '';

    var query = 'SELECT cast(appointmentdatetime AS TIME) FROM appointments WHERE doctorid = :doctorid AND cast(appointmentdatetime AS DATE) = :date;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            doctorid: doctorid,
            date: date
        } }).then(function (appointments) {
        res.json(appointments);
    });
});

router.get('/doctor/atAddress/:address', function (req, res, next) {
    var address = req.params.address;
    var query = 'SELECT * FROM doctor WHERE address = :address;';
    connection.query(query, {
        type: connection.QueryTypes.SELECT,
        replacements: {
            address: address
        }
    }).then(function (doctors) {
        res.json(doctors);
    });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* eslint-disable */

var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// router.use((req, res, next) => {
//   if (req.session.authUser && req.session.authUser.usertype === 'admin') {
//     next()
//   } else {
//     res.status(401).json({ error: 'Bad credentials admin' })
//   }
// })

router.get('/', function (req, res) {
  var locations = connection.query('SELECT * FROM location;', { type: connection.QueryTypes.SELECT });
  var doctors = connection.query('SELECT * FROM doctor;', { type: connection.QueryTypes.SELECT });
  var appointments = connection.query('SELECT * FROM appointments;', { type: connection.QueryTypes.SELECT });
  var patients = connection.query('SELECT * FROM patient;', { type: connection.QueryTypes.SELECT });
  var specializations = connection.query('SELECT * FROM specialist;', { type: connection.QueryTypes.SELECT });
  Promise.all([locations, doctors, appointments, patients, specializations]).then(function (result) {
    res.json({ locations: result[0], doctors: result[1], appointments: result[2], patients: result[3], specializations: result[4] });
  });
});

router.get('/getLocations', function (req, res) {
  connection.query('SELECT * FROM location;', { type: connection.QueryTypes.SELECT }).then(function (result) {
    res.json({ locations: result });
  });
});

router.post('/addPatient', bodyParser.json(), function (req, res) {
  var age = req.body.data.age;
  var address = req.body.data.address;
  var patientname = req.body.data.patientname;
  var gender = req.body.data.gender;
  var phonenum = req.body.data.phonenum;

  var query = 'INSERT INTO Patient (age, address, patientname, gender, phonenum) ' + 'VALUES (:age, :address, :patientname, :gender, :phonenum) ;';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      age: age,
      address: address,
      patientname: patientname,
      gender: gender,
      phonenum: phonenum
    }
  }).then(function (result) {
    res.json(result);
  });
});

router.post('/addDoctor', bodyParser.json(), function (req, res) {
  var doctorname = req.body.data.doctorname;
  var address = req.body.data.address;
  var email = req.body.data.email;
  var phone = req.body.data.phone;

  var query = 'INSERT INTO Doctor (doctorname, email, phone, address) ' + 'VALUES (:doctorname, :email, :phone, :address) ;';
  connection.query(query, {
    type: connection.QueryTypes.INSERT,
    replacements: {
      doctorname: doctorname,
      email: email,
      address: address,
      phone: phone
    }
  }).then(function (result) {
    res.json(result);
  });
});

router.post('/removePatient/', bodyParser.json(), function (req, res) {
  var id = req.body.data.patientid;
  var query = 'DELETE FROM Patient WHERE patientid = :id';
  connection.query(query, {
    type: connection.QueryTypes.DELETE,
    replacements: {
      id: id
    }
  }).then(function (result) {
    res.json(result);
  });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* eslint-disable */

var connection = __webpack_require__(1);
var bodyParser = __webpack_require__(2);

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.get('/location', function (req, res, next) {
    var query = 'SELECT * FROM location;';
    connection.query(query, { type: connection.QueryTypes.SELECT }).then(function (location) {
        console.log(location);
        res.json(location);
    });
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'static/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },

  plugins: [{ src: '~/plugins/vee-validate', ssr: true }],

  modules: ['@nuxtjs/pwa']
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map