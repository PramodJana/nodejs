const http = require('http')

const fs = require('fs')


const aboutpage = fs.readFileSync('about.html')

const contactpage = fs.readFileSync('contact.html')

const homepage = fs.readFileSync('index.html')

const server = http.createServer((request,response)=>{
console.log(request.url)

if(request.url === '/about'){
  return response.end(aboutpage)
}
else if (request.url === '/contact'){
  return response.end(contactpage)
}
else if(request.url==='/')
{
  return response.end(homepage)
}
else {

  response.writeHead(404)
  response.end('The Page was not found')

}




})

server.listen(3000)
