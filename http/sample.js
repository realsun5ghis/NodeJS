var http = require("http");

http.createServer(function(req, res){ 
    res.writeHead(200, {"Content-type":"Text/html"});
    res.write("node.js http test!!");
    res.end();
}).listen(8080);