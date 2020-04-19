const express= require('express');
const mustacheExpress= require('mustache-express');


const app= express();
const mustache= mustacheExpress();
mustache.cache=null;
app.engine('mustache',mustache);
app.set('view engine','mustache');

app.use(express.static('public'));

app.get('./meds',(req,res)=>{
    res.render('meds');
});



app.listen(5001,()=>{
    console.log('Listening to port 5001');
})