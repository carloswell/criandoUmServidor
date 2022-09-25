const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/plain"});

    switch(req.url){
        case "/":
            res.end("você está na página home!")
            break;

           case "/contato":
            res.end("você está na página contato!")
            break;
    }

    res.end("meu primeiro");

    
}).listen(1914);