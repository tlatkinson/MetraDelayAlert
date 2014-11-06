(function() {
    'use strict';

    var baseUrl = 'jcr:content/trainTracker.get_train_data.json',
        ajaxRequest = require('ma/service/ajaxRequest').ajaxRequest,
        httpMethod = require('ma/service/httpMethod').httpMethod;
    
    exports.getMetraTrainsByTime = function (time, successFunc) {
        //line=UP-W&origin=OTC&destination=OAKPARK&ck=
        //line=UP-W&origin=OAKPARK&destination=OTC&ck=
        ajaxRequest({
            url: baseUrl + '?line=UP-W&origin=OAKPARK&destination=OTC&ck=' + time,
            success: successFunc
        });
    };
}());