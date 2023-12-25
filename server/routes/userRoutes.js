import express from 'express';
const router = express.Router();

import {createUser, loginUser} from '../controller/userController.js'

router.route('/register').post(createUser)
router.route('/login').post(loginUser)

export default router;
