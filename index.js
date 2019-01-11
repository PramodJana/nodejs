const http = require('http')


const server = http.createServer((request,response)=>{
console.log(request.url)

response.end('Hello NodeJs')


})

server.listen(3000)
