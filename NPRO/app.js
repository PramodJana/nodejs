var express= require('express');

var app= express();

app.get('/home',function(request,response)
{
    response.send('This is my homepage');
});

app.get('/aboutus',function(request,response)
{
    response.send('This is a about page');
});

app.listen(5000);