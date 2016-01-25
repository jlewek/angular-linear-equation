angular.module('ex1').service('equationResolverService',function() {
    // core resolve function
    this.resolve = function(a,b){
        var x=null;

        if(a!=0&&b!=0){
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

    };
});