let http = require('http')
server = http.createServer(function(request, response) {
    response.write('Hello mau')
    response.end()
})

server.listen(8082)
console.log ("Server Running")
