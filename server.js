const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    res.write('server is created')
    res.end()
}).listen(3000,()=>{
    console.log('server started');
})