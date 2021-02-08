//include http module
var http = require('http');

http.createServer(function(req,res){
        //store URL in variable q_string

        var q_string = req.url;
        switch(q_string) {
                case '/':
                                res.writeHead(200, { 'Content-Type': 'text/plain' });
			        res.write('Hi All !!!!!');
			        res.write('\n\n');
                                res.write('Welcome To GlistenSoft Demo of CI/CD Pipeline!')
                                res.end();
                                break;
                        case '/about':
                                res.writeHead(200, { 'Content-Type': 'text/plain' });
                                res.write('About Us');
                                res.write('\n\n');
                                res.write('Glisten Software Pvt. Ltd. Baner, Pune');
                                res.write('\n\n');
                                res.end('Find out more: https://www.glistensoft.com/');
                                break;
                        default:
                                res.writeHead(404, { 'Content-Type': 'text/plain' });
                                res.end('Not Found');
                                break;
        }
}).listen(3333);
console.log('Server started on localhost:3333; press Ctrl-C to terminate....');
