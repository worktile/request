var request = require('request');
var url = "http://localhost:8800/EJ3VOty6";//"http://requestb.in/1796m411";//
//request.get(url+"?ddd=fff", function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});


request.post(url + "?hello=22222", {form: {key: 'value'}}, function (error, response, body) {
    if (!error) {
        console.log(body);
    }
});

//
request.post(url + "?ddd=fff", {json: {key: 'value'}}, function (error, response, body) {
    if (!error) {
        console.log(body);
    }
});
//
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