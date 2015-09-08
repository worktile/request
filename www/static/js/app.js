;
(function () {
    var lcReqApp = angular.module("lcReqApp", []);

    lcReqApp
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
        }])
        .directive('clickSelect', [
            function () {
                return {
                    link: function (scope, element, attr, ctrl) {
                        element.bind('click', function () {
                            element.select();
                        });
                    }
                };
            }
        ])
        .directive('prettyprint', function () {
            function replaceText(str) {
                return str.replace(/[<>\"\'\t\n]/g, function (m) {
                    return {
                        '<' : '&lt;',
                        '>' : '&gt;',
                        "'" : '&#39;',
                        '"' : '&quot;',
                        '\t': '  ',
                        '\n': '<br/>' // needed for IE
                    }[m]
                });
            }
            return {
                restrict: 'EA',
                link    : function postLink(scope, element, attrs) {
                    if (!attrs.prettyprint)return;
                    var html = scope.$eval(attrs.prettyprint);
                    html = replaceText(html);
                    element.html(prettyPrintOne(html, '', false))

                }
            };
        })
        .controller("inspectListCtrl", ["$scope", "$http", "$timeout", function ($scope, $http, $timeout) {
            var vm = $scope.vm = {};
            vm.url = location.origin + "/" + $scope.reqId;
            vm.loadingDone = false;
            $http.get("/api/requests/" + $scope.reqId + "/inspects").success(function (result) {
                $scope.inspects = result.data.inspects;
                $scope.request = result.data.request;
                vm.loadingDone = true;
            });
            $timeout(function () {
                prettyPrint();
            }, 100);
        }])
        .controller("headerCtrl", ["$scope", "$http", "$location", function ($scope, $http, $location) {
            $http.get("/api/requests/").success(function (result) {
                $scope.requests = result.data;
            });

        }]);


})();