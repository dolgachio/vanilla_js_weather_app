window.varCraft.mobileModel =  window.varCraft.mobileModel || {};

window.varCraft.mobileModel = (function(namespace){
    var curState = 1;

    return {
        setState: function(newState){
            if(typeof +newState === "number" && newState >= 0 && newState <= 2 ){
                curState = newState;
                return true;
            }
            else {
                console.log("[mobileModel]: wrong newState parameter");
                return false;
            }
        },

        getState: function(){
            return curState;
        }
    }

})(window.varCraft);
