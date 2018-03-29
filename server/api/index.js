import { Router } from 'express'

import users from './users'
import patient from './patient'
import doctor from './doctor'
import admin from './admin'

const router = Router()

router.use(users)
router.use(patient)
router.use(doctor)
router.use('/admin', admin)

export default router
