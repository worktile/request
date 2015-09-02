var request = require('request');
var url = 'http://requestb.in/rjwahtrj';//http://127.0.0.1:8800/91347979355447a7a477c534846749d0';
//request.get(url+"?ddd=fff", function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});
//
//
//request.post(url, {form:{key:'value'}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});


request.post(url+"?ddd=fff", {json:{key:'value'}},function (error, response, body) {
    if (!error) {
        console.log(body);
    }
});

//request.put(url, {form:{key:'value'}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});
//
//request.put(url, {json:{key:'value'}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});