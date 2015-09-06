var request = require('request');
var urls = ["http://requestb.in/11sf87g1","http://localhost:8800/VJ8nn1B6","http://localhost:8880/"];
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
//request.post(urls[1] + "?ddd=fff", {body: "sssss"}, function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});
//request.put(urls[1], {json:{key:'value'}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});
//
//request.put(urls[1]+"?sss=ddf", {form:{key:'value',book:"122"}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});
//

//var body = '<?xml version="1.0" encoding="utf-8"?>' +
//    '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">'+
//    '<soap12:Body>......</soap12:Body></soap12:Envelope>';
//request.post(urls[1] + "?ddd=fff", {body:body,headers:{'Content-Type': 'text/xml'}}, function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});

//request.put(url, {json:{key:'value'}},function (error, response, body) {
//    if (!error) {
//        console.log(body);
//    }
//});