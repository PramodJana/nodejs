const http = require('http')


const server = http.createServer((request,response)=>{
console.log(request.url)

if(request.url === '/about'){
  return response.end('The About Page')
}
else if (request.url === '/contact'){
  return response.end('The Contact Page')
}
else if(request.url==='/')
{
  return response.end('The Home Page')
}
else {

  response.writeHead(404)
  response.end('The Page was not found')

}




})

server.listen(3000)
