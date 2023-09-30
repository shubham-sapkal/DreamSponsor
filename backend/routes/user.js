import express from "express";

const router = express.Router();

import * as controller from '../controller/user.js';

router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);


export default router;
