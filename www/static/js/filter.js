angular.module("lcReqApp")
    .filter("methodName", [function () {
        var methods = {
            GET     : 1,
            POST    : 2,
            PUT     : 3,
            DELETE  : 4,
            OPTIONS : 5,
            HEAD    : 6,
            TRACE   : 7,
            CONNECT : 8,
            PATH    : 9,
            PATCH   : 10,
            MOVE    : 11,
            COPY    : 12,
            CHECKOUT: 13,
            LOCK    : 14
        };
        return function (method) {
            var result;
            for (var key in methods) {
                if (methods[key] == method) {
                    result = key;
                }
            }
            return result || "Unknown";
        }
    }])
    .filter("dtAutoFormat", [function () {
        return function (date) {
            var dtMoment = moment(date);
            if (moment().isSame(dtMoment, "year")) {
                return moment(date).format("MM月DD日 HH:mm:ss")
            }
            return moment(date).format("YYYY年MM月DD日 HH:mm:ss")
        }
    }]);
