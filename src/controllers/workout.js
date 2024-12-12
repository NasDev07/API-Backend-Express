const Workout = require('../models/workout');

const workoutController = {
    create: async (req, res) => {
        try {
            const { name, description } = req.body;
            const videoFile = req.file;

            // Buat URL untuk video
            const videoUrl = `/uploads/${videoFile.filename}`;

            const workout = new Workout({
                name,
                description,
                videoUrl
            });

            await workout.save();

            res.status(201).json({
                message: "Program latihan berhasil dibuat",
                id: workout._id,
                video_url: workout.videoUrl
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const workouts = await Workout.find();
            const formattedWorkouts = workouts.map(workout => ({
                id: workout._id,
                name: workout.name,
                description: workout.description,
                video_url: workout.videoUrl
            }));

            res.json(formattedWorkouts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = workoutController;