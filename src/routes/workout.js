const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workout');
const upload = require('../middleware/upload');

// Pastikan workoutController.create dan workoutController.getAll ada
console.log(workoutController); // untuk debugging

router.post('/', upload.single('video'), workoutController.create);
router.get('/', workoutController.getAll);

module.exports = router;