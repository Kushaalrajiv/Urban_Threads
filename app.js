var http = require('http');
var fs = require('fs');
//const req = require('express/lib/request');

function OnRequest(request, response){
    //console.log("Request received", request);
    if(request.url=="/" || request.url=="/_MKN1.html" || request.url=='/_MK2.html'){
        fs.readFile('./_MKN1.html', function onreadcomp(error, data){
            if(error){
                console.log(error);
                response.writeHead(404);
                response.write("File not found");
            }
            if(data){
                response.write(data);
                response.end();
            }
        });
        fs.readFile('./_MK2.html', function onreadcomp(error, data){
            if(error){
                console.log(error);
                response.writeHead(404);
                response.write("File not found");
            }
            if(data){
                response.write(data);
                response.end();
            }
        });
    }
}

http.createServer(OnRequest).listen(3000);