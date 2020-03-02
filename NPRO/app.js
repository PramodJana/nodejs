var http= require('http');
var fs= require('fs');



var server= http.createServer(function(req,res)
{
    if(req.url==='/home' | req.url==='/')
    {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('This is a home page');
    }
    else if(req.url==='/profile')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('This is a profile page');
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/html'});
        var readStream= fs.createReadStream(__dirname+'/404.html');
        readStream.pipe(res);
    }
    // res.writeHead(200,{'Content-Type':'text/html'});
    // var readStream=fs.createReadStream(__dirname+'/index.html');
    // readStream.pipe(res);
    // res.writeHead(200,{'Content-Type':'application/json'});
    // var studentObject={
    //     name:'john',
    //     city:'New York',
    // };
    // res.end(JSON.stringify(studentObject));
});

server.listen(3000,'127.0.0.1');





// var readStream= fs.createReadStream(__dirname+'/demo.txt');
// var writeStream=fs.createWriteStream(__dirname+'/demowrite.txt');

// var chunk_count=0;
// readStream.on('data',function(d)
// {
//     // console.log('This is the read data'+d);
//     writeStream.write(d);
//     chunk_count++;
//     console.log(chunk_count);
// })


