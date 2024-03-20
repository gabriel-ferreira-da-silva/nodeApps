const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>xixi coco merda</h1>");
    fs.readFile('./index.html',"binary", (err,data) =>{
        if(err){
            console.log("deur ruim");
            console.log(err);
            res.end();
        }else{
            console.log("devia printar alguma merda");
            console.log(data);
            //res.writeHead(200,{'Content-Type':'text/html'});
            //res.write(data,"binary");
            
            res.end(data);
        }
    });
    res.end();
})

server.listen(3000,"192.168.1.101",()=>{
    console.log('listening tfor requests on port 3000');
});