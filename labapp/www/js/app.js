  angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','googlechart'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
        StatusBar.styleDefault();
    }
  });
})
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('top');
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
    url: '/tab',
     abstract:true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tabsdf',{
      url:'/tab1primary',
      templateUrl: 'piechart.html',

})

   .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/patients.html',
      }
    }
  })
  .state('tab.charts',{
      url:'/charts',
      views:{
     'tab-chats':{
      templateUrl: 'templates/tab-charts.html',
      controller:'chartCtrl'
    }
    }
})
  $urlRouterProvider.otherwise('/tab/dash');
});
