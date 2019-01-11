const http = require('http')


const server = http.createServer((request,response)=>{
console.log(request.url)

response.end('Hello NodeJs')


response.writeHead(484)
})

server.listen(3000)
