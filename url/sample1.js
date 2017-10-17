var http = require("http");
var url = require("url");

http.createServer(function(req, res) {
    var queryString = url.parse(req.url, true);
    console.log("host: " + queryString.hostname);
    console.log("path: " + queryString.pathname);
    console.log("parameter: " + queryString.search);

    var queryData = queryString.query;
    console.log("data1: " + queryData.year + " data2: " + queryData.month);

    res.writeHead(200, {"Content-type":"Text/html"});
    res.end();
}).listen(8080);

// http://localhost:8080/index.html?year=2017&month=february