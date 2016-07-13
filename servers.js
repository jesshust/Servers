//require/import the HTTP module
var http = require('http'); 

//define the "good" port
var PORT = 7000; 

//define the "bad" port
var PORT2 = 7500; 

//function that gives "good" feedback 
function goodFeedback(request, response){
	response.end('You are GREAT' + request.url); 
}

var server = http.createServer(goodFeedback); 

server.listen(PORT, function(){
	console.log('Server listening on: http://localhost:%s', PORT)
}); 


//function that gives 'bad' feedback
function badFeedback (request, response){
	response.end('You suck' + request.url); 
}
var server2 = http.createServer(badFeedback); 

server2.listen(PORT2, function(){
	console.log('Server listening on: http://localhost:%s', PORT2)
}); 
