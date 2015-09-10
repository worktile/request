angular.module("lcReqApp")
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