const db = require('../models');
module.exports = function(app) {
	//to get all workouts
	app.get('/api/workouts', (req, res) => {
		db.Workout.find({}).then((workouts) => res.json(workouts)).catch((err) => res.send(err));
	});

	//to add a new workout
	app.post('/api/workouts', (req, res) => {
		db.Workout.create({}).then((data) => res.json(data)).catch((err) => res.json(err));
	});

	 //add excerise, set id, push to model, set true
     app.put("/api/workouts/:workout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id},
                                    {$push: {excercises:body }},
                                    { upsert: true, useFindandModify:false},
                                    updatedWorkout => {
                                        res.json(updatedWorkout);
                                    })
    });
    //to add a range
    app.post('/api/workouts/range',(req,res)=>{

    })
};
