var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.writeFile('writefile.txt', 'Hello content!', function (err) {
        if (err) {
            console.log(err);
            res.writeHead(500);
            res.end(err.message);
        } else {
            res.write("write file success!");
            res.end();
        }
    });
}).listen(8080);

// http://localhost:8080/