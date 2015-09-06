var request = require('request');
var urls = ["http://requestb.in/11sf87g1","http://localhost:8800/NyOKsq4T","http://localhost:8880/"];
//request.get(url+"?ddd=fff", function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});

//urls.forEach(function(url){
//    request.post(url + "?hello=22222", {
//        form: {key: 'value'},
//        headers:{
//            "content-type":"application/x-www-form-urlencoded;charset=UTF-8"
//        }
//    }, function (error, response, body) {
//        if (!error) {
//            console.log(body);
//        }
//    });
//});


//
request.post(urls[1] + "?ddd=fff", {body: "sssss",headers:{"content-type":"text/plain"}}, function (error, response, body) {
    if (!error) {
        console.log(body);
    }
});
//request.put(urls[1], {json:{key:'value'}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});
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