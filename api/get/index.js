var http = require("http");
var url = require("url");
var querystring = require("querystring");

function onRequest(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");
    var data = url.parse(req.url).query;

    var parsedstring = querystring.parse(data);
    var obj = {
        id: parsedstring.id,
        name: parsedstring.name,
        timestamp: (new Date()).getTime()
    };

    res.writeHead(200, {'Content-Type': 'application/json' });
    res.write(JSON.stringify({ type: 'message', data: obj }));
    res.end();
}

http.createServer(onRequest).listen(3000, function () {
    console.log("Server has started and is listening on port 3000.");
});
