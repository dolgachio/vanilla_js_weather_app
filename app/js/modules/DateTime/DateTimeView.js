window.varCraft = window.varCraft || {};
window.varCraft.DateTimeView = window.varCraft.DateTimeView || {};
varCraft.DateTime = varCraft.DateTime || {};
//varCraft.DateTime.pubsub = varCraft.DateTime.pubsub || new CreatePubSub();


varCraft.DateTimeView = (function(namespace){
    function init(){
        var dateField = document.querySelector('.js-main-date'),
            timeField = namespace.services.dom.getElem(namespace.CONSTANTS.cssNames.timeDigitsField);
            dayPartField = namespace.services.dom.getElem(namespace.CONSTANTS.cssNames.timeDayPartField);


        this.refreshDate = function(date){
            if(date){
                namespace.services.dom.changeContent(dateField, date);
                console.log("[DateTimeView dateRefresh]" + date);
                return true;
            }
            return false;
        };

        this.refreshTime = function (time, dayPart){
            if(time){
                console.log("[DateTimeView timeRefresh]" + time);
                namespace.services.dom.changeContent(timeField, time);
                //timeField.innerHTML = time;
                return true;
            }

        };

        this.refreshDayPart = function(dayPart){
            if(dayPart){
                namespace.services.dom.changeContent(dayPartField, dayPart);
                //dayPartField.innerHTML = dayPart;
                console.log("[DateTimeView dayPartRefresh]" + dayPart);

                return true;
            }
        };
    }

    return {
        _init: init
    };

})(window.varCraft);