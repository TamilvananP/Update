angular.module('starter.controllers', ['ionic','googlechart'])

.controller('DashCtrl', function($scope) {})
.controller('myctrl',function($scope,$ionSideMenuDelegate){
  $scope.toggleLeftSideMenu=function(){
    $ionSideMenuDelegate.toggleLeft();
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller("chartCtrl", function ($scope) {
    $scope.chartObject = {};
    $scope.chartObject.type = "PieChart";
    $scope.chartObject.data = {
        "cols": [
            { id: "t",  type: "string" },
            { id: "s",  type: "number" }
        ], "rows": [
            {
                c: [
                   { v: "Mushrooms" },
                   { v: 3 },
                ]
            },
            //{ c: $scope.onions },
            {
                c: [
                   { v: "Olives" },
                   { v: 3 }
                ]
            },
            {
                c: [
                   { v: "Zucchini" },
                   { v: 1 },
                ]
            },
            {
                c: [
                   { v: "Pepperoni" },
                   { v: 2 },
                ]
            }
        ]
    };

    $scope.chartObject.options = {
        'title': 'Diagnox'
    };
});
