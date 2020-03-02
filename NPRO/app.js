var http= require('http');
var fs= require('fs');

var readStream= fs.createReadStream(__dirname+'/demo.txt');
var writeStream=fs.createWriteStream(__dirname+'/demowrite.txt');

var chunk_count=0;
readStream.on('data',function(d)
{
    // console.log('This is the read data'+d);
    writeStream.write(d);
    chunk_count++;
    console.log(chunk_count);
})



// var server= http.createServer(function(req,res)
// {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello There!');
// });

// server.listen(3000,'127.0.0.1');