const express = require('express');
const { protectRoute } = require('../middleware/auth.middleware');
const router = express.Router();
const {getUsersForSidebar, getMessages, sendMessages} = require('../controllers/message.controller');

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages);

module.exports = router;