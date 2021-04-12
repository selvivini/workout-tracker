const path= require('path');

module.exports = function(app){
//to get stats page
app.get('/stats', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

//gets the exercise page
app.get('/exercise', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public/exercise.html'))
}
);


}