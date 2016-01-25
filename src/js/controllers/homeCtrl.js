angular.module('ex1').controller('HomeCtrl',function($scope,$interval,equationResolverService){

    $scope.resolve=function(){   // action function - click on resolve button in app

        $scope.outputResolve=equationResolverService.resolve($scope.aValue, $scope.bValue);  // return resolve of equatation

        // lighting resolve - just visual effects
        $scope.colorOfResolve='#6FD49A' ;
        $interval(function(){ $scope.colorOfResolve='white';} ,3000);
    }
});