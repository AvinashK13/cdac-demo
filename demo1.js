let http = require('http')
server = http.createServer(function(request, response) {
    response.write('Hello yo')
    response.end()
})

server.listen(8082)
console.log ("Server Running")
