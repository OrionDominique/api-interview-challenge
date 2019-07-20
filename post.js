//Request framework
var request = require("request");

var options = { method: 'POST',
//API url to post data
  url: 'https://api-interview-challenge.poweredbyjourney.com/purchase_order/',
  headers: 
   { 'Postman-Token': 'cc0bfbe5-9895-4475-9cf1-56e5f028d75f',
     'cache-control': 'no-cache',
     // Auth in order to post data
     Authorization: 'Bearer glup3jjvzxkp1r33pipwld',
     Submission: 'Daniel3',
     'Content-Type': 'application/json' },
  body: 
  // Post data using this body
   { po4vlhht: 
      [ { lineItemId: 'ypvzh',
          stockCode: '3333',
          packSize: '5 kg',
          quantity: 38,
          lotNumbers: 
           [ { lotNumber: '32217',
               quantity: 38,
               expiryDate: '2021-02-24T00:00:00.000Z' } ] },
        { lineItemId: '0lpaf',
          stockCode: '3333',
          packSize: '2.5 kg',
          quantity: 9,
          lotNumbers: 
           [ { lotNumber: '33182',
               quantity: 9,
               expiryDate: '2020-06-20T00:00:00.000Z' } ] },
        { lineItemId: '1gv6u',
          stockCode: '5555',
          packSize: '10 kg',
          quantity: 8,
          lotNumbers: 
           [ { lotNumber: '15478',
               quantity: 8,
               expiryDate: '2020-01-22T00:00:00.000Z' } ] },
        { lineItemId: 'vapwg',
          stockCode: '5555',
          packSize: '5 kg',
          quantity: 82,
          lotNumbers: 
           [ { lotNumber: '14106',
               quantity: 29,
               expiryDate: '2020-04-28T00:00:00.000Z' },
             { lotNumber: '57365',
               quantity: 53,
               expiryDate: '2020-12-09T00:00:00.000Z' } ] } ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
