const express = require('express')

const app = express()

app.get('/',(request,response)=>{

response.json({

  name:'Pramod Jana'
})

})

app.get('/about',(request,response)=>{

response.send({

  name:'Pramod Jana'
})

})


app.listen(3000,()=>{

console.log('App listening on port 3000')

})












// const http = require('http')
//
// const fs = require('fs')
//
//
// const aboutpage = fs.readFileSync('about.html')
//
// const contactpage = fs.readFileSync('contact.html')
//
// const homepage = fs.readFileSync('index.html')
//
// const server = http.createServer((request,response)=>{
// console.log(request.url)
//
// if(request.url === '/about'){
//   return response.end(aboutpage)
// }
// else if (request.url === '/contact'){
//   return response.end(contactpage)
// }
// else if(request.url==='/')
// {
//   return response.end(homepage)
// }
// else {
//
//   response.writeHead(404)
//   response.end('The Page was not found')
//
// }
//
//
//
//
// })
//
// server.listen(3000)
