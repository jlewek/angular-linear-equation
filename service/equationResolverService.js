angular.module('ex1').service('equationResolverService',function() {

	var equationResolverService = {};

    // core resolve function
    equationResolverService.resolve = function(a,b){
        var x=null;

        if(a!=0){
            x=(a/b)*(-1);
            return x; // return resolve of equatiton
        }
        else{
            if(b!=0){
                return true;   // equatiton is contrary
            }
            else{
                return false; // equatiton is identify
            }
        }

    }

	return equationResolverService;
});