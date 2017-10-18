var showPage = require("./showPage");

function route(pathName, res) {
 var handle = {}
 handle["/"] = showPage.home;
 handle["/blog"] = showPage.blog;

 if (typeof handle[pathName] === 'function') {
   return handle[pathName](res);
 } else {
   console.log("404 Not Found " + pathName);
   res.writeHead(200, {"Content-Type": "text/plain"});
   res.end("404 Not Found " + pathName);
 }
}

exports.route = route;