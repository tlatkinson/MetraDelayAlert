exports.util = function () {   
    'use strict';
  
    function convertEpoch (epochDate) {
        var date = new Date(epochDate);
        
        return date.getHours() + ':' + date.getMinutes();
    }
  
    return {
        convertEpoch: convertEpoch
    };
};