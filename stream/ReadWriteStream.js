var http = require('http');
var fs = require('fs');
var sourceStream = fs.createReadStream('./source.txt');
var sinkStream = fs.createWriteStream('./sink.txt');

http.createServer(function (req, res) {
    sourceStream.on('data', function(chunk) {
        sinkStream.write(chunk);
    }).on('end', function() {
        sinkStream.end();
    });
}).listen(8080);

// http://localhost:8080