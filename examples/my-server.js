var http = require('http');
var delay = require('delay-read');

http.createServer(function( req, res ){
    req.setEncoding('ascii');
    delay(req);
    setTimeout(function(){
        req.on('data', function( chunk ){
            console.log(chunk);
        });
        req.on('end', function(){
            res.writeHead(200, {'Content-type': 'text/plain'})
            res.end("OK");
        });
        req.ready();
    }, 5000);
}).listen(process.argv[2] || 80);

