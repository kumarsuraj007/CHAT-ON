import express from 'express';
const router = express.Router();

import { requireLoginAuth } from '../middleware/authMiddleware.js';

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/remove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

export default router;
