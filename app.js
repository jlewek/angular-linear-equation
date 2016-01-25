angular.module('ex1', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('ex1').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            '': {
                templateUrl: 'partial/home/home.html',
                controller: 'HomeCtrl'
            }   ,
            'home@solution': {
                templateUrl: 'partial/solution/solution.html'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('ex1').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
