// require the express library
const express = require('express');
const handlebars = require('express-handlebars');

// create an instance of the library app server
const app = express()

/* 
	express configs
	==========================================
	==========================================
	==========================================
	==========================================
	==========================================
	==========================================
*/

app.engine('handlebars', handlebars());

// this line sets handlebars to be the default view engine
app.set('view engine', 'handlebars')


/* 
	==========================================
	==========================================
	==========================================
	==========================================
	==========================================
	==========================================
*/



// when we get a request to requestLocation, do something
let requestLocation = '/:name';

let handleRequest = (request, response) => {
  console.log("handling request");
  //let resp = "year is: "+request.params.year + " and color is: "+request.params.color;
  //let resp = "<html><body><h1>"+request.params.name+"</h1></body></html>";
  //response.send(resp)
  let context = {
  	name: request.params.name,
  	height:1234,
	people: [
  	  "Yehuda Katz",
	  "Alan Johnson",
	  "Charles Jolley"
	]
  }
  response.render('home', context );
};


app.get(requestLocation, handleRequest);


app.listen(3000);
console.log("starting server");