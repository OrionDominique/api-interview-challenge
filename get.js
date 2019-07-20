//Request framework
var request = require("request");

var options = { method: 'GET',
//API url to get data
  url: 'https://api-interview-challenge.poweredbyjourney.com/line_items/',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'accept-encoding': 'gzip, deflate',
     Host: 'api-interview-challenge.poweredbyjourney.com',
     'Postman-Token': 'a89bdc03-b2d1-411f-99f6-5d7158729d53,181a8bba-e8b2-4182-9a1f-0dceec2ce111',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.15.0',
     // Auth in order to get data
     Authorization: 'Bearer glup3jjvzxkp1r33pipwld',
     'Content-Type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});