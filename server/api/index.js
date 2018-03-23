import { Router } from 'express'

import users from './users'
import admin from './admin'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(admin)

export default router
