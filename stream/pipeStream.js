var fs = require('fs');

fs.createReadStream('source.txt').pipe(fs.createWriteStream('sink_pipe.txt'));