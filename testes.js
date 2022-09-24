const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/plain"})
    res.end("meu primeiro servidor!")
}).listen(1914);