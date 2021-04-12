const db = require('../models');

module.exports = function(app) {
	//to get all workouts
	app.get('/api/workouts', (req, res) => {
		db.Workout.aggregate([
			{
			  $addFields: {
				totalDuration: {
				  $sum: '$exercises.duration',
				},
			  },
			},
		  ])
			.then((data) => {
			  res.json(data);
			})
			.catch((err) => {
			  res.json(err);
			});
	});

	//to add a new workout
	app.post('/api/workouts', ({ body }, res) => {
		db.Workout.create(body).then((data) => res.json(data)).catch((err) => res.json(err));
	});

	//to update a workout
	app.put('/api/workouts/:id', ({ params, body }, res) => {
		db.Workout
			.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } })
			.then((updatedWorkout) => res.json(updatedWorkout))
			.catch((err) => res.json(err));
	});

	//to get the range
	app.get('/api/workouts/range', (req, res) => {
		db.Workout.aggregate([
			{
			  $addFields: {
				totalDuration: {
				  $sum: '$exercises.duration',
				},
			  },
			},
		  ])
			.then((data) => {
			  res.json(data);
			})
			.catch((err) => {
			  res.json(err);
			});
	});
	
};
