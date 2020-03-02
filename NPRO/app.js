var express= require('express');

var app= express();

app.get('/home',function(request,response)
{
    response.send('This is my homepage');
});

// app.get('/aboutus',function(request,response)
// {
//     response.send('This is a about page');
// });
app.get('/posts/:id',function(request,response)
{
    response.send('This is post : '+request.params.id);
})

app.listen(5000);