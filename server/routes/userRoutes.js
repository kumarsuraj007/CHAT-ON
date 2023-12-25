import express from 'express';
const router = express.Router();

import {createUser, loginUser, searchUser} from '../controller/userController.js'
import { requireLoginAuth } from '../middleware/authMiddleware.js';

router.route('/register').post(createUser)
router.route('/login').post(loginUser)
router.route('/').get(requireLoginAuth, searchUser)


export default router;
